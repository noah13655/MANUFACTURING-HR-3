import React, { useEffect, useState } from 'react';

const SalaryComputation = () => {
  const dailyMinimumWage = 610;
  const [sssDeduction, setSssDeduction] = useState(300);
  const [philhealthDeduction, setPhilhealthDeduction] = useState(500);
  const [pagibigDeduction, setPagibigDeduction] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [startDate, setStartDate] = useState('2024-09-01');
  const [endDate, setEndDate] = useState('2024-09-10');

  const employees = [
    { name: 'John Lloyd', hoursWorked: 160, overtimeHours: 10, daysWorked: 20, holidaysWorked: 2, date: '2024-09-01' },
    { name: 'Oliver', hoursWorked: 150, overtimeHours: 5, daysWorked: 18, holidaysWorked: 1, date: '2024-09-05' },
    { name: 'Abby', hoursWorked: 170, overtimeHours: 15, daysWorked: 22, holidaysWorked: 0, date: '2024-09-10' },
  ];

  const calculateTotalSalary = (baseSalary, overtimeHours, holidaysWorked) => {
    const hourlyRate = baseSalary / 8;
    const overtimeRate = 1.25 * hourlyRate;
    const totalOvertime = overtimeHours * overtimeRate;
    const totalHolidayPay = holidaysWorked * dailyMinimumWage;
    return baseSalary + totalOvertime + totalHolidayPay;
  };

  const handleDownloadExcel = () => {
    const rows = [['Employee Name', 'Date', 'Salary per Hour', 'Salary per Day', 'Total Hours', 'Total Overtime', 'Total Present (Days Worked)', 'Total Holiday Pay', 'Total Salary', 'Total Deductions', 'Net Salary']];
    
    employees.forEach((employee) => {
      const baseSalary = dailyMinimumWage * employee.daysWorked;
      const hourlyRate = dailyMinimumWage / 8;
      const salaryPerDay = dailyMinimumWage;
      const totalSalary = calculateTotalSalary(baseSalary, employee.overtimeHours, employee.holidaysWorked);
      const totalDeductions = sssDeduction + philhealthDeduction + pagibigDeduction;
      const netSalary = totalSalary - totalDeductions;
      
      rows.push([
        employee.name,
        employee.date,
        hourlyRate.toFixed(2),
        salaryPerDay.toFixed(2),
        employee.hoursWorked,
        employee.overtimeHours,
        employee.daysWorked,
        (employee.holidaysWorked * dailyMinimumWage).toFixed(2),
        totalSalary.toFixed(2),
        totalDeductions.toFixed(2), // Added total deductions
        netSalary.toFixed(2),
      ]);
    });
    
    let csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "salary_report.csv");
    document.body.appendChild(link);
    link.click();
  };

  useEffect(() => {
    document.title = 'Salary Computation';
  }, []);

  const filteredEmployees = employees.filter(employee => {
    const employeeDate = new Date(employee.date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return (!startDate || employeeDate >= start) && (!endDate || employeeDate <= end);
  });

  return (
    <div className="relative max-w-7xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
      <h2 className="text-xl font-bold mb-4">Salary Computation</h2>
      <div className="mb-4">
        <label className="mr-4">Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border rounded p-2 mr-4" />
        <label className="mr-4">End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border rounded p-2" />
      </div>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-primary text-white">
            <th className="border px-4 py-2">Employee Name</th>
            <th className="border px-4 py-2 text-right">Salary per Hour</th>
            <th className="border px-4 py-2 text-right">Salary per Day</th>
            <th className="border px-4 py-2 text-right">Total Hours</th>
            <th className="border px-4 py-2 text-right">Total Overtime</th>
            <th className="border px-4 py-2 text-right">Total Present (Days Worked)</th>
            <th className="border px-4 py-2 text-right">Total Holiday Pay</th>
            <th className="border px-4 py-2 text-right">Total Salary</th>
            <th className="border px-4 py-2 text-right">Total Deductions</th>
            <th className="border px-4 py-2 text-right">Net Salary</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee, index) => {
            const baseSalary = dailyMinimumWage * employee.daysWorked;
            const hourlyRate = dailyMinimumWage / 8;
            const salaryPerDay = dailyMinimumWage;
            const totalSalary = calculateTotalSalary(baseSalary, employee.overtimeHours, employee.holidaysWorked);
            const totalDeductions = sssDeduction + philhealthDeduction + pagibigDeduction;
            const netSalary = totalSalary - totalDeductions;

            return (
              <tr className="hover:bg-neutral hover:text-white" key={index}>
                <td className="border px-4 py-2">{employee.name}</td>
                <td className="border px-4 py-2 text-right">PHP {hourlyRate.toFixed(2)}</td>
                <td className="border px-4 py-2 text-right">PHP {salaryPerDay.toFixed(2)}</td>
                <td className="border px-4 py-2 text-right">{employee.hoursWorked}</td>
                <td className="border px-4 py-2 text-right">{employee.overtimeHours}</td>
                <td className="border px-4 py-2 text-right">{employee.daysWorked}</td>
                <td className="border px-4 py-2 text-right">PHP {(employee.holidaysWorked * dailyMinimumWage).toFixed(2)}</td>
                <td className="border px-4 py-2 text-right">PHP {totalSalary.toFixed(2)}</td>
                <td className="border px-4 py-2 text-right">PHP {totalDeductions.toFixed(2)}</td>
                <td className="border px-4 py-2 text-right">PHP {netSalary.toFixed(2)}</td>
                <td className="border px-4 py-2">{employee.date}</td>
                <td className="border px-4 py-2 text-right">
                  <button 
                    className="btn btn-secondary" 
                    onClick={() => {
                      setSelectedEmployee(employee.name);
                      setModalIsOpen(true);
                    }}
                  >
                    View Deductions
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button className="btn btn-primary" onClick={handleDownloadExcel}>
          Download 
        </button>
        <button className="btn btn-secondary" onClick={() => alert('Submitted to Admin!')}>
          Submit to Admin
        </button>
      </div>
      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold">Deductions for {selectedEmployee}</h2>
            <p>SSS: PHP {sssDeduction}</p>
            <p>PhilHealth: PHP {philhealthDeduction}</p>
            <p>PAG-IBIG: PHP {pagibigDeduction}</p>
            <button className="btn btn-secondary mt-4" onClick={() => setModalIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalaryComputation;
