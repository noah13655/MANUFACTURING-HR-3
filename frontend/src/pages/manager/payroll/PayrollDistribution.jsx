import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import { usePayrollStore } from '../../../store/payrollStore';

const SalaryDistribution = () => {
  const { salaryRequests, error, setSalaryRequests, addSalaryRequest, fetchSalaryRequests } = usePayrollStore();
  const socket = io('http://localhost:7687');

  useEffect(() => {
    document.title = 'Payroll Distribution';
    fetchSalaryRequests();

    socket.on('existingSalaryRequests', (requests) => {
      setSalaryRequests(requests);
    });

    socket.on('newSalaryRequest', (newRequest) => {
      addSalaryRequest(newRequest);
    });

    return () => {
      socket.disconnect();
    };
  }, []); // add socket for realtime

  return (
    <div className="relative max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
      <h1 className="text-2xl font-bold mb-4">Salary Distribution Requests</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Requests</h2>
        <table className="table table-auto w-full border">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border px-4 py-2">Employee Name</th>
              <th className="border px-4 py-2">Salary Amount</th>
              <th className="border px-4 py-2">Payment Method</th>
              <th className="border px-4 py-2">GCash Number</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {salaryRequests.length > 0 ? (
              salaryRequests.map((request) => (
                <tr key={request._id} className="hover:bg-neutral hover:text-white">
                  <td className="border px-4 py-2">{`${request.employeeId.firstName} ${request.employeeId.lastName}`}</td>
                  <td className="border px-4 py-2">
                    ₱{typeof request.requestedAmount === 'number' ? request.requestedAmount.toFixed(2) : 'N/A'}
                  </td>
                  <td className="border px-4 py-2">{request.paymentMethod}</td>
                  <td className="border px-4 py-2">{request.paymentMethod === 'GCash' ? request.gCashNumber : 'N/A'}</td>
                  <td className="border px-4 py-2">{request.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="border px-4 py-2 text-center">No salary requests found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalaryDistribution;
