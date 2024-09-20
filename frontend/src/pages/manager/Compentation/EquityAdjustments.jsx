import React, { useState } from 'react';

const EquityAdjustments = () => {
  // State for equity adjustment data
  const [employeeName, setEmployeeName] = useState('');
  const [equityAmount, setEquityAmount] = useState(0);
  const [adjustments, setAdjustments] = useState([]);

  // Handle adding a new adjustment
  const handleAddAdjustment = () => {
    if (employeeName && equityAmount > 0) {
      setAdjustments([
        ...adjustments,
        { id: adjustments.length + 1, employeeName, equityAmount }
      ]);
      setEmployeeName('');
      setEquityAmount(0);
    }
  };

  return (
    <div className="p-6 max-w-4xl shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Equity Adjustments</h1>

      {/* Form to input equity adjustments */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-600">Employee Name</label>
          <input
            type="text"
            className="input input-bordered w-full mt-1"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            placeholder="Enter a name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Equity Amount</label>
          <input
            type="number"
            className="input input-bordered w-full mt-1"
            value={equityAmount}
            onChange={(e) => setEquityAmount(parseFloat(e.target.value) || 0)}
            placeholder="Enter equity amount"
          />
        </div>

        <div>
          <button
            className="btn btn-primary w-full mt-4"
            onClick={handleAddAdjustment}
          >
            Add Adjustment
          </button>
        </div>
      </div>

      {/* Table to display equity adjustments */}
      <div className="overflow-x-auto">
        <table className="table table-md w-full shadow-md rounded-lg">
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee Name</th>
              <th>Equity Amount</th>
            </tr>
          </thead>
          <tbody>
            {adjustments.map(adjustment => (
              <tr key={adjustment.id}>
                <td>{adjustment.id}</td>
                <td>{adjustment.employeeName}</td>
                <td>₱{adjustment.equityAmount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EquityAdjustments;
