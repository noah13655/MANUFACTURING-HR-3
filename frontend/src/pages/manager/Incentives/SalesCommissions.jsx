import React, { useState } from 'react';

const initialCommissions = [
  { id: 1, employeeName: 'Elsie', salesAmount: 10000, commissionRate: 0.05, commissionEarned: 500 },
  { id: 2, employeeName: 'Rhea', salesAmount: 15000, commissionRate: 0.04, commissionEarned: 600 },
  { id: 3, employeeName: 'Remie', salesAmount: 20000, commissionRate: 0.03, commissionEarned: 600 },
];

const SalesCommissions = () => {
  const [commissions, setCommissions] = useState(initialCommissions);
  const [employeeName, setEmployeeName] = useState('');
  const [salesAmount, setSalesAmount] = useState('');
  const [commissionRate, setCommissionRate] = useState('');

  const calculateCommission = (salesAmount, commissionRate) => {
    return salesAmount * commissionRate;
  };

  const addCommission = () => {
    if (employeeName && salesAmount && commissionRate) {
      const calculatedCommission = calculateCommission(parseFloat(salesAmount), parseFloat(commissionRate) / 100);
      setCommissions([
        ...commissions,
        {
          id: commissions.length + 1,
          employeeName,
          salesAmount: parseFloat(salesAmount),
          commissionRate: parseFloat(commissionRate) / 100,
          commissionEarned: calculatedCommission,
        },
      ]);
      setEmployeeName('');
      setSalesAmount('');
      setCommissionRate('');
    }
  };

  return (
    <div className="p-6 max-w-4xl shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Sales Commissions Management</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Add New Sales Commission</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-600">Employee Name</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="e.g., Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Sales Amount (₱)</label>
            <input
              type="number"
              className="input input-bordered w-full mt-1"
              value={salesAmount}
              onChange={(e) => setSalesAmount(e.target.value)}
              placeholder="e.g., 1000"
              step="0.01"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Commission Rate (%)</label>
            <input
              type="number"
              className="input input-bordered w-full mt-1"
              value={commissionRate}
              onChange={(e) => setCommissionRate(e.target.value)}
              placeholder="e.g., 5"
              step="0.01"
            />
          </div>
        </div>
        <button
          onClick={addCommission}
          className="btn btn-primary mt-4 w-full"
        >
          Add Commission
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-mb w-full">
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
            {commissions.map((commission) => (
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
