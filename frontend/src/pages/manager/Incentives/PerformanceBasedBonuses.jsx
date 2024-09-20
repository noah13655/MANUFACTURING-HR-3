import React, { useState } from 'react';

const initialBonuses = [
  { id: 1, employee: 'Elsie', performanceScore: 95, bonusAmount: 1000 },
  { id: 2, employee: 'Rhea', performanceScore: 88, bonusAmount: 800 },
  { id: 3, employee: 'Remie', performanceScore: 92, bonusAmount: 900 },
];

const PerformanceBasedBonuses = () => {
  const [bonuses, setBonuses] = useState(initialBonuses);
  const [employee, setEmployee] = useState('');
  const [performanceScore, setPerformanceScore] = useState('');
  const [bonusAmount, setBonusAmount] = useState('');

  const addBonus = () => {
    if (employee && performanceScore && bonusAmount) {
      setBonuses([
        ...bonuses,
        {
          id: bonuses.length + 1,
          employee,
          performanceScore: parseFloat(performanceScore),
          bonusAmount: parseFloat(bonusAmount),
        },
      ]);
      setEmployee('');
      setPerformanceScore('');
      setBonusAmount('');
    }
  };

  return (
    <div className="p-6 max-w-4xl shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Performance-Based Bonuses</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Add New Bonus</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-600">Employee Name</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1"
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
              placeholder="e.g., Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Performance Score</label>
            <input
              type="number"
              className="input input-bordered w-full mt-1"
              value={performanceScore}
              onChange={(e) => setPerformanceScore(e.target.value)}
              placeholder="e.g., 100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Bonus Amount</label>
            <input
              type="number"
              className="input input-bordered w-full mt-1"
              value={bonusAmount}
              onChange={(e) => setBonusAmount(e.target.value)}
              placeholder="₱0.00"
            />
          </div>
        </div>
        <button
          onClick={addBonus}
          className="btn btn-primary mt-4 w-full"
        >
          Add Bonus
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-mb w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Performance Score</th>
              <th>Bonus Amount</th>
            </tr>
          </thead>
          <tbody>
            {bonuses.map((bonus) => (
              <tr key={bonus.id}>
                <td>{bonus.id}</td>
                <td>{bonus.employee}</td>
                <td>{bonus.performanceScore}</td>
                <td>₱{bonus.bonusAmount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceBasedBonuses;
