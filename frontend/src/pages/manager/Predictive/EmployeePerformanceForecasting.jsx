import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const EmployeePerformanceForecasting = () => {
  const employees = [
    { name: 'Elsie', currentPerformance: 80, forecastedPerformance: 90 },
    { name: 'Rhea', currentPerformance: 70, forecastedPerformance: 85 },
    { name: 'Remie', currentPerformance: 90, forecastedPerformance: 95 },
  ];

  const forecastData = employees.map((employee) => ({
    name: employee.name,
    current: employee.currentPerformance,
    forecasted: employee.forecastedPerformance,
  }));

  return (
    <div>
      <h1>Employee Performance Forecasting</h1>
      <div>
        {employees.map((employee) => (
          <div key={employee.name}>
            <h2>{employee.name}</h2>
            <div>
              <label>Current Performance: {employee.currentPerformance}</label>
            </div>
            <div>
              <label>Forecasted Performance: {employee.forecastedPerformance}</label>
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
        <Line type="monotone" dataKey="current" stroke="#8884d8" />
        <Line type="monotone" dataKey="forecasted" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default EmployeePerformanceForecasting;
