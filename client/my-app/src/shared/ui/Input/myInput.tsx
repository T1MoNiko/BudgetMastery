import { RegData } from "@/pages/auth/page";
import React, { InputHTMLAttributes } from "react";

type TProps = InputHTMLAttributes<HTMLInputElement>

export const MyInput = React.memo((props: TProps) => {
    return (
        <>
            <input {...props}/> 
        </>
    )
})

