import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, LinearScale, CategoryScale, BarElement, PointElement, LineElement } from 'chart.js';
import styles from './lineGraphic.module.css'

Chart.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement);

export const LineGraphic = () => { 
    function getDaysInMonth(year: number, month: number) {
        return new Date(year, month + 1, 0).getDate();
    }

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const limit = 31;
    const pastDate = new Date(Number(new Date()) - (1000 * 60 * 60 * 60 * 24 * limit))
    const currentMonth = (pastDate).getMonth();
    const currentDate = (pastDate).getDate();
    const monthDays = getDaysInMonth((pastDate).getFullYear(), currentMonth);

    let days = [];
    
    for (let i = currentDate, j = 0; i <= monthDays; i++, j++) {
        if (j < limit) {
            days.push(`${i}\n ${months[currentMonth].slice(0, 3)}`)
        }
    }

    const data = {
        labels: days,
        datasets: [{
            data: [65, 59, 80, 81, 56, 55, 40, 12, 78, 43, 12, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false 
            }
        },
    };
    
    return (
        <Line data={data} options={options} className={styles.container}/>
    );
};