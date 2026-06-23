import combineContext from "@/utils/combineContext";
import { AuthContextProvider } from "./AuthContextProvider";
import { CreateWorkspaceContextProvider } from "./createWorkspaceContext";

export const AppContextProvider = combineContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider
);