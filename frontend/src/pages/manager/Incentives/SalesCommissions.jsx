import React, { useState } from 'react';

const SalesCommissions = () => {
  const [commissions, setCommissions] = useState([
    { id: 1, employeeName: 'Elsie', salesAmount: 10000, commissionRate: 0.05, commissionEarned: 500, date: '2024-09-01' },
    { id: 2, employeeName: 'Rhea', salesAmount: 15000, commissionRate: 0.04, commissionEarned: 600, date: '2024-09-05' },
    { id: 3, employeeName: 'Remie', salesAmount: 20000, commissionRate: 0.03, commissionEarned: 600, date: '2024-09-10' },
  ]);

  const [newCommission, setNewCommission] = useState({
    employeeName: '',
    salesAmount: '',
    commissionRate: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCommission((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCommission = () => {
    const { employeeName, salesAmount, commissionRate, date } = newCommission;
    if (!employeeName || !salesAmount || !commissionRate || !date) return; 

    const commissionEarned = (salesAmount * commissionRate).toFixed(2);
    setCommissions((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        employeeName,
        salesAmount: parseFloat(salesAmount),
        commissionRate: parseFloat(commissionRate),
        commissionEarned: parseFloat(commissionEarned),
        date, 
      },
    ]);
    setNewCommission({ employeeName: '', salesAmount: '', commissionRate: '', date: '' });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Sales Commissions Management</h1>

      <div className="card bg-base-100 shadow-xl mb-6 p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Sales Commission</h2>
        <div className="mb-4">
          <label className="label">Employee Name</label>
          <input
            type="text"
            name="employeeName"
            value={newCommission.employeeName}
            onChange={handleInputChange}
            placeholder="e.g., Name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="label">Sales Amount (₱)</label>
          <input
            type="number"
            name="salesAmount"
            value={newCommission.salesAmount}
            onChange={handleInputChange}
            placeholder="e.g., 1000"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="label">Commission Rate (%)</label>
          <input
            type="number"
            name="commissionRate"
            value={newCommission.commissionRate}
            onChange={handleInputChange}
            placeholder="e.g., 5"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="label">Date</label>
          <input
            type="date"
            name="date"
            value={newCommission.date}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          />
        </div>
        <button
          onClick={handleAddCommission}
          className="btn btn-primary"
        >
          Add Commission
        </button>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <table className="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee Name</th>
              <th>Sales Amount (₱)</th>
              <th>Commission Rate (%)</th>
              <th>Commission Earned (₱)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {commissions.map((commission) => (
              <tr key={commission.id} className="hover:bg-gray-100">
                <td>{commission.id}</td>
                <td>{commission.employeeName}</td>
                <td>{commission.salesAmount.toFixed(2)}</td>
                <td>{(commission.commissionRate * 100).toFixed(2)}</td>
                <td>{commission.commissionEarned.toFixed(2)}</td>
                <td>{commission.date}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesCommissions;
