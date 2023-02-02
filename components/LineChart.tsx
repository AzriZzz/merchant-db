import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: true
      },
      min: 0,
      max: 600,
      ticks: {
        stepSize: 120
      }
    }
  }
};

const labels = ['1 Sep', '6 Sep', '12 Sep', '18 Sep', '24 Sep', '30 Sep'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [380, 360, 320, 280, 470, 580],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      pointStyle: 'line',
      borderWidth: 2,
    },
    {
      label: '',
      data: [240, 280, 300, 180, 150, 380],
      borderColor: 'rgba(202, 202, 202, 1)',
      backgroundColor: 'rgba(202, 202, 202, 1)',
      pointStyle: 'dash',
      borderDash: [6],
      borderWidth: 2,
    },
  ],
};

const LineChart = () => {
  return (
    <div className='flex h-48 '>
      <Line options={options} data={data} />
    </div>
  )

}

export default LineChart