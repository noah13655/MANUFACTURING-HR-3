import React, { useState } from 'react';

const TotalRewardsManagement = () => {
  // State for reward components
  const [baseSalary, setBaseSalary] = useState(0);
  const [bonuses, setBonuses] = useState(0);
  const [benefits, setBenefits] = useState(0);
  const [allowances, setAllowances] = useState(0);
  const [otherCompensation, setOtherCompensation] = useState(0);

  // Calculate the total rewards
  const totalRewards = baseSalary + bonuses + benefits + allowances + otherCompensation;

  return (
    <div className="p-6 max-w-4xl shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Total Rewards Management</h1>
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
          <label className="block text-sm font-medium text-gray-600">Bonus</label>
          <input
            type="number"
            className="input input-bordered w-full mt-1"
            value={bonuses}
            onChange={(e) => setBonuses(parseFloat(e.target.value) || 0)}
            placeholder="Enter bonuses"
          />
        </div>

        {/* Benefits Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Benefits</label>
          <input
            type="number"
            className="input input-bordered w-full mt-1"
            value={benefits}
            onChange={(e) => setBenefits(parseFloat(e.target.value) || 0)}
            placeholder="Enter benefits"
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

        {/* Other Compensation Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Other Compensation</label>
          <input
            type="number"
            className="input input-bordered w-full mt-1"
            value={otherCompensation}
            onChange={(e) => setOtherCompensation(parseFloat(e.target.value) || 0)}
            placeholder="Enter other compensation"
          />
        </div>
      </div>

      {/* Summary Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Total Rewards</h2>
        <p className="text-xl font-bold">₱{totalRewards.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TotalRewardsManagement;
