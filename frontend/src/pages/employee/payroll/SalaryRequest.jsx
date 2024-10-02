import React, { useState } from 'react';

const SalaryRequest = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [salaryAmount, setSalaryAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [gCashNumber, setGCashNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      employeeName,
      salaryAmount,
      paymentMethod,
      gCashNumber: paymentMethod === 'GCash' ? gCashNumber : null,
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Request Salary Distribution</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="employeeName" className="block mb-2">Employee Name</label>
          <input
            id="employeeName"
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="salaryAmount" className="block mb-2">Salary Amount</label>
          <input
            id="salaryAmount"
            type="number"
            value={salaryAmount}
            onChange={(e) => setSalaryAmount(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block mb-2">Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => {
              setPaymentMethod(e.target.value);
              if (e.target.value === 'Cash') {
                setGCashNumber('');
              }
            }}
            className="select select-bordered w-full"
          >
            <option value="Cash">Cash</option>
            <option value="GCash">GCash</option>
          </select>
        </div>

        {paymentMethod === 'GCash' && (
          <div className="mb-4">
            <label htmlFor="gCashNumber" className="block mb-2">GCash Number</label>
            <input
              id="gCashNumber"
              type="text"
              value={gCashNumber}
              onChange={(e) => setGCashNumber(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary w-full">Submit Request</button>
      </form>
    </div>
  );
};

export default SalaryRequest;
