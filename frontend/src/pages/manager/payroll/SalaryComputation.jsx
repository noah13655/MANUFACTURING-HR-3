import React, { useEffect } from 'react';

const SalaryComputation = () => {

  const dailyMinimumWage = 610;
  const holidayBonus = 2;

  const employees = [
    {
      name: 'John Lloyd',
      hoursWorked: 160,
      overtimeHours: 10,
      daysWorked: 20,
      totalAbsent: 5,
      holidaysWorked: 2,
    },
    {
      name: 'Oliver',
      hoursWorked: 150,
      overtimeHours: 5,
      daysWorked: 18,
      totalAbsent: 7,
      holidaysWorked: 1,
    },
    {
      name: 'Abby',
      hoursWorked: 170,
      overtimeHours: 15,
      daysWorked: 22,
      totalAbsent: 3,
      holidaysWorked: 0,
    },
  ];

  const calculateTotalSalary = (baseSalary, overtimeHours, holidaysWorked) => {
    const hourlyRate = baseSalary / 8;
    const overtimeRate = 1.25 * hourlyRate;
    const holidayRate = hourlyRate * holidayBonus; 
    
    const totalOvertime = overtimeHours * overtimeRate; 
    const totalHolidayPay = holidaysWorked * dailyMinimumWage;
    
    return baseSalary + totalOvertime + totalHolidayPay;
  };

  useEffect(() => {
    document.title = 'Salary computation';
  }, []); 
  return (
    <div className="container mx-auto p-4 md:p-8 bg-base-200 max-w-7xl">
      <h2 className="text-xl font-bold mb-4">Salary Computation</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-primary text-white">
            <th className="border border-gray-300 px-4 py-2">Employee Name</th>
            <th className="border border-gray-300 px-4 py-2">Salary per Hour</th>
            <th className="border border-gray-300 px-4 py-2">Salary per Day</th>
            <th className="border border-gray-300 px-4 py-2">Total Hours</th>
            <th className="border border-gray-300 px-4 py-2">Total Overtime</th>
            <th className="border border-gray-300 px-4 py-2">Total Present (Days Worked)</th>
            <th className="border border-gray-300 px-4 py-2">Total Absent</th>
            <th className="border border-gray-300 px-4 py-2">Total Holiday Pay</th>
            <th className="border border-gray-300 px-4 py-2">Total Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            const baseSalary = dailyMinimumWage * employee.daysWorked;
            const hourlyRate = dailyMinimumWage / 8;
            const salaryPerDay = dailyMinimumWage;
            const totalSalary = calculateTotalSalary(baseSalary, employee.overtimeHours, employee.holidaysWorked);

            return (
              <tr key={employee.id} className="hover:bg-neutral hover:text-white">
                <td className="border border-gray-300 px-4 py-2">{employee.name}</td>
                <td className="border border-gray-300 px-4 py-2">PHP {hourlyRate.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2">PHP {salaryPerDay.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.hoursWorked}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.overtimeHours}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.daysWorked}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.totalAbsent}</td>
                <td className="border border-gray-300 px-4 py-2">
                  PHP {(employee.holidaysWorked * dailyMinimumWage).toFixed(2)}
                </td>
                <td className="border border-gray-300 px-4 py-2">PHP {totalSalary.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SalaryComputation;
