import React from 'react'; 
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend } from 'chart.js';
import 'daisyui/dist/full.css';

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

const ManagerDashboard = () => {
  // Data for charts
  const compensationPlanningData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Salaries',
        data: [3000, 3500, 3200, 4000, 4500, 4700],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true
      }
    ]
  };

  const complianceManagementData = {
    labels: ['Regulation A', 'Regulation B', 'Regulation C'],
    datasets: [
      {
        label: 'Compliance',
        data: [50, 30, 20],
        backgroundColor: ['#f87171', '#fbbf24', '#34d399']
      }
    ]
  };

  const predictiveAnalyticsData = {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Forecasted Revenue',
        type: 'bar',
        data: [5000, 7000, 6000, 8000],
        backgroundColor: '#4ade80'
      },
      {
        label: 'Actual Revenue',
        type: 'line',
        data: [4500, 6900, 6200, 7500],
        borderColor: '#10b981',
        fill: false
      }
    ]
  };

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* User Management Card */}
        <div className="card bg-blue-100 shadow-lg p-4">
          <div className="card-body">
            <h2 className="text-xl font-bold mb-4">User Management</h2>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold">50</h3>
              <p className="text-sm text-gray-600">Total Users</p>
            </div>
          </div>
        </div>

        {/* Payroll Processing Card */}
        <div className="card bg-green-100 shadow-lg p-4">
          <div className="card-body">
            <h2 className="text-xl font-bold mb-4">Payroll Processing</h2>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold">1,000</h3>
              <p className="text-sm text-gray-600">Processed Payrolls</p>
              <h3 className="text-2xl font-bold mt-4">150</h3>
              <p className="text-sm text-gray-600">Pending Payrolls</p>
            </div>
          </div>
        </div>

        {/* Benefits Administration Card */}
        <div className="card bg-yellow-100 shadow-lg p-4">
          <div className="card-body">
            <h2 className="text-xl font-bold mb-4">Benefits Administration</h2>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold">350</h3>
              <p className="text-sm text-gray-600">Enrolled Employees</p>
              <h3 className="text-2xl font-bold mt-4">50</h3>
              <p className="text-sm text-gray-600">Pending Enrollments</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Compensation Planning Chart */}
        <div className="card bg-white shadow-lg p-4">
          <div className="card-body">
            <h2 className="text-xl font-bold mb-4">Compensation Planning</h2>
            <div className="h-64">
              <Line data={compensationPlanningData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        {/* Compliance Management Chart */}
        <div className="card bg-white shadow-lg p-4">
          <div className="card-body">
            <h2 className="text-xl font-bold mb-4">Compliance Management</h2>
            <div className="h-64">
              <Bar data={complianceManagementData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        {/* Predictive and Behavioral Analytics Chart */}
        <div className="card bg-white shadow-lg p-4">
          <div className="card-body">
            <h2 className="text-xl font-bold mb-4">Predictive and Behavioral Analytics</h2>
            <div className="h-64">
              <Bar data={predictiveAnalyticsData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' } } }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
