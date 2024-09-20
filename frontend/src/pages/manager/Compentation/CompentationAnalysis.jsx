import React from 'react';
import { Pie, Bar } from 'react-charts-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register required components for Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);

const CompensationAnalysis = () => {
  // Example data for the pie chart
  const pieData = {
    labels: ['Base Salary', 'Bonuses', 'Benefits', 'Other Compensation'],
    datasets: [
      {
        label: 'Compensation Breakdown',
        data: [5000, 1500, 2000, 500],
        backgroundColor: [
          '#D91656',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
        ],
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
      },
    ],
  };

  // Example data for the bar chart
  const barData = {
    labels: ['Base Salary', 'Bonuses', 'Benefits', 'Other Compensation'],
    datasets: [
      {
        label: 'Amount (₱)',
        data: [5000, 1500, 2000, 500],
        backgroundColor: '#4BC0C0',
        borderColor: '#36A2EB',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ₱${tooltipItem.raw.toFixed(2)}`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-6 max-w-4xl shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Compensation Analysis</h1>
      
      {/* Pie Chart */}
      <div className="relative h-48 mb-6">
        <Pie data={pieData} options={options} />
      </div>
      
      {/* Bar Graph */}
      <div className="relative h-48">
        <Bar data={barData} options={options} />
      </div>
    </div>
  );
};

export default CompensationAnalysis;
