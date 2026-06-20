import { useSignin } from "@/hooks/apis/auth/useSignin";
import { SigninCard } from "./SigninCard"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SigninContainer = () => {

    const [signinForm, setSigninForm] = useState({
        email:'',
        password:''
    });

    const navigate = useNavigate();

    const [validationError, setValidationError] = useState(null);

    const {isSuccess, isPending, error, signinMutation} = useSignin();

    useEffect(() => {
        if(isSuccess) {
            setTimeout(() => {
                navigate('/home')
            }, 3000)
        }
    }, [isSuccess, navigate]);

    async function onSigninFormSubmit(e) {
        e.preventDefault();

        if(!signinForm.email || !signinForm.password) {
            console.error('All fields are required');
            setValidationError({message:'All fields are required'});
            return;            
        }

        setValidationError(null);

        await signinMutation({
            email: signinForm.email,
            password: signinForm.password
        })
    }

    return (
        <SigninCard
            signinForm={signinForm}
            setSigninForm={setSigninForm}
            onSigninFormSubmit={onSigninFormSubmit}
            validationError={validationError}
            error={error}
            isSuccess={isSuccess}
            isPending={isPending}
        />
    )
}