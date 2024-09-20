import React, { useState } from 'react';

const initialData = [
  { id: 1, name: 'Elsie', baseSalary: 3000, bonus: 500, deductions: 200 },
  { id: 2, name: 'Rhea', baseSalary: 3200, bonus: 600, deductions: 150 },
  { id: 3, name: 'Remie', baseSalary: 2900, bonus: 400, deductions: 100 },
  // Add more sample data as needed
];

const PayrollDistribution = () => {
  const [payrollData, setPayrollData] = useState(initialData);

  const calculateTotal = (baseSalary, bonus, deductions) => {
    return baseSalary + bonus - deductions;
  };

  const addPayrollItem = () => {
    const newItem = {
      id: payrollData.length + 1,
      name: 'New Employee',
      baseSalary: 0,
      bonus: 0,
      deductions: 0,
    };
    setPayrollData([...payrollData, newItem]);
  };

  const removePayrollItem = (id) => {
    setPayrollData(payrollData.filter(item => item.id !== id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Payroll Distribution</h1>
      <div className="overflow-x-auto mb-4">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Base Salary</th>
              <th>Bonus</th>
              <th>Deductions</th>
              <th>Total Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payrollData.map(record => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>₱{record.baseSalary.toFixed(2)}</td>
                <td>₱{record.bonus.toFixed(2)}</td>
                <td>₱{record.deductions.toFixed(2)}</td>
                <td>₱{calculateTotal(record.baseSalary, record.bonus, record.deductions).toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-error btn-sm"
                    onClick={() => removePayrollItem(record.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="btn btn-primary"
        onClick={addPayrollItem}
      >
        Add Employee
      </button>
    </div>
  );
};

export default PayrollDistribution;
