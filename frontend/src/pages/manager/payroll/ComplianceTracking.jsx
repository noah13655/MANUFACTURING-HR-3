import React from 'react';

const initialComplianceRecords = [
  { id: 1, task: 'Submit Annual Report', dueDate: '2024-10-01', status: 'Completed' },
  { id: 2, task: 'Safety Training', dueDate: '2024-11-15', status: 'Pending' },
  { id: 3, task: 'License Renewal', dueDate: '2024-09-30', status: 'Overdue' },
];

const ComplianceTracking = () => {
  return (
    <div>
      <h1>Compliance Tracking</h1>

      <div>
        <h2>Add New Compliance Task</h2>
        <div>
          <label>Task</label>
          <input type="text" placeholder="e.g., Submit Annual Report" />
        </div>
        <div>
          <label>Due Date</label>
          <input type="date" />
        </div>
        <div>
          <label>Status</label>
          <select>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Overdue">Overdue</option>
          </select>
        </div>
        <button>Add Task</button>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {initialComplianceRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.task}</td>
                <td>{record.dueDate}</td>
                <td>{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplianceTracking;
