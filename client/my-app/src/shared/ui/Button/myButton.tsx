import { instance } from "@/app/utils/axiosSettings";
import React, { MouseEventHandler } from "react";

interface ButtonProps {
    children: React.ReactNode,
    className: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
}

export const MyButton = (props: ButtonProps) => {
    const { children } = props;

    return (
        <>
        <button {...props}>{children}</button>
    </>
    )
}