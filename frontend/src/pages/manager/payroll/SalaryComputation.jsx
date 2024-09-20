import React, { useState } from 'react';

const SalaryComputation = () => {
  // State for input values
  const [baseSalary, setBaseSalary] = useState(0);
  const [allowances, setAllowances] = useState(0);
  const [deductions, setDeductions] = useState(0);
  
  // Calculate the total salary
  const totalSalary = baseSalary + allowances - deductions;

  return (
    <div className="p-6 max-w-md mx-auto shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Salary Computation</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Base Salary</label>
          <input
            type="number"
            className="input input-bordered w-full mt-1"
            value={baseSalary}
            onChange={(e) => setBaseSalary(parseFloat(e.target.value) || 0)}
            placeholder="₱0.00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Allowances</label>
          <input
            type="number"
            className="input input-bordered w-full mt-1"
            value={allowances}
            onChange={(e) => setAllowances(parseFloat(e.target.value) || 0)}
            placeholder="₱0.00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Deductions</label>
          <input
            type="number"
            className="input input-bordered w-full mt-1"
            value={deductions}
            onChange={(e) => setDeductions(parseFloat(e.target.value) || 0)}
            placeholder="₱0.00"
          />
        </div>
        <div className="mt-4">
          <button className="btn btn-primary w-full">Compute Salary</button>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Total Salary</h2>
          <p className="text-xl font-bold">₱{totalSalary.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default SalaryComputation;
