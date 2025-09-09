'use client'

import React, { createContext } from "react";

interface Context {
    appBackColor: string,
    interfaceBackColor: string,
    itemBackColor: string,
    textColor: string,
    iconsColor: string,
    btnColor: string,
    btnTextColor: string,
    inputBorderColor: string
}

export enum Themes {
    DARK = "dark",
    DEFAULT = "default"
}

const defaultContext = {
    defaultContext: {
        [Themes.DARK]:  {
            appBackColor: '#23262f',
            interfaceBackColor: '#272c32',
            itemBackColor: '#2c333d',
            textColor: '#fff',
            iconsColor: '#fff',
            btnColor: '#fff',
            inputBorderColor: '3d4756',
            btnTextColor: '#fff',
        },
        [Themes.DEFAULT]: {
            appBackColor: '#272c32',
            interfaceBackColor: '#000',
            itemBackColor: '#2c333d',
            textColor: '#fff',
            iconsColor: '#4aecd6',
            btnColor: '#22979d',
            inputBorderColor: '3d4756',
            btnTextColor: '#fff'
        }
    },
    currentTheme: Themes.DEFAULT,
    setTheme: () => {}
}

export interface IContext {
    defaultContext: Record<string, Context>,
    currentTheme: Themes,
    setTheme: React.Dispatch<Themes>
}

export const GlobalThemeContext = createContext<IContext>(defaultContext)

