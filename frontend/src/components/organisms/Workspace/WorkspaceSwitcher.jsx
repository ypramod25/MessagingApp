import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useFetchWorkspace } from "@/hooks/apis/workspaces/useFetchWorkspace";
import { useGetWorkspaceById } from "@/hooks/apis/workspaces/useGetWorkspaceById";
import { Loader, Loader2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom"

export const WorkspaceSwitcher = () => {
    const navigate = useNavigate();

    const {workspaceId} = useParams();

    const {workspaces, isFetching:isFetchingWorkspace} = useFetchWorkspace();

    const {isFetching, workspace} = useGetWorkspaceById(workspaceId);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className='size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 font-semibold text-slate-800 text-xl'
                >
                    {isFetching ? (<Loader className="size-5 animate-spin" />) : workspace?.name.charAt(0).toUpperCase()}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right">
                <DropdownMenuItem className="cursor-pointer flex flex-col justify-start items-start capitalize">
                    {workspace?.name}
                    <span className="text-xs text-mutated-foreground">
                        (Active Workspace)
                    </span>
                </DropdownMenuItem>
                <hr />
                {isFetchingWorkspace? (<Loader2 className="size-5 animate-spin" />) : (
                    workspaces?.map((ws) => {
                        if(ws._id === workspaceId) return null;
                        return (
                             <>
                                <DropdownMenuItem
                                    className="cursor-pointer flex flex-col justify-start items-start capitalize"
                                    key={ws._id}
                                    onClick={() => navigate(`/workspaces/${ws._id}`)}
                                >
                                    {ws.name}
                                </DropdownMenuItem>
                                <hr />
                            </>
                        )   
                    })
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}