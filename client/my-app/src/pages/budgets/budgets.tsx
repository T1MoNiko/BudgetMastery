'use client'

import clsx from 'clsx';
import styles from './style.module.css';
import React, { useContext } from 'react';
import { GlobalThemeContext } from '@/app/context/GlobalThemeContext';
import BudgetBox from '@/widgets/budget/BudgetBox/BudgetBox';

const BudgetsPage = () => {
    const themes = useContext(GlobalThemeContext);
    const currentTheme = themes.defaultContext[themes.currentTheme]

    return ( 
        <div className={clsx(styles.container)}>
            <BudgetBox title='Карта 1' />
        </div> 
    );
}
 
export default BudgetsPage;