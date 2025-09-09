'use client'

import { Auth } from "@/pages/auth/page";
import { useAuthStore } from "@/stores/auth";
import { Login } from "@/widgets/login/login";
import React from "react";

const AuthPage = () => {
    const { mode } = useAuthStore();

    return (
        <>
            {mode === 'registration' ? <Auth/> : <Login/>}
        </>
    )
}

export default AuthPage;