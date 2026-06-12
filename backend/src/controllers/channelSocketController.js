import { JOIN_CHANNEL } from "../utils/common/eventConstants.js";

export default function messageHandler(io, socket) {
    socket.on(JOIN_CHANNEL, async function joinChannelHandler(data, cb) {
        const roomId = data.channelId;
        socket.join(roomId); // Join the specified room
        console.log(`Socket ${socket.id} joined room ${roomId}`);
        cb({ 
            success: true, 
            message: `Joined channel ${roomId}`,
            data: roomId
        }); // Acknowledge the join
    });
} 