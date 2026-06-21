import { signInRequest } from "@/api/auth";
import { useMutation } from "@tanstack/react-query"; // useMutation is used for operations that change data on the server, such as POST, PUT, DELETE requests. It provides a way to manage the state of these operations, including loading, success, and error states.
import { toast } from "sonner";

export const useSignin = () => {
    const {isPending, isSuccess, error, mutateAsync:signinMutation} = useMutation({
        mutationFn: signInRequest,
        onSuccess: (response) => {
            console.log('Successfully signed in : ', response);
            const userObject = JSON.stringify(response.data);
            localStorage.setItem('user', userObject);
            localStorage.setItem('token', response.data.token);
            toast.success("User logged in Successfully")
        },
        onError: (error) => {
            console.error('Failed to sign in : ', error);
            toast.error(
                error?.message || "Sign in failed"
            );
        }
    });
    return {
        isPending, 
        isSuccess,
        error,
        signinMutation
    }
};