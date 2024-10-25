import React, { useEffect, useState } from 'react';

const initialSalaryRequests = [
  { employeeName: 'John Lloyd', salaryAmount: 30000, paymentMethod: 'Cash', gCashNumber: '', status: 'Pending', approvalDate: '' },
  { employeeName: 'Oliver', salaryAmount: 32000, paymentMethod: 'GCash', gCashNumber: '09123456789', status: 'Pending', approvalDate: '' },
  { employeeName: 'Abby', salaryAmount: 32000, paymentMethod: 'GCash', gCashNumber: '09123456789', status: 'Pending', approvalDate: '' },
  { employeeName: 'Maria Clara', salaryAmount: 28000, paymentMethod: 'Cash', gCashNumber: '', status: 'Pending', approvalDate: '' },
];

const SalaryDistribution = () => {
  const [salaryRequests, setSalaryRequests] = useState(initialSalaryRequests);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const handleApproval = (index) => {
    const updatedRequests = [...salaryRequests];
    const requestToUpdate = updatedRequests[index];

    if (requestToUpdate.status === 'Pending') {
      updatedRequests[index] = { 
        ...requestToUpdate, 
        status: 'Approved', 
        approvalDate: new Date().toLocaleDateString() 
      };
      setSalaryRequests(updatedRequests);
    }
  };

  const handleRejection = (index) => {
    const updatedRequests = [...salaryRequests];
    const requestToUpdate = updatedRequests[index];

    if (requestToUpdate.status === 'Pending') {
      updatedRequests[index] = { 
        ...requestToUpdate, 
        status: 'Denied', 
        approvalDate: new Date().toLocaleDateString() 
      };
      setSalaryRequests(updatedRequests);
    }
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  const filterByMonth = (requests) => {
    return requests.filter(request => {
      const date = new Date(request.approvalDate);
      return request.approvalDate && date.getMonth() === selectedMonth
    });
  };

  useEffect(() => {
    document.title = 'Payroll Distribution';
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
      <h1 className="text-2xl font-bold mb-4">Salary Distribution Requests</h1>

      {/* Month Filter Section */}
      <div className="mb-6">
        <label htmlFor="month-select" className="mr-2">Filter by Month:</label>
        <select id="month-select" value={selectedMonth} onChange={handleMonthChange} className="p-2 border rounded">
          {Array.from({ length: 12 }, (_, index) => (
            <option key={index} value={index}>
              {new Date(0, index).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
      </div>

      {/* Pending Requests Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Pending Requests</h2>
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
            {salaryRequests.filter(request => request.status === 'Pending').map((request, index) => {
              const originalIndex = salaryRequests.findIndex(r => r.employeeName === request.employeeName);
              return (
                <tr key={index} className="hover:bg-neutral hover:text-white">
                  <td className="border px-4 py-2">{request.employeeName}</td>
                  <td className="border px-4 py-2">₱{request.salaryAmount.toFixed(2)}</td>
                  <td className="border px-4 py-2">{request.paymentMethod}</td>
                  <td className="border px-4 py-2">{request.paymentMethod === 'GCash' ? request.gCashNumber : 'N/A'}</td>
                  <td className="border px-4 py-2">{request.status}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="btn btn-success"
                      onClick={() => handleApproval(originalIndex)} 
                      disabled={request.status !== 'Pending'}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-danger ml-2"
                      onClick={() => handleRejection(originalIndex)}
                      disabled={request.status !== 'Pending'}
                    >
                      Deny
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Approved Requests Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Approved Requests</h2>
        <table className="table table-auto w-full border mb-4">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="border px-4 py-2">Employee Name</th>
              <th className="border px-4 py-2">Salary Amount</th>
              <th className="border px-4 py-2">Payment Method</th>
              <th className="border px-4 py-2">GCash Number</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Approval Date</th>
            </tr>
          </thead>
          <tbody>
            {filterByMonth(salaryRequests.filter(request => request.status === 'Approved')).map((request, index) => (
              <tr key={index} className="hover:bg-neutral hover:text-white">
                <td className="border px-4 py-2">{request.employeeName}</td>
                <td className="border px-4 py-2">₱{request.salaryAmount.toFixed(2)}</td>
                <td className="border px-4 py-2">{request.paymentMethod}</td>
                <td className="border px-4 py-2">{request.paymentMethod === 'GCash' ? request.gCashNumber : 'N/A'}</td>
                <td className="border px-4 py-2">{request.status}</td>
                <td className="border px-4 py-2">{request.approvalDate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Denied Requests Section */}
        <h2 className="text-xl font-semibold mb-2">Denied Requests</h2>
        <table className="table table-auto w-full border">
          <thead>
            <tr className="bg-red-500 text-white">
              <th className="border px-4 py-2">Employee Name</th>
              <th className="border px-4 py-2">Salary Amount</th>
              <th className="border px-4 py-2">Payment Method</th>
              <th className="border px-4 py-2">GCash Number</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Approval Date</th>
            </tr>
          </thead>
          <tbody>
            {filterByMonth(salaryRequests.filter(request => request.status === 'Denied')).map((request, index) => (
              <tr key={index} className="hover:bg-neutral hover:text-white">
                <td className="border px-4 py-2">{request.employeeName}</td>
                <td className="border px-4 py-2">₱{request.salaryAmount.toFixed(2)}</td>
                <td className="border px-4 py-2">{request.paymentMethod}</td>
                <td className="border px-4 py-2">{request.paymentMethod === 'GCash' ? request.gCashNumber : 'N/A'}</td>
                <td className="border px-4 py-2">{request.status}</td>
                <td className="border px-4 py-2">{request.approvalDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalaryDistribution;
