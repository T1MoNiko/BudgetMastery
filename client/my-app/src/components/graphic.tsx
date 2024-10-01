import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from "@/app/pages/interface/style.module.css"
import { Transaction } from '@/app/types/types';
import { useAppSelector } from '@/lib/hooks/reduxHooks';


ChartJS.register(ArcElement, Tooltip, Legend);

const MyDoughnutChart = () => {

  const transactions = useAppSelector(state => state.transactions)

  const namesOfTransactions: any = transactions?.length ? transactions.map(item => item.transaction) : ['nothing']
  const countOfTransactions: any = transactions?.length ? transactions.map(item => item.count) : [0]
  const totalCount = countOfTransactions ? countOfTransactions.reduce((acc: number, next: number) => acc + next, 0) : 0

  const data = {
    datasets: [
      {
        data: [...countOfTransactions],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        cutout: '75%'
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Doughnut Chart',
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const index = context.dataIndex;
            const type = namesOfTransactions[index];
            return type;
          },
        },
      },
    },
  };

  return (
    <>
      <Doughnut data={data} options={options} className={styles.graph}/>
      <h2 className={styles.center}>{totalCount}$</h2>
    </>
  );
};

export default MyDoughnutChart;