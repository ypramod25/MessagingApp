import { MAIL_ID } from "../../config/serverConfig.js";

export const workspaceJoinMail = function (workspaceName) {
    return {
        from: MAIL_ID,
        subject: 'Welcome to the Workspace!',
        text: `You have been added to the ${workspaceName} workspace. Please log in to your account to access it.`
    };
};