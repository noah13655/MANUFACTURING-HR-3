import React, { useState } from 'react';

const initialDeductions = [
  { id: 1, type: 'Tax', amount: 1000 },
  { id: 2, type: 'SSS', amount: 500 },
  { id: 3, type: 'PhilHealth', amount: 300 },
];

const DeductionsManagement = () => {
  const [deductions, setDeductions] = useState(initialDeductions);
  const [deductionType, setDeductionType] = useState('');
  const [deductionAmount, setDeductionAmount] = useState('');

  const addDeduction = () => {
    if (deductionType && deductionAmount) {
      setDeductions([
        ...deductions,
        {
          id: deductions.length + 1,
          type: deductionType,
          amount: parseFloat(deductionAmount),
        },
      ]);
      setDeductionType('');
      setDeductionAmount('');
    }
  };

  return (
    <div className="p-6 max-w-4xl shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Deductions Management</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Add New Deduction</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-600">Deduction Type</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1"
              value={deductionType}
              onChange={(e) => setDeductionType(e.target.value)}
              placeholder="e.g., Tax"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Amount</label>
            <input
              type="number"
              className="input input-bordered w-full mt-1"
              value={deductionAmount}
              onChange={(e) => setDeductionAmount(e.target.value)}
              placeholder="₱0.00"
            />
          </div>
        </div>
        <button
          onClick={addDeduction}
          className="btn btn-primary mt-4 w-full"
        >
          Add Deduction
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-mb w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {deductions.map((deduction) => (
              <tr key={deduction.id}>
                <td>{deduction.id}</td>
                <td>{deduction.type}</td>
                <td>₱{deduction.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeductionsManagement;
