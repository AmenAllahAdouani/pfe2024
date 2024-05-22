"use client"
import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Analytics = () => {
  const barChartData = {
    labels: ['Tunisia', 'Qatar', 'Morroco', 'Saudi arabia', 'Jordan'],
    datasets: [
      {
        label: 'Destination Countries',
        data: [65, 59, 80, 81, 56],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const doughnutChartData = {
    labels: ['Validated Trips', 'Refused Trips'],
    datasets: [
      {
        label: 'Trips',
        data: [120, 30],
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 99, 132, 0.5)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Number of Users per Month',
        data: [70, 64, 90, 81, 100],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: true,
        tension: 0.1
      }
    ]
  };

  return (
    <div className="p-6 text-gray-700">
      <h1 className="text-5xl font-bold mb-8">Analytics Dashboard</h1>

      <div className="flex mb-6">
        <div className="flex-1 mr-20">
          <h2 className="text-xl font-semibold text-amber-500">Destination Countries</h2>
          <p className="mb-2">This chart shows the number of sales by destination countries.</p>
          <div className="w-full h-96">
            <Bar data={barChartData} />
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-semibold text-amber-500">Trips Distribution</h2>
          <p className="mb-2">This doughnut chart represents the distribution of validated and refused trips.</p>
          <div className="w-full h-80">
            <Doughnut data={doughnutChartData} />
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <div className="w-full max-w-3xl">
          <h2 className="text-xl font-semibold text-amber-500">Number of Users per Month</h2>
          <p className="mb-2">The line chart illustrates the trend in the number of users over the first five months of the year.</p>
          <div className="w-full h-96">
            <Line data={lineChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

