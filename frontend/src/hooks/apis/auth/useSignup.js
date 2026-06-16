import { signUpRequest } from "@/api/auth";
import { useMutation } from "@tanstack/react-query"; // useMutation is used for operations that change data on the server, such as POST, PUT, DELETE requests. It provides a way to manage the state of these operations, including loading, success, and error states.

export const useSignup = () => {
    const {isPending, isSuccess, error, mutateAsync:signupMutation} = useMutation({
        mutationFn: signUpRequest,
        onSuccess: (data) => {
            console.log('Successfully signed up : ', data);
        },
        onError: (error) => {
            console.error('Failed to sign up : ', error);
        }
    });
    return {
        isPending, 
        isSuccess,
        error,
        signupMutation
    }
};