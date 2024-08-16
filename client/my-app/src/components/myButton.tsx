import { instance } from "@/app/utils/axiosSettings";
import React, { MouseEventHandler } from "react";

interface ButtonProps {
    children: React.ReactNode,
    className: string,
    func?: any,
}

export const MyButton = (props: ButtonProps) => {
    const { children, className, func } = props;

    return (
        <>
        <button onClick={func ? func : () => {}}  
                className={className}
        >{children}</button>
    </>
    )
}