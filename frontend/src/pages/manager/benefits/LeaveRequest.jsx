import React, { useEffect, useState } from 'react';

const initialLeaveRequests = [
  { employee: 'John Lloyd', leaveType: 'Sick Leave', startDate: '2024-09-15', endDate: '2024-09-17', status: 'Pending', leaveReason: 'Flu and fever' },
  { employee: 'Oliver', leaveType: 'Vacation', startDate: '2024-09-20', endDate: '2024-09-25', status: 'Pending', leaveReason: 'Family vacation' },
  { employee: 'Abby', leaveType: 'Personal', startDate: '2024-09-10', endDate: '2024-09-12', status: 'Pending', leaveReason: 'Personal matters' },
];

const LeaveRequest = () => {
  const [leaveRequests, setLeaveRequests] = useState(initialLeaveRequests);
  const [selectedLeaveReason, setSelectedLeaveReason] = useState(null);

  const handleApproval = (index) => {
    const updatedRequests = leaveRequests.map((request, i) =>
      i === index ? { ...request, status: 'Approved' } : request
    );
    setLeaveRequests(updatedRequests);
  };

  const handleRejection = (index) => {
    const updatedRequests = leaveRequests.map((request, i) =>
      i === index ? { ...request, status: 'Denied' } : request
    );
    setLeaveRequests(updatedRequests);
  };

  useEffect(() => {
    document.title = 'Leave Request';
  }, []);

  const handleLeaveTypeClick = (leaveReason) => {
    setSelectedLeaveReason(leaveReason);
  };

  return (
    <div className="container mx-auto p-8 bg-base-200">
      <h1 className="text-2xl font-bold mb-4">Leave Request</h1>
        {/* Displaying the leave reason */}
        {selectedLeaveReason && (
          <div className="mt-4 p-4 border border-gray-300 rounded">
            <strong>Leave Reason:</strong> {selectedLeaveReason}
            <button className="btn btn-secondary mt-2" onClick={() => setSelectedLeaveReason(null)}>
              Close
            </button>
          </div>
        )}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className='bg-primary text-white'>
              <th className="border px-4 py-2">Employee</th>
              <th className="border px-4 py-2">Leave Type</th>
              <th className="border px-4 py-2">Start Date</th>
              <th className="border px-4 py-2">End Date</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((request, index) => (
              <tr key={index} className='hover:bg-neutral hover:text-white'>
                <td className="border px-4 py-2">{request.employee}</td>
                <td className="border px-4 py-2 cursor-pointer" onClick={() => handleLeaveTypeClick(request.leaveReason)}>
                  {request.leaveType}
                </td>
                <td className="border px-4 py-2">{request.startDate}</td>
                <td className="border px-4 py-2">{request.endDate}</td>
                <td className="border px-4 py-2">{request.status}</td>
                <td className="border px-4 py-2">
                  {request.status === 'Pending' && (
                    <>
                      <button 
                        className="btn btn-success mr-2" 
                        onClick={() => handleApproval(index)}
                      >
                        Approve
                      </button>
                      <button 
                        className="btn btn-danger" 
                        onClick={() => handleRejection(index)}
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
