import { StatusCodes } from 'http-status-codes';
import { v4 as uuidv4 } from 'uuid';

import channelRepository from '../repositories/channelRepository.js';
import workspaceRepository from "../repositories/workspaceRepository.js"
import ClientError from '../utils/errors/clientError.js';
import ValidationError from '../utils/errors/validationError.js';

export const createWorkspaceService = async (workspaceData) => {
    try {
        const joinCode = uuidv4().substring(0, 6).toUpperCase();
        const response = await workspaceRepository.create({
            name: workspaceData.name,
            description: workspaceData.description,
            joinCode
        });
        
        await workspaceRepository.addMemberToWorkspace(
            response._id, // workspace id
            workspaceData.owner, // member id
            'admin'
        );

        const updatedWorkspace = await workspaceRepository.addChannelToWorkspace(
            response._id, // workspace id
            'general'
        )

        return updatedWorkspace;
    } catch (error) {
        console.log("Error in createWorkspaceService:", error);
        if(error.name === 'ValidationError') {
            throw new ValidationError({
                error: error.errors
            }, error.message);
        }
        if(error.name === 'MongoServerError' && error.code === 11000) {
            throw new ValidationError({
                error:['A workspace with same details already exists']
            }, 'A workspace with same details already exists');
        }
        throw error;
    }
}

export const getWorkspacesUserIsMemberOfService = async (userId) => {
    try {
        const response = await workspaceRepository.fetchallWorkspaceByMemberId(userId);
        if(response.length === 0) {
            throw new ValidationError({
                error: ['User is not part of any workspace']
            }, 'User is not part of any workspace');
        }
        return response;
    } catch (error) {
        console.log("Error in getWorkspacesUserIsMemberOfService:", error);
        throw error;
    }
}

export const getWorkspaceByIdService = async (workspaceId, userId) => {
    try {
        const workspace = await workspaceRepository.getById(workspaceId);
        if(!workspace) {
            throw new ClientError({
                explanation: 'Workspace with the provided id does not exist',
                message: 'Invalid workspace id',
                statusCode: StatusCodes.NOT_FOUND
            })
        }
        const isMember = workspace.members.some(member => member.memberId.toString() === userId);
        if(!isMember) {
            throw new ClientError({
                explanation: 'User is not admin of the workspace or member of the workspace',
                message: 'Only workspace admins can delete the workspace',
                statusCode: StatusCodes.UNAUTHORIZED
            })
        }
        return workspace;

    } catch (error) {
        console.log("Error in getWorkspaceByIdService:", error);
        throw error;
    }
}

export const deleteWorkspaceService = async (workspaceId, userId) => {
    try {
        const workspace = await workspaceRepository.getById(workspaceId);
        if(!workspace) {
            throw new ClientError({
                explanation: 'Workspace with the provided id does not exist',
                message: 'Invalid workspace id',
                statusCode: StatusCodes.NOT_FOUND
            })
        }
        const isAdmin = workspace.members.some(member => member.memberId.toString() === userId && member.role === 'admin');
        if(!isAdmin) {
            throw new ClientError({
                explanation: 'User is not admin of the workspace or member of the workspace',
                message: 'Only workspace admins can delete the workspace',
                statusCode: StatusCodes.UNAUTHORIZED
            })
        }
        await channelRepository.deleteMany(workspace.channels);
        const response = await workspaceRepository.deleteById(workspaceId);
        return response;
    } catch (error) {
        console.log("Error in deleteWorkspaceService:", error);
        throw error;
    }
}