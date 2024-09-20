import React, { useState } from 'react';

const initialShares = [
  { id: 1, employee: 'Elsie', sharePercentage: 5.0, amount: 5000 },
  { id: 2, employee: 'Rhea', sharePercentage: 3.0, amount: 3000 },
  { id: 3, employee: 'Ramie', sharePercentage: 4.0, amount: 4000 },
];

const ProfitSharing = () => {
  const [shares, setShares] = useState(initialShares);
  const [employee, setEmployee] = useState('');
  const [sharePercentage, setSharePercentage] = useState('');
  const [amount, setAmount] = useState('');

  const addShare = () => {
    if (employee && sharePercentage && amount) {
      setShares([
        ...shares,
        {
          id: shares.length + 1,
          employee,
          sharePercentage: parseFloat(sharePercentage),
          amount: parseFloat(amount),
        },
      ]);
      setEmployee('');
      setSharePercentage('');
      setAmount('');
    }
  };

  return (
    <div className="p-6 max-w-4xl shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Profit Sharing</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Add New Profit Share</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-600">Employee Name</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1"
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
              placeholder="e.g., Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Share Percentage (%)</label>
            <input
              type="number"
              className="input input-bordered w-full mt-1"
              value={sharePercentage}
              onChange={(e) => setSharePercentage(e.target.value)}
              placeholder="e.g., 5.0"
              step="0.01"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Amount</label>
            <input
              type="number"
              className="input input-bordered w-full mt-1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="₱0.00"
              step="0.01"
            />
          </div>
        </div>
        <button
          onClick={addShare}
          className="btn btn-primary mt-4 w-full"
        >
          Add Profit Share
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-mb w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Share Percentage</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {shares.map((share) => (
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
