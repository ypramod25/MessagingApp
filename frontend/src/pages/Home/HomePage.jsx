import { UserButton } from "@/components/atoms/UserButton/UserButton";
import { useFetchWorkspace } from "@/hooks/apis/workspaces/useFetchWorkspace";
import { useEffect } from "react";

export const HomePage = () => {
    const {isFetching, workspaces} = useFetchWorkspace();

    useEffect(() => {
        if(isFetching) return;
        console.log('Workspaced downloaded is : ', workspaces); 
        if( !workspaces) {
            console.log('No workspaces found, creating one');
        }
    }, [isFetching, workspaces]);
    
    return (
        <>
            <h1>HOME</h1>
            <UserButton />
        </>
    );
};