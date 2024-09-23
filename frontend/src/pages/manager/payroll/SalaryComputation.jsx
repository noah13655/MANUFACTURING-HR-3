import React, { useState } from 'react';

const SalaryComputation = () => {
  const [baseSalary, setBaseSalary] = useState(0);
  const [allowances, setAllowances] = useState(0);
  const [deductions, setDeductions] = useState(0);
  
  const totalSalary = baseSalary + allowances - deductions;

  return (
    <div>
      <h1>Salary Computation</h1>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Base Salary</td>
            <td>
              <input
                type="number"
                value={baseSalary}
                onChange={(e) => setBaseSalary(parseFloat(e.target.value) || 0)}
                placeholder="₱0.00"
              />
            </td>
          </tr>
          <tr>
            <td>Allowances</td>
            <td>
              <input
                type="number"
                value={allowances}
                onChange={(e) => setAllowances(parseFloat(e.target.value) || 0)}
                placeholder="₱0.00"
              />
            </td>
          </tr>
          <tr>
            <td>Deductions</td>
            <td>
              <input
                type="number"
                value={deductions}
                onChange={(e) => setDeductions(parseFloat(e.target.value) || 0)}
                placeholder="₱0.00"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <h2>Total Salary</h2>
        <p>₱{totalSalary.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default SalaryComputation;
