import CreateWorkspaceContext from "@/context/createWorkspaceContext"
import { useContext } from "react"

export const useCreateWorkspaceModal = () => {
    return useContext(CreateWorkspaceContext);
}