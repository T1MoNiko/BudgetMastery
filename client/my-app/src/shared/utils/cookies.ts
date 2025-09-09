'use server'

import { cookies } from "next/headers"

export const setCookies = (key: string, value: string | number) => {
    cookies().set(key, `${value}`, {
        maxAge: 60 * 60 * 24 * 7
    })
}

export const getCookie = async (key: string) => {
    return await cookies().get(key)?.value || '';
};
