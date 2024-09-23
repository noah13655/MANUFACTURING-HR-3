import React from 'react';

const initialShares = [
  { id: 1, employee: 'Elsie', sharePercentage: 5.0, amount: 5000 },
  { id: 2, employee: 'Rhea', sharePercentage: 3.0, amount: 3000 },
  { id: 3, employee: 'Ramie', sharePercentage: 4.0, amount: 4000 },
];

const ProfitSharing = () => {
  return (
    <div>
      <h1>Profit Sharing</h1>

      <div>
        <h2>Add New Profit Share</h2>
        <div>
          <label>Employee Name</label>
          <input type="text" placeholder="e.g., Name" />
        </div>
        <div>
          <label>Share Percentage (%)</label>
          <input type="number" placeholder="e.g., 5.0" />
        </div>
        <div>
          <label>Amount</label>
          <input type="number" placeholder="₱0.00" />
        </div>
        <button>Add Profit Share</button>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Share Percentage</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {initialShares.map((share) => (
              <tr key={share.id}>
                <td>{share.id}</td>
                <td>{share.employee}</td>
                <td>{share.sharePercentage.toFixed(2)}%</td>
                <td>₱{share.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfitSharing;

