import React, { useEffect } from 'react';
import {PieChart,Pie,BarChart,Bar,XAxis,YAxis,Tooltip,CartesianGrid,LineChart,Line,ResponsiveContainer,} from 'recharts';

const EmployeeDashboard = () => {
  const benefitsData = [
    { name: 'Health Insurance', value: 3000 },
    { name: 'Retirement Plan', value: 5000 },
    { name: '13th Month Pay', value: 2000 },
    { name: 'Meal Allowance', value: 1000 },
  ];

  const leaveData = [
    { name: 'Pending', value: 1 },
    { name: 'Approved', value: 2 },
    { name: 'Denied', value: 0 },
  ];

  const deductionsData = [
    { month: 'September', amount: 500 },
    { month: 'October', amount: 300 },
  ];

  const overtimeData = [
    { name: 'Overtime Hours', value: 10 },
    { name: 'Bonuses Earned', value: 2000 },
  ];

  const incentiveData = [
    { name: 'Approved', value: 2 },
    { name: 'Pending', value: 1 },
  ];

  const commissionsData = [
    { date: '2024-09-30', sales: 10000, commission: 1500 },
    { date: '2024-08-31', sales: 8000, commission: 1000 },
  ];
  useEffect(() => {
    document.title = "Dashboard";
  });
  return (
    <div className="container mx-auto p-5">
      <header className="mb-4">
        <h1 className="text-xl font-bold">Welcome, [Employee Name]!</h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {[
          { title: 'My Benefits Enrolled', amount: '₱ 5,000' },
          { title: 'Salary', amount: '₱ 30,000' },
          { title: 'Current Deductions', amount: '₱ 5,000' },
          { title: 'Commissions', amount: '₱ 1,500' },
        ].map((card) => (
          <div key={card.title} className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              <p className="text-lg font-bold">{card.amount}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Chart title="Benefits Overview" data={benefitsData} type="pie" />
        <Chart title="Incentive Requests" data={incentiveData} type="pie" />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Chart title="Leave Application Status" data={leaveData} type="bar" />
        <Chart title="My Deductions" data={deductionsData} type="line" />
      </section>

      <section className="mb-4">
        <h2 className="font-semibold mb-2">Overtime and Bonuses</h2>
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={overtimeData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="font-semibold mb-2">My Commissions</h2>
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <CommissionTable data={commissionsData} />
          </div>
        </div>
      </section>
    </div>
  );
};

const Chart = ({ title, data, type }) => {
  const renderChart = () => {
    switch (type) {
      case 'pie':
        return (
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#82ca9d" label />
            <Tooltip />
          </PieChart>
        );
      case 'bar':
        return (
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        );
      case 'line':
        return (
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#ff7300" />
          </LineChart>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="font-semibold mb-2">{title}</h2>
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <ResponsiveContainer width="100%" height={200}>
            {renderChart()}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const CommissionTable = ({ data }) => (
  <table className="min-w-full border-collapse border border-gray-200">
    <thead>
      <tr>
        <th className="border border-gray-200 p-2">Date</th>
        <th className="border border-gray-200 p-2">Sales Made</th>
        <th className="border border-gray-200 p-2">Commission Earned</th>
      </tr>
    </thead>
    <tbody>
      {data.map((commission, index) => (
        <tr key={index}>
          <td className="border border-gray-200 p-2">{commission.date}</td>
          <td className="border border-gray-200 p-2">₱ {commission.sales.toLocaleString()}</td>
          <td className="border border-gray-200 p-2">₱ {commission.commission.toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default EmployeeDashboard;
