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



export function ChartS(props) {

  const labels = [];
  const dataT=[]
  if(props.regions!==null){
    props.regions.map(item=>{
      labels.push(item.name)
      dataT.push(item.get_sportsmen_count)
    })
  }

  return <Bar options={options} data={{labels,
    datasets: [
     
      {
        label: "Sportchilar soni bo'yicha",
        data: labels.map((item, key) => dataT[key]),
        backgroundColor: 'rgb(8, 6, 112)',
      },
    ],}} />;
}
