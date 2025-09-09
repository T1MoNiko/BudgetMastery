'use client'

import { AppContainer } from "@/widgets/home/container/Container";
import { useContext } from "react";
import { GlobalThemeContext } from "../context/GlobalThemeContext";
import styles from "@/pages/home/style.module.css"
import { Header } from "@/widgets/home/header/Header";
import { Footer } from "@/widgets/home/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const theme = useContext(GlobalThemeContext)
    const themeType = theme.defaultContext[theme.currentTheme]

    return (
        <>
          <AppContainer className={styles.container} style={{backgroundColor: themeType.interfaceBackColor}}>
            <Header/>
            {children}
            <Footer/>
          </AppContainer>
        </>
    );
}
