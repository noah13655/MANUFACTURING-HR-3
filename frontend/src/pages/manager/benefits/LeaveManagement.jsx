import React, { useState } from 'react';

const initialLeaves = [
  { id: 1, employee: 'Elsie', leaveType: 'Sick Leave', startDate: '2024-09-15', endDate: '2024-09-17', status: 'Approved' },
  { id: 2, employee: 'Rhea', leaveType: 'Vacation', startDate: '2024-09-20', endDate: '2024-09-25', status: 'Pending' },
  { id: 3, employee: 'Remie', leaveType: 'Personal', startDate: '2024-09-10', endDate: '2024-09-12', status: 'Denied' },
];

const LeaveManagement = () => {
  const [leaves, setLeaves] = useState(initialLeaves);
  const [employee, setEmployee] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('Pending');

  const addLeaveRequest = () => {
    if (employee && leaveType && startDate && endDate) {
      setLeaves([
        ...leaves,
        {
          id: leaves.length + 1,
          employee,
          leaveType,
          startDate,
          endDate,
          status,
        },
      ]);
      setEmployee('');
      setLeaveType('');
      setStartDate('');
      setEndDate('');
      setStatus('Pending');
    }
  };

  return (
    <div className="p-6 max-w-4xl  shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Leave Management</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Add New Leave Request</h2>
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
            <label className="block text-sm font-medium text-gray-600">Leave Type</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              placeholder="e.g., Sick Leave"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Start Date</label>
            <input
              type="date"
              className="input input-bordered w-full mt-1"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">End Date</label>
            <input
              type="date"
              className="input input-bordered w-full mt-1"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Status</label>
            <select
              className="select select-bordered w-full mt-1"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Denied">Denied</option>
            </select>
          </div>
        </div>
        <button
          onClick={addLeaveRequest}
          className="btn btn-primary mt-4 w-full"
        >
          Add Leave Request
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-mb w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Leave Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.id}>
                <td>{leave.id}</td>
                <td>{leave.employee}</td>
                <td>{leave.leaveType}</td>
                <td>{leave.startDate}</td>
                <td>{leave.endDate}</td>
                <td>
                  <span
                    className={`badge ${
                      leave.status === 'Approved' ? 'badge-success' :
                      leave.status === 'Denied' ? 'badge-error' :
                      'badge-warning'
                    }`}
                  >
                    {leave.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveManagement;
