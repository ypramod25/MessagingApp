import { useSignup } from "@/hooks/apis/auth/useSignup";
import { SignupCard } from "./SignupCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignupContainer = () => {

    const navigate = useNavigate();

    const [signupForm, setsignupForm] = useState({
        email:'',
        password:'',
        confirmPassword:'',
        username:''
    });

    const [validationError, setValidationError] = useState();

    const {isPending, isSuccess, error, signupMutation} = useSignup();

    useEffect(() => {
        if(isSuccess) {
            setTimeout(() => {
                navigate('/auth/signin')
            }, 3000)
        }
    }, [isSuccess, navigate]);

    async function onSignupFormSubmit(e) {
        e.preventDefault();
        console.log('Signup form submitted', signupForm);
        
        if(!signupForm.email || !signupForm.password || !signupForm.confirmPassword || !signupForm.username) {
            console.error('All fields are required');
            setValidationError({message:'All fields are required'});
            return;
        }

        if(signupForm.password != signupForm.confirmPassword) {
            console.error('Passwords do not match');
            setValidationError({message:'Passwords do not match'})
            return;
        }

        setValidationError(null);

        await signupMutation({
            email:signupForm.email,
            password:signupForm.password,
            username:signupForm.username
        })

    }

    return (
        <SignupCard 
            error={error}
            isPending={isPending}
            isSuccess={isSuccess}
            signupForm={signupForm} 
            setsignupForm={setsignupForm} 
            validationError={validationError } 
            onSignupFormSubmit={onSignupFormSubmit}
        />
    );
}