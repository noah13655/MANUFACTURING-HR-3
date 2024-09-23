import React, { useState } from 'react';

const TotalRewardsManagement = () => {
  const [baseSalary, setBaseSalary] = useState(0);
  const [bonuses, setBonuses] = useState(0);
  const [benefits, setBenefits] = useState(0);
  const [allowances, setAllowances] = useState(0);
  const [otherCompensation, setOtherCompensation] = useState(0);

  const totalRewards = baseSalary + bonuses + benefits + allowances + otherCompensation;

  return (
    <div>
      <h1>Total Rewards Management</h1>
      
      <div>
        <label>Base Salary</label>
        <input
          type="number"
          value={baseSalary}
          onChange={(e) => setBaseSalary(parseFloat(e.target.value) || 0)}
          placeholder="Enter base salary"
        />
      </div>

      <div>
        <label>Bonus</label>
        <input
          type="number"
          value={bonuses}
          onChange={(e) => setBonuses(parseFloat(e.target.value) || 0)}
          placeholder="Enter bonuses"
        />
      </div>

      <div>
        <label>Benefits</label>
        <input
          type="number"
          value={benefits}
          onChange={(e) => setBenefits(parseFloat(e.target.value) || 0)}
          placeholder="Enter benefits"
        />
      </div>

      <div>
        <label>Allowances</label>
        <input
          type="number"
          value={allowances}
          onChange={(e) => setAllowances(parseFloat(e.target.value) || 0)}
          placeholder="Enter allowances"
        />
      </div>

      <div>
        <label>Other Compensation</label>
        <input
          type="number"
          value={otherCompensation}
          onChange={(e) => setOtherCompensation(parseFloat(e.target.value) || 0)}
          placeholder="Enter other compensation"
        />
      </div>

      <div>
        <h2>Total Rewards</h2>
        <p>₱{totalRewards.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TotalRewardsManagement;
