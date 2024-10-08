import React from 'react';

const leaveHistoryData = [
  {
    id: 1,
    name: 'Rhen',
    leaveType: 'Annual Leave',
    date: '2024-01-15',
    status: 'Approved',
  },
  {
    id: 2,
    name: 'John lloyd',
    leaveType: 'Sick Leave',
    date: '2024-02-10',
    status: 'Approved',
  },
  {
    id: 3,
    name: 'Sofia',
    leaveType: 'Personal Leave',
    date: '2024-03-05',
    status: 'Pending',
  },
  // Add more leave history data as needed
];

const LeaveHistory = () => {
/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Handles displaying leave details when a "View" button is clicked.
   * @param {Object} leave - Leave details to be displayed
   * @param {string} leave.name - Name of the employee
   * @param {string} leave.leaveType - Type of leave
   * @param {string} leave.date - Date of leave
   * @param {string} leave.status - Status of leave
   */
/******  d34bfe0b-e35e-42ae-8fc0-4956976b6c26  *******/
  const handleView = (leave) => {
    alert(`
      Leave Details:
      Name: ${leave.name}
      Leave Type: ${leave.leaveType}
      Date: ${leave.date}
      Status: ${leave.status}
    `);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leave History</h1>
      <table className="table table-zebra w-full mb-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Leave Type</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th> {/* New column for action */}
          </tr>
        </thead>
        <tbody>
          {leaveHistoryData.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.id}</td>
              <td>{leave.name}</td>
              <td>{leave.leaveType}</td>
              <td>{leave.date}</td>
              <td>{leave.status}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleView(leave)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveHistory;
