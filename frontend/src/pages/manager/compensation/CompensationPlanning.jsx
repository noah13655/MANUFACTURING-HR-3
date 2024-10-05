import React, { useEffect, useState } from 'react';

const CompensationPlanning = () => {
  const [salaries, setSalaries] = useState([
    {
      position: 'Software Engineer',
      currentSalary: 60000,
      plannedSalary: 65000,
      deductions: 2000,
      doublePay: 3000,
      salesCommission: 5000,
      recognitionAward: 1000,
    },
    {
      position: 'Project Manager',
      currentSalary: 80000,
      plannedSalary: 85000,
      deductions: 2500,
      doublePay: 4000,
      salesCommission: 7000,
      recognitionAward: 1500,
    },
  ]);

  const [newPosition, setNewPosition] = useState('');
  const [newCurrentSalary, setNewCurrentSalary] = useState(0);
  const [newPlannedSalary, setNewPlannedSalary] = useState(0);
  const [newDeductions, setNewDeductions] = useState(0);
  const [newDoublePay, setNewDoublePay] = useState(0);
  const [newSalesCommission, setNewSalesCommission] = useState(0);
  const [newRecognitionAward, setNewRecognitionAward] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const handleAddSalary = () => {
    const newSalary = {
      position: newPosition,
      currentSalary: Number(newCurrentSalary),
      plannedSalary: Number(newPlannedSalary),
      deductions: Number(newDeductions),
      doublePay: Number(newDoublePay),
      salesCommission: Number(newSalesCommission),
      recognitionAward: Number(newRecognitionAward),
    };

    setSalaries([...salaries, newSalary]);
    resetForm();
    setShowForm(false);
  };

  const resetForm = () => {
    setNewPosition('');
    setNewCurrentSalary(0);
    setNewPlannedSalary(0);
    setNewDeductions(0);
    setNewDoublePay(0);
    setNewSalesCommission(0);
    setNewRecognitionAward(0);
  };

  const handleEditSalary = (index) => {
    console.log(`Edit salary at index: ${index}`);
  };

  const handleDeleteSalary = (index) => {
    const updatedSalaries = salaries.filter((_, i) => i !== index);
    setSalaries(updatedSalaries);
  };

  useEffect(() => {
    document.title = 'Compensation planning';
  }, []); 
  return (
    <div className="container mx-auto p-4 md:p-8 bg-base-200 max-w-7xl">
      <h1 className="text-3xl font-bold mb-4">Compensation Planning</h1>
      <div className="overflow-x-auto">
        <table className="table w-full text-left">
          <thead>
            <tr className='bg-primary text-white'>
              <th className="border px-4 py-2">Position</th>
              <th className="border px-4 py-2">Current Salary (PHP)</th>
              <th className="border px-4 py-2">Planned Salary (PHP)</th>
              <th className="border px-4 py-2">Deductions (PHP)</th>
              <th className="border px-4 py-2">Double Pay (PHP)</th>
              <th className="border px-4 py-2">Sales Commission (PHP)</th>
              <th className="border px-4 py-2">Recognition Award (PHP)</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {salaries.map((salary, index) => (
              <tr key={index} className='hover:bg-neutral hover:text-white'>
                <td className="border px-4 py-2">{salary.position}</td>
                <td className="border px-4 py-2">₱{salary.currentSalary.toLocaleString()}</td>
                <td className="border px-4 py-2">₱{salary.plannedSalary.toLocaleString()}</td>
                <td className="border px-4 py-2">₱{salary.deductions.toLocaleString()}</td>
                <td className="border px-4 py-2">₱{salary.doublePay.toLocaleString()}</td>
                <td className="border px-4 py-2">₱{salary.salesCommission.toLocaleString()}</td>
                <td className="border px-4 py-2">₱{salary.recognitionAward.toLocaleString()}</td>
                <td>
                  <button className="btn btn-primary mr-2" onClick={() => handleEditSalary(index)}>
                    Edit Salary
                  </button>
                  <button className="btn btn-error" onClick={() => handleDeleteSalary(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <button className="btn btn-primary mt-4" onClick={() => setShowForm(true)}>
        Add New Salary
      </button>

      {showForm && (
        <div className="container mx-auto p-8 bg-base-200">
          <h2 className="text-2xl font-bold mb-4">Add New Salary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">Position</label>
              <input
                type="text"
                value={newPosition}
                onChange={(e) => setNewPosition(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">Current Salary (PHP)</label>
              <input
                type="number"
                value={newCurrentSalary}
                onChange={(e) => setNewCurrentSalary(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">Planned Salary (PHP)</label>
              <input
                type="number"
                value={newPlannedSalary}
                onChange={(e) => setNewPlannedSalary(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">Deductions (PHP)</label>
              <input
                type="number"
                value={newDeductions}
                onChange={(e) => setNewDeductions(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">Double Pay (PHP)</label>
              <input
                type="number"
                value={newDoublePay}
                onChange={(e) => setNewDoublePay(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">Sales Commission (PHP)</label>
              <input
                type="number"
                value={newSalesCommission}
                onChange={(e) => setNewSalesCommission(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">Recognition Award (PHP)</label>
              <input
                type="number"
                value={newRecognitionAward}
                onChange={(e) => setNewRecognitionAward(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mt-4">
            <button className="btn btn-primary mr-2" onClick={handleAddSalary}>
              Add Salary
            </button>
            <button className="btn btn-secondary" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompensationPlanning;
