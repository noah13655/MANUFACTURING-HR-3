import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

const BehavioralAnalytics = () => {
  // Sample data for employee behavior analysis
  const [employeeData, setEmployeeData] = useState([
    { id: 1, name: 'Alice', engagement: 75, attendance: 22, feedbackScore: 8 },
    { id: 2, name: 'Bob', engagement: 85, attendance: 20, feedbackScore: 9 },
    { id: 3, name: 'Charlie', engagement: 65, attendance: 18, feedbackScore: 6 },
    { id: 4, name: 'David', engagement: 90, attendance: 25, feedbackScore: 10 },
    { id: 5, name: 'Eve', engagement: 70, attendance: 19, feedbackScore: 7 },
  ]);

  const behaviorAnalysis = (data) => {
    return data.map((employee) => ({
      ...employee,
      engagementLevel: employee.engagement > 80 ? 'High' : employee.engagement > 60 ? 'Moderate' : 'Low',
    }));
  };

  const analyzedBehaviorData = behaviorAnalysis(employeeData);

  // Chart data
  const chartData = analyzedBehaviorData.map((employee) => ({
    name: employee.name,
    engagement: employee.engagement,
    attendance: employee.attendance,
    feedbackScore: employee.feedbackScore,
  }));

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    const style = `
      <style>
        @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
        body {
          font-family: 'Inter', sans-serif;
          margin: 20px;
        }
        h1 {
          text-align: center;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }
        th, td {
          padding: 0.5rem;
        }
        th {
          background-color: #f0f0f0;
          color: #333;
        }
        tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        tr:hover {
          background-color: #f1f1f1;
        }
      </style>
    `;

    const tableHeader = `
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Engagement</th>
            <th>Attendance</th>
            <th>Feedback Score</th>
            <th>Engagement Level</th>
          </tr>
        </thead>
        <tbody>
    `;

    const tableRows = analyzedBehaviorData.map(item => `
      <tr>
        <td>${item.name}</td>
        <td>${item.engagement}</td>
        <td>${item.attendance}</td>
        <td>${item.feedbackScore}</td>
        <td>${item.engagementLevel}</td>
      </tr>
    `).join('');

    const printContent = `
      <div>
        <h1>Employee Behavioral Analysis</h1>
        ${tableHeader}
        ${tableRows}
        </tbody>
      </table>
    </div>
    `;

    printWindow.document.write(style + printContent);
    printWindow.document.close();
    printWindow.print();
  };

  useEffect(() => {
    document.title = 'Behavioral Analytics';
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-center">Employee Behavior Analytics</h2>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="rounded-lg bg-white p-3 flex-1">
          <h3 className="font-semibold text-lg">Engagement and Attendance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="engagement" stroke="#8884d8" name="Engagement" />
              <Line type="monotone" dataKey="attendance" stroke="#82ca9d" name="Attendance" />
              <Line type="monotone" dataKey="feedbackScore" stroke="#ff7300" name="Feedback Score" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-md mt-4">
        <h3 className="text-lg font-semibold mb-4">Behavioral Analysis Report</h3>
        <table className="table w-full mb-4">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Engagement</th>
              <th className="border px-4 py-2">Attendance</th>
              <th className="border px-4 py-2">Feedback Score</th>
              <th className="border px-4 py-2">Engagement Level</th>
            </tr>
          </thead>
          <tbody>
            {analyzedBehaviorData.map((item) => (
              <tr key={item.id} className='hover:bg-neutral hover:text-white'>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.engagement}</td>
                <td className="border px-4 py-2">{item.attendance}</td>
                <td className="border px-4 py-2">{item.feedbackScore}</td>
                <td className="border px-4 py-2">{item.engagementLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-primary mt-4" onClick={handlePrint}>
          Print Report
        </button>
      </div>
    </div>
  );
};

export default BehavioralAnalytics;
