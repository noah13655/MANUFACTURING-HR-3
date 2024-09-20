import React, { useState } from 'react';

const SalaryPlanning = () => {
  // State for salary components
  const [baseSalary, setBaseSalary] = useState(0);
  const [bonuses, setBonuses] = useState(0);
  const [allowances, setAllowances] = useState(0);

  // Calculate the total salary
  const totalSalary = baseSalary + bonuses + allowances;

  return (
    <div className="p-6 max-w-md shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Salary Planning</h1>
      
      {/* Employee Information */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Employee Name</label>
        <input
          type="text"
          className="input input-bordered w-full mt-1"
          placeholder="Enter a name"
        />
      </div>
      
      <div className="space-y-4">
        {/* Base Salary Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Base Salary</label>
          <input
            type="number"
            className="input input-bordered w-full mt-1"
            value={baseSalary}
            onChange={(e) => setBaseSalary(parseFloat(e.target.value) || 0)}
            placeholder="Enter base salary"
          />
        </div>
        
        {/* Bonuses Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Bonuses</label>
          <input
            type="number"
            className="input input-bordered w-full mt-1"
            value={bonuses}
            onChange={(e) => setBonuses(parseFloat(e.target.value) || 0)}
            placeholder="Enter bonuses"
          />
        </div>
        
        {/* Allowances Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Allowances</label>
          <input
            type="number"
            className="input input-bordered w-full mt-1"
            value={allowances}
            onChange={(e) => setAllowances(parseFloat(e.target.value) || 0)}
            placeholder="Enter allowances"
          />
        </div>
      </div>

      {/* Summary Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Total Salary</h2>
        <p className="text-xl font-bold">₱{totalSalary.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default SalaryPlanning;
