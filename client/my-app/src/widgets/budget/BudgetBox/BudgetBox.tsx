'use client'

import { useContext } from 'react';
import styles from './BudgetBox.module.css'
import { LinearProgress } from '@mui/material';
import { GlobalThemeContext } from '@/app/context/GlobalThemeContext';

interface IProps {
    title: string;

}

const BudgetBox = ({ title }: IProps) => {
    const themes = useContext(GlobalThemeContext)
    const currentTheme = themes.defaultContext[themes.currentTheme]

    return ( 
        <div className={styles.container} style={{ backgroundColor: currentTheme.itemBackColor }}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.amountBox}>
                <p className={styles.remainderAmount}>${100}</p>
                <p className={styles.amount}>/{1000}</p>
            </div>
            <LinearProgress variant="determinate" value={60} sx={{backgroundColor: ''}}/>
        </div>
     );
}
 
export default BudgetBox;