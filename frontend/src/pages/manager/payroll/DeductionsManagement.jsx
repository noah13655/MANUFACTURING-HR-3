import React, { useEffect, useState } from 'react';

const employees = [
  { id: 1, firstName: 'John Lloyd', lastName: 'Borla' },
  { id: 2, firstName: 'Oliver', lastName: 'Padit' },
  { id: 3, firstName: 'Abby', lastName: 'Lumod' },
];

const deductionTypes = ['SSS', 'PhilHealth', 'Pag-IBIG'];

const initialDeductions = [
  { employeeId: 1, type: 'SSS', amount: 500, date: '2024-09-01' },
  { employeeId: 2, type: 'Pag-IBIG', amount: 200, date: '2024-09-01' },
  { employeeId: 2, type: 'SSS', amount: 200, date: '2024-09-01' },
  { employeeId: 3, type: 'Pag-IBIG', amount: 200, date: '2024-10-01' },
  { employeeId: 3, type: 'SSS', amount: 300, date: '2024-10-01' },
];

const DeductionsManagement = () => {
  const [deductions, setDeductions] = useState(initialDeductions);
  const [deductionAmount, setDeductionAmount] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [deductionType, setDeductionType] = useState('');
  const [isAddingDeduction, setIsAddingDeduction] = useState(false);
  const [selectedViewMonth, setSelectedViewMonth] = useState('');
  const [selectedViewYear, setSelectedViewYear] = useState('');

  const addDeduction = () => {
    const employeeId = parseInt(selectedEmployee);
    const amount = parseFloat(deductionAmount);
    const currentDate = new Date().toISOString().substring(0, 10);

    if (amount > 0 && selectedEmployee && deductionType) {
      const existingDeduction = deductions.find(
        (deduction) =>
          deduction.employeeId === employeeId &&
          deduction.type === deductionType &&
          deduction.date === currentDate
      );

      if (existingDeduction) {
        existingDeduction.amount += amount;
      } else {
        setDeductions([
          ...deductions,
          { employeeId, type: deductionType, amount, date: currentDate },
        ]);
      }

      setDeductionType('');
      setDeductionAmount('');
      setSelectedEmployee('');
      setIsAddingDeduction(false);
    } else {
      alert("Please provide valid inputs.");
    }
  };

  const groupedDeductions = deductions.reduce((acc, deduction) => {
    const { employeeId, type, amount, date } = deduction;
    if (!acc[employeeId]) {
      acc[employeeId] = { employee: employees.find((emp) => emp.id === employeeId), deductions: {} };
    }
    if (!acc[employeeId].deductions[date]) {
      acc[employeeId].deductions[date] = {};
    }
    if (!acc[employeeId].deductions[date][type]) {
      acc[employeeId].deductions[date][type] = 0;
    }
    acc[employeeId].deductions[date][type] += amount;
    return acc;
  }, {});

  const filteredDeductions = Object.entries(groupedDeductions)
    .map(([employeeId, { employee, deductions }]) => {
      const dateDeductions = selectedViewYear && selectedViewMonth
        ? Object.entries(deductions).filter(([date]) => {
            const [year, month] = date.split('-');
            return year === selectedViewYear && month === selectedViewMonth;
          }).flatMap(([date, types]) => Object.entries(types).map(([type, amount]) => ({ type, amount, date })))
        : Object.values(deductions).flatMap(dateDeduction =>
          Object.entries(dateDeduction).map(([type, amount]) => ({ type, amount }))
        );

      return dateDeductions.length > 0 ? { employee, deductions: dateDeductions } : null;
    })
    .filter(Boolean);

  const overallTotalDeductions = deductions.reduce((sum, deduction) => sum + deduction.amount, 0);

  useEffect(() => {
    document.title = 'Deductions Management';
  }, []); 

  const downloadCSV = () => {
    const csvRows = [
      ['Employee Name', 'Deduction Type', 'Amount', 'Date'],
      ...filteredDeductions.flatMap(({ employee, deductions }) =>
        deductions.map(({ type, amount, date }) => [
          `${employee.firstName} ${employee.lastName}`,
          type,
          amount.toFixed(2),
          date
        ])
      )
    ];

    const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "deductions_summary.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
      <h1 className="text-2xl font-bold mb-4">Deductions Management</h1>

      <button
        onClick={() => setIsAddingDeduction(!isAddingDeduction)}
        className="bg-primary text-white rounded p-2 mb-4"
      >
        {isAddingDeduction ? 'Cancel' : 'Add New Deduction'}
      </button>

      {isAddingDeduction && (
        <div className="mb-4 p-4 border rounded shadow">
          <h2 className="text-xl mb-2">Add New Deduction</h2>
          <div className="mb-2">
            <label className="block">Select Employee</label>
            <select
              value={selectedEmployee}
              onChange={(e) => setSelectedEmployee(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
            >
              <option value="">Select an employee</option>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.firstName} {employee.lastName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            <label className="block">Deduction Type</label>
            <select
              value={deductionType}
              onChange={(e) => setDeductionType(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
            >
              <option value="">Select deduction type</option>
              {deductionTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            <label className="block">Amount</label>
            <input
              type="number"
              value={deductionAmount}
              onChange={(e) => setDeductionAmount(e.target.value)}
              placeholder="₱0.00"
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <button
            onClick={addDeduction}
            className="bg-primary text-white rounded p-2 hover:bg-blue-700"
          >
            Confirm Deduction
          </button>
        </div>
      )}

      <div className="mb-4 flex gap-4">
        <div className="flex-1">
          <label className="block mb-2">Select Month to View Deductions</label>
          <select
            value={selectedViewMonth}
            onChange={(e) => setSelectedViewMonth(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          >
            <option value="">All Months</option>
            {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block mb-2">Select Year to View Deductions</label>
          <select
            value={selectedViewYear}
            onChange={(e) => setSelectedViewYear(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          >
            <option value="">All Years</option>
            {Array.from(new Set(deductions.map(d => d.date.split('-')[0]))).map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button onClick={downloadCSV} className="bg-primary text-white rounded p-2 mb-4">
        Download 
      </button>

      <table className="table w-full mb-4">
        <thead>
          <tr className="bg-primary text-white">
            <th className="border px-4 py-2">Employee Name</th>
            <th className="border px-4 py-2">Deduction Type</th>
            <th className="border px-4 py-2">Amount (₱)</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredDeductions.map(({ employee, deductions }, index) =>
            deductions.map(({ type, amount, date }, i) => (
              <tr key={`${employee.id}-${i}`} className={index % 2 === 0 ? 'hover:bg-neutral hover:text-white' : 'hover:bg-neutral hover:text-white'}>
                <td className="border px-4 py-2">{`${employee.firstName} ${employee.lastName}`}</td>
                <td className="border px-4 py-2">{type}</td>
                <td className="border px-4 py-2 text-right">{amount.toFixed(2)}</td>
                <td className="border px-4 py-2">{date}</td>
              </tr>
            ))
          )}
          {filteredDeductions.length === 0 && (
            <tr>
              <td colSpan="4" className="border px-4 py-2 text-center">No deductions found.</td>
            </tr>
          )}
          <tr className="font-bold">
            <td colSpan="2" className="border px-4 py-2 text-right">Total Deductions:</td>
            <td className="border px-4 py-2 text-right">{overallTotalDeductions.toFixed(2)}</td>
            <td className="border px-4 py-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeductionsManagement;
