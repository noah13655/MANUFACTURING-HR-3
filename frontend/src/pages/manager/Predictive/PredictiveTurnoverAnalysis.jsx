import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PredictiveTurnoverAnalysis = () => {
  const data = [
    { month: 'Jan', turnover: 100, prediction: 120 },
    { month: 'Feb', turnover: 120, prediction: 140 },
    { month: 'Mar', turnover: 140, prediction: 160 },
    { month: 'Apr', turnover: 160, prediction: 180 },
    { month: 'May', turnover: 180, prediction: 200 },
    { month: 'Jun', turnover: 200, prediction: 220 },
  ];

  return (
    <div>
      <h1>Predictive Turnover Analysis</h1>
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="turnover" stroke="#8884d8" />
        <Line type="monotone" dataKey="prediction" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default PredictiveTurnoverAnalysis;
