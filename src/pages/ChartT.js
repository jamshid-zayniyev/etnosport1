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
const dataT=[134, 156, 175, 183, 194, 117, 200, 135, 176, 131, 163, 198, 110, 122]

export const data = {
  labels,
  datasets: [
   
    {
      label: "Tadbirlar soni bo'yicha",
      data: labels.map((item, key) => dataT[key]),
      backgroundColor: 'orangered',
    },
  ],
};

export function ChartT() {

    
  return <Bar options={options} data={data} />;
}
