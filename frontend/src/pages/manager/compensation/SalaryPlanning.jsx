import React, { useState } from 'react'; 

const SalaryPlanning = () => {
  const [baseSalary, setBaseSalary] = useState(0);
  const [bonuses, setBonuses] = useState(0);
  const [allowances, setAllowances] = useState(0);

  const totalSalary = baseSalary + bonuses + allowances;

  return (
    <div>
      <h1>Salary Planning</h1>

      <div>
        <label>Employee Name</label>
        <input type="text" placeholder="Enter a name" />
      </div>

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
        <label>Bonuses</label>
        <input
          type="number"
          value={bonuses}
          onChange={(e) => setBonuses(parseFloat(e.target.value) || 0)}
          placeholder="Enter bonuses"
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
        <h2>Total Salary</h2>
        <p>₱{totalSalary.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default SalaryPlanning;
