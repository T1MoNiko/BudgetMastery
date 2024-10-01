import { RegData } from "@/app/pages/auth/page";
import React, { ChangeEventHandler, EventHandler } from "react";

export interface InputProps {
    placeholder?: string,
    type?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    className: string,
    name?: string,
    value?: string | number 
}

export const MyInput = React.memo((props: InputProps) => {
    return (
        <>
            <input {...props}/> 
        </>
    )
})

