'use client';

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

const AuthForm = () => {
    const [variant, setVariant] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant == 'LOGIN') {
            setVariant('REGISTER');
        } else {
                setVariant('LOGIN');
            }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });
    const onSubmit = (data) => {
        setIsLoading(true);
        
        if (variant == 'REGISTER') {

        }

        if (variant == 'LOGIN') {

        }
    }

    const socialAction = () => {
        setIsLoading(true);
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}
                >

                </form>
            </div>
        </div>
    )
}

// 23:49

export default AuthForm;