import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const EmployeePerformanceForecasting = () => {
  const [employees, setEmployees] = useState([
    { name: 'Elsie', currentPerformance: 80, forecastedPerformance: 90 },
    { name: 'Rhea', currentPerformance: 70, forecastedPerformance: 85 },
    { name: 'Remie', currentPerformance: 90, forecastedPerformance: 95 },
  ]);

  const forecastData = employees.map((employee) => ({
    name: employee.name,
    current: employee.currentPerformance,
    forecasted: employee.forecastedPerformance,
  }));

  const handlePerformanceChange = (index, value, type) => {
    const updatedEmployees = [...employees];
    if (type === 'current') {
      updatedEmployees[index].currentPerformance = value;
    } else {
      updatedEmployees[index].forecastedPerformance = value;
    }
    setEmployees(updatedEmployees);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Employee Performance Forecasting</h1>
      <div className="flex flex-col md:flex-row justify-center mb-4">
        {employees.map((employee, index) => (
          <div key={employee.name} className="md:w-1/3 p-4 bg-white rounded shadow-md mx-2 mb-4">
            <h2 className="text-xl font-bold mb-2">{employee.name}</h2>
            <div className="flex justify-between mb-2">
              <label className="text-lg">Current Performance:</label>
              <input
                type="number"
                value={employee.currentPerformance}
                onChange={(e) => handlePerformanceChange(index, parseInt(e.target.value), 'current')}
                className="w-20 p-2 border border-gray-400 rounded"
              />
            </div>
            <div className="flex justify-between mb-2">
              <label className="text-lg">Forecasted Performance:</label>
              <input
                type="number"
                value={employee.forecastedPerformance}
                onChange={(e) => handlePerformanceChange(index, parseInt(e.target.value), 'forecasted')}
                className="w-20 p-2 border border-gray-400 rounded"
              />
            </div>
          </div>
        ))}
      </div>
      <LineChart width={800} height={400} data={forecastData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="current" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="forecasted" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default EmployeePerformanceForecasting;
