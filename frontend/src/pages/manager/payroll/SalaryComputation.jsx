import React, { useEffect, useState } from 'react';

const SalaryComputation = () => {
  const dailyMinimumWage = 610;

  const [sssDeduction, setSssDeduction] = useState(300); // Example value
  const [philhealthDeduction, setPhilhealthDeduction] = useState(500); // Example value
  const [pagibigDeduction, setPagibigDeduction] = useState(0); // Example value
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // Track the selected employee

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
    const totalOvertime = overtimeHours * overtimeRate; 
    const totalHolidayPay = holidaysWorked * dailyMinimumWage;
    
    return baseSalary + totalOvertime + totalHolidayPay;
  };

  const handleDownloadExcel = () => {
    const rows = [
      ['Employee Name', 'Salary per Hour', 'Salary per Day', 'Total Hours', 'Total Overtime', 'Total Present (Days Worked)', 'Total Absent', 'Total Holiday Pay', 'Total Salary', 'Total Deductions', 'Net Salary'],
    ];

    employees.forEach((employee) => {
      const baseSalary = dailyMinimumWage * employee.daysWorked;
      const hourlyRate = dailyMinimumWage / 8;
      const salaryPerDay = dailyMinimumWage;
      const totalSalary = calculateTotalSalary(baseSalary, employee.overtimeHours, employee.holidaysWorked);
      const totalDeductions = sssDeduction + philhealthDeduction + pagibigDeduction;
      const netSalary = totalSalary - totalDeductions;

      rows.push([
        employee.name,
        hourlyRate.toFixed(2),
        salaryPerDay.toFixed(2),
        employee.hoursWorked,
        employee.overtimeHours,
        employee.daysWorked,
        employee.totalAbsent,
        (employee.holidaysWorked * dailyMinimumWage).toFixed(2),
        totalSalary.toFixed(2),
        totalDeductions.toFixed(2),
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

  return (
    <div className="relative max-w-7xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
      <h2 className="text-xl font-bold mb-4">Salary Computation</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-primary text-white">
            <th className="border border-gray-300 px-4 py-2 text-left">Employee Name</th>
            <th className="border border-gray-300 px-4 py-2 text-right">Salary per Hour</th>
            <th className="border border-gray-300 px-4 py-2 text-right">Salary per Day</th>
            <th className="border border-gray-300 px-4 py-2 text-right">Total Hours</th>
            <th className="border border-gray-300 px-4 py-2 text-right">Total Overtime</th>
            <th className="border border-gray-300 px-4 py-2 text-right">Total Present (Days Worked)</th>
            <th className="border border-gray-300 px-4 py-2 text-right">Total Absent</th>
            <th className="border border-gray-300 px-4 py-2 text-right">Total Holiday Pay</th>
            <th className="border border-gray-300 px-4 py-2 text-right">Total Salary</th>
            <th className="border border-gray-300 px-4 py-2 text-right">Net Salary</th>
            <th className="border border-gray-300 px-4 py-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => {
            const baseSalary = dailyMinimumWage * employee.daysWorked;
            const hourlyRate = dailyMinimumWage / 8;
            const salaryPerDay = dailyMinimumWage;
            const totalSalary = calculateTotalSalary(baseSalary, employee.overtimeHours, employee.holidaysWorked);
            const totalDeductions = sssDeduction + philhealthDeduction + pagibigDeduction;
            const netSalary = totalSalary - totalDeductions;

            return (
              <tr className="hover:bg-neutral hover:text-white" key={index}>
                <td className="border border-gray-300 px-4 py-2">{employee.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-right">PHP {hourlyRate.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2 text-right">PHP {salaryPerDay.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2 text-right">{employee.hoursWorked}</td>
                <td className="border border-gray-300 px-4 py-2 text-right">{employee.overtimeHours}</td>
                <td className="border border-gray-300 px-4 py-2 text-right">{employee.daysWorked}</td>
                <td className="border border-gray-300 px-4 py-2 text-right">{employee.totalAbsent}</td>
                <td className="border border-gray-300 px-4 py-2 text-right">PHP {(employee.holidaysWorked * dailyMinimumWage).toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2 text-right">PHP {totalSalary.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2 text-right">PHP {netSalary.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2 text-right">
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
      
      {/* Action Buttons */}
      <div className="flex justify-between mt-4">
        <button className="btn btn-primary" onClick={handleDownloadExcel}>
          Download 
        </button>
        <button className="btn btn-secondary" onClick={() => alert('Submitted to Admin!')}>
          Submit to Admin
        </button>
      </div>

      {/* Simple Modal for Total Deductions */}
      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Total Deductions for {selectedEmployee}</h2>
            <div className="flex flex-col">
              <p>SSS Deduction: PHP {sssDeduction.toFixed(2)}</p>
              <p>PhilHealth Deduction: PHP {philhealthDeduction.toFixed(2)}</p>
              <p>Pag-IBIG Deduction: PHP {pagibigDeduction.toFixed(2)}</p>
              <p className="font-bold">Total Deductions: PHP {(sssDeduction + philhealthDeduction + pagibigDeduction).toFixed(2)}</p>
            </div>
            <button className="btn btn-primary mt-4" onClick={() => setModalIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalaryComputation;
