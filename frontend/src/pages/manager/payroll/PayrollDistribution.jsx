import React, { useEffect, useState } from 'react';

const initialSalaryRequests = [
  { employeeName: 'John Lloyd', salaryAmount: 30000, paymentMethod: 'Cash', gCashNumber: '', status: 'Pending' },
  { employeeName: 'Oliver', salaryAmount: 32000, paymentMethod: 'GCash', gCashNumber: '09123456789', status: 'Pending' },
  { employeeName: 'Abby', salaryAmount: 32000, paymentMethod: 'GCash', gCashNumber: '09123456789', status: 'Pending' },
];

const SalaryDistribution = () => {
  const [salaryRequests, setSalaryRequests] = useState(initialSalaryRequests);

  const handleApproval = (index) => {
    const updatedRequests = salaryRequests.map((request, idx) =>
      idx === index ? { ...request, status: 'Approved' } : request
    );
    setSalaryRequests(updatedRequests);
  };

  const handleRejection = (index) => {
    const updatedRequests = salaryRequests.map((request, idx) =>
      idx === index ? { ...request, status: 'Denied' } : request
    );
    setSalaryRequests(updatedRequests);
  };

  useEffect(() => {
    document.title = 'Payroll Distribution';
  }, []); 
  return (
    <div className="relative max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
      <h1 className="text-2xl font-bold mb-4">Salary Distribution Requests</h1>

      <div className="mb-6">
        <table className="table table-auto w-full border">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border px-4 py-2">Employee Name</th>
              <th className="border px-4 py-2">Salary Amount</th>
              <th className="border px-4 py-2">Payment Method</th>
              <th className="border px-4 py-2">GCash Number</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {salaryRequests.map((request, index) => (
              <tr key={index} className="hover:bg-neutral hover:text-white">
                <td className="border px-4 py-2">{request.employeeName}</td>
                <td className="border px-4 py-2">₱{request.salaryAmount.toFixed(2)}</td>
                <td className="border px-4 py-2">{request.paymentMethod}</td>
                <td className="border px-4 py-2">{request.paymentMethod === 'GCash' ? request.gCashNumber : 'N/A'}</td>
                <td className="border px-4 py-2">{request.status}</td>
                <td className="border px-4 py-2">
                  <button
                    className="btn btn-success"
                    onClick={() => handleApproval(index)}
                    disabled={request.status !== 'Pending'}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => handleRejection(index)}
                    disabled={request.status !== 'Pending'}
                  >
                    Deny
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalaryDistribution;
