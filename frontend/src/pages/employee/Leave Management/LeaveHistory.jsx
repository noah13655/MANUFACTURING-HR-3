import React from 'react';

const LeaveHistory = () => {
  const handleDetailsClick = (leaveType) => {
    alert(`Showing details for ${leaveType}`);
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Leave History</h1>
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Leave Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vacation</td>
                <td>2023-01-01</td>
                <td>2023-01-10</td>
                <td>Approved</td>
                <td>
                  <button className="btn btn-secondary" onClick={() => handleDetailsClick('Vacation')}>Details</button>
                </td>
              </tr>
              <tr>
                <td>Sick Leave</td>
                <td>2023-02-01</td>
                <td>2023-02-05</td>
                <td>Approved</td>
                <td>
                  <button className="btn btn-secondary" onClick={() => handleDetailsClick('Sick Leave')}>Details</button>
                </td>
              </tr>
              <tr>
                <td>Holiday</td>
                <td>2023-03-01</td>
                <td>2023-03-10</td>
                <td>Pending</td>
                <td>
                  <button className="btn btn-secondary" onClick={() => handleDetailsClick('Holiday')}>Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveHistory;
