'use client';

import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    {variant == 'REGISTER' && (
                        <Input 
                            id="name"
                            label="Name"
                            register={register}
                            errors={errors} 
                        />
                    )}
                    <Input
                        id="email"
                        label="Email"
                        type="email"
                        register={register}
                        errors={errors} 
                    />
                    <Input
                        id="password"
                        label="Password"
                        type="password"
                        register={register}
                        errors={errors} 
                    />
                    <div>
                        <Button
                            disabled={isLoading}
                            fullWidth
                            type='submit'
                        >
                            {variant == 'LOGIN' ? 'Sign In' : 'Register'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
// https://www.youtube.com/watch?v=PGPGcKBpAk8 48:02

export default AuthForm;