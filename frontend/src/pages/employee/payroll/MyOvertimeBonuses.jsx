import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MyOvertimeBonuses = () => {
  const overtimeData = [
    {
      date: "October 1, 2024",
      hours: 5,
      rate: 150,
      bonus: 500,
    },
    {
      date: "October 10, 2024",
      hours: 3,
      rate: 150,
      bonus: 300,
    },
  ];

  const totalOvertime = overtimeData.reduce((acc, item) => acc + item.hours * item.rate, 0);
  const totalBonus = overtimeData.reduce((acc, item) => acc + item.bonus, 0);
  useEffect(() => {
    document.title = "My Overtime and Bonuses";
  });
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Overtime & Bonuses</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="card bg-base-100 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <div className="card-body">
            <h2 className="card-title text-lg sm:text-xl font-semibold">Total Overtime</h2>
            <p className="text-lg font-bold text-green-600">₱{totalOvertime.toLocaleString()}</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <div className="card-body">
            <h2 className="card-title text-lg sm:text-xl font-semibold">Total Bonuses</h2>
            <p className="text-lg font-bold text-green-600">₱{totalBonus.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Overtime Records</h2>
      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600">
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Hours</th>
            <th className="py-2 px-4">Rate</th>
            <th className="py-2 px-4">Bonus</th>
          </tr>
        </thead>
        <tbody>
          {overtimeData.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-2 px-4">{item.date}</td>
              <td className="py-2 px-4">{item.hours}</td>
              <td className="py-2 px-4">₱{item.rate.toLocaleString()}</td>
              <td className="py-2 px-4">₱{item.bonus.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOvertimeBonuses;
