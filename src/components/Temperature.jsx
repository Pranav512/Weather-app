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



function Temperature({ morn, day, eve, night }) {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top'
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },

    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = ['morning', 'day', 'evening', 'night'];
  const tempData = [morn, day, eve, night];

  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature',
        data: tempData,
        borderColor: '#5596f6',
        backgroundColor: '#5596f6',
      },
    ],
  };

  return (
    <div className='temperature'>
      <h4>Temperature</h4>
      <Line className='temperature-chart' options={options} data={data} />
    </div>
  )
}

export default Temperature