import React, { useState } from 'react';

const initialComplianceRecords = [
  { id: 1, task: 'Submit Annual Report', dueDate: '2024-10-01', status: 'Completed' },
  { id: 2, task: 'Safety Training', dueDate: '2024-11-15', status: 'Pending' },
  { id: 3, task: 'License Renewal', dueDate: '2024-09-30', status: 'Overdue' },
];

const ComplianceTracking = () => {
  const [complianceRecords, setComplianceRecords] = useState(initialComplianceRecords);
  const [newTask, setNewTask] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [newStatus, setNewStatus] = useState('Pending');

  const addComplianceRecord = () => {
    if (newTask && newDueDate) {
      setComplianceRecords([
        ...complianceRecords,
        {
          id: complianceRecords.length + 1,
          task: newTask,
          dueDate: newDueDate,
          status: newStatus,
        },
      ]);
      setNewTask('');
      setNewDueDate('');
      setNewStatus('Pending');
    }
  };

  return (
    <div className="p-6 max-w-4xl shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Compliance Tracking</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Add New Compliance Task</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-600">Task</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="e.g., Submit Annual Report"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Due Date</label>
            <input
              type="date"
              className="input input-bordered w-full mt-1"
              value={newDueDate}
              onChange={(e) => setNewDueDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Status</label>
            <select
              className="select select-bordered w-full mt-1"
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Overdue">Overdue</option>
            </select>
          </div>
        </div>
        <button
          onClick={addComplianceRecord}
          className="btn btn-primary mt-4 w-full"
        >
          Add Task
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {complianceRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.task}</td>
                <td>{record.dueDate}</td>
                <td>
                  <span
                    className={`badge ${
                      record.status === 'Completed' ? 'badge-success' :
                      record.status === 'Overdue' ? 'badge-error' :
                      'badge-warning'
                    }`}
                  >
                    {record.status}
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

export default ComplianceTracking;
