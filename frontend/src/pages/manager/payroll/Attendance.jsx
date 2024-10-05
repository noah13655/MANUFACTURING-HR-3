import React, { useEffect } from 'react';

const Attendance = () => {
  useEffect(() => {
    document.title = 'Attendance info';
  }, []); 
  return (
    <div className="container mx-auto p-8 bg-base-200">
      <h2 className="text-xl font-bold mb-4">Attendance Records</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-primary text-white">
            <th className="border border-gray-300 px-4 py-2">Employee Name</th>
            <th className="border border-gray-300 px-4 py-2">Total Hours</th>
            <th className="border border-gray-300 px-4 py-2">Total Present</th>
            <th className="border border-gray-300 px-4 py-2">Total Absent</th>
            <th className="border border-gray-300 px-4 py-2">Total Overtime</th>
            <th className="border border-gray-300 px-4 py-2">Total Holiday</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index} className="hover:bg-neutral hover:text-white">
              <td className="border border-gray-300 px-4 py-2">Employee {index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">40</td>
              <td className="border border-gray-300 px-4 py-2">20</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
              <td className="border border-gray-300 px-4 py-2">2</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
