import React from 'react';

const initialBonuses = [
  { id: 1, employee: 'Elsie', performanceScore: 95, bonusAmount: 1000 },
  { id: 2, employee: 'Rhea', performanceScore: 88, bonusAmount: 800 },
  { id: 3, employee: 'Remie', performanceScore: 92, bonusAmount: 900 },
];

const PerformanceBasedBonuses = () => {
  return (
    <div>
      <h1>Performance-Based Bonuses</h1>

      <div>
        <h2>Add New Bonus</h2>
        <div>
          <label>Employee Name</label>
          <input type="text" placeholder="e.g., Name" />
        </div>
        <div>
          <label>Performance Score</label>
          <input type="number" placeholder="e.g., 100" />
        </div>
        <div>
          <label>Bonus Amount</label>
          <input type="number" placeholder="₱0.00" />
        </div>
        <button>Add Bonus</button>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Performance Score</th>
              <th>Bonus Amount</th>
            </tr>
          </thead>
          <tbody>
            {initialBonuses.map((bonus) => (
              <tr key={bonus.id}>
                <td>{bonus.id}</td>
                <td>{bonus.employee}</td>
                <td>{bonus.performanceScore}</td>
                <td>₱{bonus.bonusAmount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceBasedBonuses;
