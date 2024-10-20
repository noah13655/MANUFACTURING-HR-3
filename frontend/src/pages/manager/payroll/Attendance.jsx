import React, { useEffect } from 'react';

const Attendance = () => {
  useEffect(() => {
    document.title = 'Attendance info';
  }, []);

  const attendanceData = [
    {
      employeeName: 'John Lloyd',
      totalHours: 160,
      totalPresent: 18,
      totalAbsent: 2,
      totalOvertime: 15,
      totalHoliday: 1,
    },
    {
      employeeName: 'Abby',
      totalHours: 160, 
      totalPresent: 20, 
      totalAbsent: 0,
      totalOvertime: 12,
      totalHoliday: 2,  
    },
  ];

  return (
    <div className="relative max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
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
          {attendanceData.map((employee, index) => (
            <tr key={index} className="hover:bg-neutral hover:text-white">
              <td className="border border-gray-300 px-4 py-2">{employee.employeeName}</td>
              <td className="border border-gray-300 px-4 py-2">{employee.totalHours}</td>
              <td className="border border-gray-300 px-4 py-2">{employee.totalPresent}</td>
              <td className="border border-gray-300 px-4 py-2">{employee.totalAbsent}</td>
              <td className="border border-gray-300 px-4 py-2">{employee.totalOvertime}</td>
              <td className="border border-gray-300 px-4 py-2">{employee.totalHoliday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
