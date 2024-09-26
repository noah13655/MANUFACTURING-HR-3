import React, { useState } from 'react'; 

const initialLeaveRequests = [
  { id: 1, employee: 'Elsie', leaveType: 'Sick Leave', startDate: '2024-09-15', endDate: '2024-09-17', status: 'Pending' },
  { id: 2, employee: 'Rhea', leaveType: 'Vacation', startDate: '2024-09-20', endDate: '2024-09-25', status: 'Pending' },
  { id: 3, employee: 'Remie', leaveType: 'Personal', startDate: '2024-09-10', endDate: '2024-09-12', status: 'Pending' },
];

const LeaveRequest = () => {
  const [leaveRequests, setLeaveRequests] = useState(initialLeaveRequests);

  const handleApproval = (id) => {
    const updatedRequests = leaveRequests.map((request) =>
      request.id === id ? { ...request, status: 'Approved' } : request
    );
    setLeaveRequests(updatedRequests);
  };

  const handleRejection = (id) => {
    const updatedRequests = leaveRequests.map((request) =>
      request.id === id ? { ...request, status: 'Denied' } : request
    );
    setLeaveRequests(updatedRequests);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leave Request</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full border border-gray-300">
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Leave Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.employee}</td>
                <td>{request.leaveType}</td>
                <td>{request.startDate}</td>
                <td>{request.endDate}</td>
                <td>{request.status}</td>
                <td>
                  {request.status === 'Pending' && (
                    <>
                      <button 
                        className="btn btn-success mr-2" 
                        onClick={() => handleApproval(request.id)}
                      >
                        Approve
                      </button>
                      <button 
                        className="btn btn-danger" 
                        onClick={() => handleRejection(request.id)}
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveRequest;
