import React from 'react';

const initialCommissions = [
  { id: 1, employeeName: 'Elsie', salesAmount: 10000, commissionRate: 0.05, commissionEarned: 500 },
  { id: 2, employeeName: 'Rhea', salesAmount: 15000, commissionRate: 0.04, commissionEarned: 600 },
  { id: 3, employeeName: 'Remie', salesAmount: 20000, commissionRate: 0.03, commissionEarned: 600 },
];

const SalesCommissions = () => {
  return (
    <div>
      <h1>Sales Commissions Management</h1>

      <div>
        <h2>Add New Sales Commission</h2>
        <div>
          <label>Employee Name</label>
          <input type="text" placeholder="e.g., Name" />
        </div>
        <div>
          <label>Sales Amount (₱)</label>
          <input type="number" placeholder="e.g., 1000" />
        </div>
        <div>
          <label>Commission Rate (%)</label>
          <input type="number" placeholder="e.g., 5" />
        </div>
        <button>Add Commission</button>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee Name</th>
              <th>Sales Amount (₱)</th>
              <th>Commission Rate (%)</th>
              <th>Commission Earned (₱)</th>
            </tr>
          </thead>
          <tbody>
            {initialCommissions.map((commission) => (
              <tr key={commission.id}>
                <td>{commission.id}</td>
                <td>{commission.employeeName}</td>
                <td>{commission.salesAmount.toFixed(2)}</td>
                <td>{(commission.commissionRate * 100).toFixed(2)}</td>
                <td>{commission.commissionEarned.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesCommissions;
