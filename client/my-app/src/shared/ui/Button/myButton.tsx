import { instance } from "@/shared/utils/axiosSettings";
import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";

type TProps = ButtonHTMLAttributes<HTMLButtonElement>

export const MyButton = (props: TProps) => {
    const { children } = props;

    return (
        <>
            <button {...props}>{children}</button>
        </>
    )
}