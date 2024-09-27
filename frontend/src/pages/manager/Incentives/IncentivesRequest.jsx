import React, { useState } from 'react';

const IncentivesRequest = () => {
  const [pendingIncentives, setPendingIncentives] = useState([
    {
      id: 1,
      employeeName: 'John Doe',
      name: 'Performance Bonus',
      type: 'Bonus',
      amount: '5000',
      status: 'Pending',
    },
    {
      id: 2,
      employeeName: 'Jane Smith',
      name: 'Project Bonus',
      type: 'Bonus',
      amount: '3000',
      status: 'Pending',
    },
  ]);

  const handleApprove = (id) => {
    setPendingIncentives((prevIncentives) =>
      prevIncentives.map((incentive) =>
        incentive.id === id ? { ...incentive, status: 'Approved' } : incentive
      )
    );
  };

  const handleReject = (id) => {
    setPendingIncentives((prevIncentives) =>
      prevIncentives.map((incentive) =>
        incentive.id === id ? { ...incentive, status: 'Rejected' } : incentive
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Incentives Management</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Pending Incentives for Approval</h2>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Incentive</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingIncentives.length > 0 ? (
              pendingIncentives.map((incentive) => (
                <tr key={incentive.id}>
                  <td>{incentive.employeeName}</td>
                  <td>{incentive.name}</td>
                  <td>{incentive.type}</td>
                  <td>{incentive.amount}</td>
                  <td>
                    <span
                      className={`badge ${
                        incentive.status === 'Pending'
                          ? 'badge-warning'
                          : incentive.status === 'Approved'
                          ? 'badge-success'
                          : 'badge-error'
                      }`}
                    >
                      {incentive.status}
                    </span>
                  </td>
                  <td>
                    {incentive.status === 'Pending' && (
                      <>
                        <button
                          className="btn btn-success mr-2"
                          onClick={() => handleApprove(incentive.id)}
                        >
                          Approve
                        </button>
                        <button
                          className="btn btn-error"
                          onClick={() => handleReject(incentive.id)}
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No pending incentives.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncentivesRequest;
