'use client';

import clsx from 'clsx';

import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form';

const Input = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled
}) => {
    return (
       <div>
            <label htmlFor={id}>
                {label}
            </label>
            <div>
                <input 
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, {required})}
                />
            </div>
       </div> 
    )
}

export default Input;