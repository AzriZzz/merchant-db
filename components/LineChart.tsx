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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = (props?: any) => {

  let labels = ['1 Sep', '6 Sep', '12 Sep', '18 Sep', '24 Sep', '30 Sep'];
  let minTick = 0;
  let maxTick = 600;
  let stepSize = 120;
  let actualLine = [380, 360, 320, 280, 470, 580];
  let forecastLine = [240, 280, 300, 180, 150, 380];

  // Sort out the date and only save DD MM in ascending order
  if (props.dataset !== undefined) {
    const sortedData = props.dataset.sort((a: any, b: any) => new Date(a.dateCollected).getTime() - new Date(b.dateCollected).getTime());
    labels = sortedData.reduce((acc: any, item: any) => {
      const date = new Date(item.dateCollected);
      const month = date.toLocaleString('default', { month: 'short' });
      const day = date.getDate();
      const label = `${day} ${month}`;
      if (!acc.includes(label)) {
        acc.push(label);
      }
      return acc;
    }, []);

    const { min, max } = props.dataset.reduce((acc: any, item: any) => {
      const collection = parseFloat(item.collection);
      acc.min = Math.min(acc.min, collection);
      acc.max = Math.max(acc.max, collection);
      return acc;
    }, 
    // used as placeholders when searching for the minimum or maximum value in a set of numbers
    { min: Infinity, max: -Infinity });


    // to find the min
    minTick = Math.floor(min);
    maxTick = Math.floor(max);
    stepSize = Math.floor((maxTick - minTick) / (labels.length - 1))

    actualLine = props.dataset.map((item: { collection: number }) => item.collection);
    
    // this only example to find the forecast line chart
    forecastLine = actualLine.map(item => item - 100);
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        display: false
      },
      title: {
        display: false,
        text: 'Line Chart',
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
        // this min max should be scale according to the value
        // received the date fetch from the API
        min: 0,
        max: maxTick + 100,
        ticks: {
          stepSize: stepSize
        }
      }
    }
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Actual',
        // this value needs to be coming from the API
        data: actualLine,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        pointStyle: 'line',
        borderWidth: 2,
      },
      {
        label: 'Forecast',
        // this value needs to be coming from the API
        data: forecastLine,
        borderColor: 'rgba(202, 202, 202, 1)',
        backgroundColor: 'rgba(202, 202, 202, 1)',
        pointStyle: 'dash',
        borderDash: [6],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className='flex h-48 '>
      <Line options={options} data={data} />
    </div>
  )

}

export default LineChart