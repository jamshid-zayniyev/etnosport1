import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  
  },
};

const labels = ['Buxoro', 'Xorazm', 'Toshkent vil', 'Samarqand', 'Jizzax', 'Andijon', 'Namangan', "Toshkent shah", "Qashqadaryo", "Surxondaryo", "Sirdaryo", "Qoraqalpog'iston", "Farg'ona", "Navoiy"];
const dataT=[34, 56, 75, 83, 94, 17, 100, 35, 76, 31, 63, 98, 10, 22]

export const data = {
  labels,
  datasets: [
   
    {
      label: "Sportchilar soni bo'yicha",
      data: labels.map((item, key) => dataT[key]),
      backgroundColor: 'rgb(8, 6, 112)',
    },
  ],
};

export function ChartS() {

    
  return <Bar options={options} data={data} />;
}
