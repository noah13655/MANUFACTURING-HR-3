import React from 'react';

const LeaveBalances = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Leave Balances</h1>
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title">Leave Balances</h2>
          <table className="table w-full">
            <thead>
              <tr>
                <th>Leave Type</th>
                <th>Available Balance</th>
                <th>Used Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vacation</td>
                <td>10 days</td>
                <td>5 days</td>
              </tr>
              <tr>
                <td>Sick Leave</td>
                <td>5 days</td>
                <td>2 days</td>
              </tr>
              <tr>
                <td>Holiday</td>
                <td>10 days</td>
                <td>0 days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveBalances;
