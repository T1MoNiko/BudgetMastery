import { RegData } from "@/app/pages/auth/page";
import React, { ChangeEventHandler, EventHandler } from "react";

export interface InputProps {
    placeholderText?: string,
    type?: string,
    func?: any,
    className: string,
    name?: string,
    value?: string | null | number
}

export const MyInput = React.memo((props: InputProps) => {
    const { placeholderText, func, type, className, name, value } = props

    return (
        <>
            <input onChange={func ? func : () => {}} 
                   type={type} 
                   placeholder={placeholderText}
                   className={className}
                   name={name ? name : ""}
                   value={value ? value : ""}
                   /> 
        </>
    )
})

