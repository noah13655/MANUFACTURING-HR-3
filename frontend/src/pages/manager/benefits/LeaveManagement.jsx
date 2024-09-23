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
    <div>
      <h1>Leave Management</h1>

      <div>
        <h2>Add New Leave Request</h2>
        <div>
          <div>
            <label>Employee Name</label>
            <input
              type="text"
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
              placeholder="e.g., Name"
            />
          </div>
          <div>
            <label>Leave Type</label>
            <input
              type="text"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              placeholder="e.g., Sick Leave"
            />
          </div>
          <div>
            <label>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div>
            <label>Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Denied">Denied</option>
            </select>
          </div>
        </div>
        <button onClick={addLeaveRequest}>
          Add Leave Request
        </button>
      </div>

      <div>
        <table>
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
                <td>{leave.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveManagement;
