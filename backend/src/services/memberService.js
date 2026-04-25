import { is } from "zod/v4/locales";
import workspaceRepository from "../repositories/workspaceRepository.js";
import { isUserMemberOfWorkspace } from "./workspaceService.js";
import userRepository from "../repositories/userRepository.js";
import { StatusCodes } from "http-status-codes";

export const isMemberPartOfWorkspaceService = async (workspaceId, memberId) => {
    const workspace = await workspaceRepository.getById(workspaceId);
    if(!workspace) {
        throw new ClientError({
            explanation: "Invalid data send from client",
            message: `Workspace with id: ${workspaceId} not found`,
            statusCode: StatusCodes.NOT_FOUND
        })
    }

    const isUserMember = isUserMemberOfWorkspace(workspace, memberId);
    if(!isUserMember) {
        throw new ClientError({
            explanation: "Unauthorized access to workspace",
            message: `User with id: ${memberId} is not a member of workspace with id: ${workspaceId}`,
            statusCode: StatusCodes.UNAUTHORIZED
        })
    }

    const user = await userRepository.getById(memberId);
    return user;
}