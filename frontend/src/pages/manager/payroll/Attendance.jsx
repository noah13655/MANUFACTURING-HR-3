import React, { useEffect } from 'react';

const Attendance = () => {
  useEffect(() => {
    document.title = 'Attendance info';
  }, []);

  // Attendance data for specific employees
  const attendanceData = [
    {
      employeeName: 'John Lloyd Padit',
      totalHours: 160, // 8 hours per day, 20 working days
      totalPresent: 18, // 18 days present
      totalAbsent: 2,   // 2 days absent
      totalOvertime: 15, // 15 hours of overtime
      totalHoliday: 1,  // 1 holiday worked
    },
    {
      employeeName: 'Abby',
      totalHours: 160,  // 8 hours per day, 20 working days
      totalPresent: 20, // 20 days present
      totalAbsent: 0,   // No absences
      totalOvertime: 12, // 12 hours of overtime
      totalHoliday: 2,  // 2 holidays worked
    },
  ];

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
