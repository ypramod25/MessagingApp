import { StatusCodes } from "http-status-codes";

import { getChannelByIdService } from "../services/channelService.js";
import { customErrorResponse, internalErrorResponse, successResponse } from "../utils/common/responseObjects.js";

export const getChannelByIdController = async (req, res) => {
    try {
        const channelId = req.params.channelId;
        const channel = await getChannelByIdService(channelId, req.user);
        return res
            .status(StatusCodes.OK)
            .json(successResponse(channel, 'Channel retrieved successfully'));
    } catch (error) {
        console.log('Error in getChannelByIdController:', error);
        if(error.statusCode) {
            return res.status(error.statusCode).json(customErrorResponse(error));
        }
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(internalErrorResponse(error));
    }
}
