import React, { useState } from 'react';

const MyIncentives = () => {
  const [myIncentives, setMyIncentives] = useState([
    {
      id: 1,
      name: 'Performance Bonus',
      type: 'Bonus',
      amount: '5000',
      status: 'Approved',
      dateRequested: '2023-09-10',
    },
    {
      id: 2,
      name: 'Project Completion Bonus',
      type: 'Bonus',
      amount: '3000',
      status: 'Pending',
      dateRequested: '2023-09-15',
    },
  ]);

  const [pastIncentives, setPastIncentives] = useState([
    {
      id: 1,
      name: 'Annual Performance Bonus',
      type: 'Bonus',
      amount: '4000',
      status: 'Approved',
      date: '2022-12-20',
    },
    {
      id: 2,
      name: 'Holiday Bonus',
      type: 'Bonus',
      amount: '2500',
      status: 'Approved',
      date: '2022-11-25',
    },
  ]);

  const [incentiveName, setIncentiveName] = useState('');
  const [incentiveType, setIncentiveType] = useState('Performance Bonus');
  const [amount, setAmount] = useState('');

  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIncentive = {
      id: myIncentives.length + 1,
      name: incentiveName,
      type: incentiveType,
      amount,
      status: 'Pending',
      dateRequested: new Date().toISOString().split('T')[0],
    };
    setMyIncentives([...myIncentives, newIncentive]);
    setIncentiveName('');
    setIncentiveType('Performance Bonus');
    setAmount('');
    setShowForm(false);
  };

  return (
    <div className="container mx-auto p-6">
        
      <h1 className="text-3xl font-semibold mb-6">My Incentives</h1>
          <div className="mb-6">
        <button onClick={() => setShowForm((prev) => !prev)} className="btn btn-primary">
          {showForm ? 'Hide Request Form' : 'Request New Incentive'}
        </button>
      </div>

      {showForm && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Request New Incentive</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="incentiveName">
                Incentive Name
              </label>
              <input
                type="text"
                id="incentiveName"
                className="input input-bordered w-full"
                value={incentiveName}
                onChange={(e) => setIncentiveName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="incentiveType">
                Incentive Type
              </label>
              <select
                id="incentiveType"
                className="select select-bordered w-full"
                value={incentiveType}
                onChange={(e) => setIncentiveType(e.target.value)}
                required
              >
                <option value="Performance Bonus">Performance Bonus</option>
                <option value="Project Bonus">Project Bonus</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="amount">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                className="input input-bordered w-full"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Request
            </button>
          </form>
        </div>
      )}

          <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Current Incentives</h2>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Incentive</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date Requested</th>
            </tr>
          </thead>
          <tbody>
            {myIncentives.length > 0 ? (
              myIncentives.map((incentive) => (
                <tr key={incentive.id}>
                  <td>{incentive.name}</td>
                  <td>{incentive.type}</td>
                  <td>{incentive.amount}</td>
                  <td>
                    <span
                      className={`badge ${
                        incentive.status === 'Approved'
                          ? 'badge-success'
                          : incentive.status === 'Rejected'
                          ? 'badge-error'
                          : 'badge-warning'
                      }`}
                    >
                      {incentive.status}
                    </span>
                  </td>
                  <td>{incentive.dateRequested}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No current incentives.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
              {/* Incentive History */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Incentive History</h2>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Incentive</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {pastIncentives.length > 0 ? (
              pastIncentives.map((incentive) => (
                <tr key={incentive.id}>
                  <td>{incentive.name}</td>
                  <td>{incentive.type}</td>
                  <td>{incentive.amount}</td>
                  <td>
                    <span
                      className={`badge ${
                        incentive.status === 'Approved' ? 'badge-success' : 'badge-error'
                      }`}
                    >
                      {incentive.status}
                    </span>
                  </td>
                  <td>{incentive.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No past incentives.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyIncentives;
