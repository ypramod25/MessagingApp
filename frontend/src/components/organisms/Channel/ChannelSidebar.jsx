import { Hash } from "lucide-react";

export const ChannelSidebar = () => {
    return (
        <div className="h-full bg-slate-100 border-r p-3">
            <h2 className="font-semibold mb-3">Channels</h2>

            <div className="space-y-2">
                <div className="flex items-center gap-2 cursor-pointer">
                    <Hash size={16} />
                    <span>general</span>
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                    <Hash size={16} />
                    <span>random</span>
                </div>
            </div>
        </div>
    );
};