import React, { useEffect, useState } from 'react';

const IncentivesRequest = () => {
  const [pendingIncentives, setPendingIncentives] = useState([
    {
      employeeName: 'John Lloyd',
      name: 'Performance Bonus',
      type: 'Bonus',
      amount: '5000',
      status: 'Pending',
    },
    {
      employeeName: 'Oliver',
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

  useEffect(() => {
    document.title = 'Incentives Requesst';
  }, []); 
  return (
    <div className="relative max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
      <h1 className="text-3xl font-semibold mb-6">Incentives Request</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Pending Incentives for Approval</h2>
        <table className="table w-full">
          <thead>
            <tr className='bg-primary text-white'>
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
                <tr key={incentive.id} className='hover:bg-neutral hover:text-white'>
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
