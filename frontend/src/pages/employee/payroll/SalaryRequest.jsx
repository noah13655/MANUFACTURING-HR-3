import React, { useEffect, useState } from 'react';

const SalaryRequest = () => {
  const [salaryAmount, setSalaryAmount] = useState(21000); // Default salary amount set to 21,000
  const [requestedAmount, setRequestedAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [gCashNumber, setGCashNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      requestedAmount,
      paymentMethod,
      gCashNumber: paymentMethod === 'GCash' ? gCashNumber : null,
    });
  };

  useEffect(() => {
    document.title = "Salary Request";
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
      <h1 className="text-2xl font-bold mb-4">Request Salary Distribution</h1>

      {/* Display current salary and requested amount */}
      <div className="mb-4">
        <p className="font-semibold">Current Salary: PHP {salaryAmount.toLocaleString()}</p>
        <p className="font-semibold">Requested Amount: PHP {requestedAmount.toLocaleString()}</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="requestedAmount" className="block mb-2">Amount to Request</label>
          <input
            id="requestedAmount"
            type="number"
            value={requestedAmount}
            onChange={(e) => setRequestedAmount(e.target.value)}
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
