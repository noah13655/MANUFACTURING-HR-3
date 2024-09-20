import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PredictiveTurnoverAnalysis = () => {
  const [data, setData] = useState([
    { month: 'Jan', turnover: 100, prediction: 120 },
    { month: 'Feb', turnover: 120, prediction: 140 },
    { month: 'Mar', turnover: 140, prediction: 160 },
    { month: 'Apr', turnover: 160, prediction: 180 },
    { month: 'May', turnover: 180, prediction: 200 },
    { month: 'Jun', turnover: 200, prediction: 220 },
  ]);

  const [selectedMonth, setSelectedMonth] = useState('Jan');

  useEffect(() => {
    const filteredData = data.filter((item) => item.month === selectedMonth);
    if (filteredData.length > 0) {
      console.log(`Turnover for ${selectedMonth}: ${filteredData[0].turnover}`);
      console.log(`Prediction for ${selectedMonth}: ${filteredData[0].prediction}`);
    }
  }, [selectedMonth, data]);

  return (
    <div className="container mx-auto p-4 pt-6 mt-10">
      <h1 className="text-3xl font-bold mb-4">Predictive Turnover Analysis</h1>
      <div className="flex flex-wrap justify-center mb-4">
        {data.map((item) => (
          <button
            key={item.month}
            className={`btn btn-primary mx-2 ${
              selectedMonth === item.month ? 'btn-active' : ''
            }`}
            onClick={() => setSelectedMonth(item.month)}
          >
            {item.month}
          </button>
        ))}
      </div>
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
        <Line type="monotone" dataKey="turnover" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="prediction" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default PredictiveTurnoverAnalysis;
