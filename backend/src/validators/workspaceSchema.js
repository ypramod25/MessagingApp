import {z} from 'zod'

export const createWorkspaceSchema = z.object( {
    name: z.string().min(3).max(50),
    description: z.string().max(200).optional()
});

export const addMemberToWorkspaceSchema = z.object( {
    memberId: z.string()
});

export const addChannelToWorkspaceSchema = z.object( {
    name: z.string().min(3).max(50)
});