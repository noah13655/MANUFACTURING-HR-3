import React, { useState } from 'react'; 

const EquityAdjustments = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [equityAmount, setEquityAmount] = useState(0);
  const [adjustments, setAdjustments] = useState([]);

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
    <div>
      <h1>Equity Adjustments</h1>

      <div>
        <label>Employee Name</label>
        <input
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          placeholder="Enter a name"
        />
      </div>

      <div>
        <label>Equity Amount</label>
        <input
          type="number"
          value={equityAmount}
          onChange={(e) => setEquityAmount(parseFloat(e.target.value) || 0)}
          placeholder="Enter equity amount"
        />
      </div>

      <div>
        <button onClick={handleAddAdjustment}>
          Add Adjustment
        </button>
      </div>

      <div>
        <table>
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
