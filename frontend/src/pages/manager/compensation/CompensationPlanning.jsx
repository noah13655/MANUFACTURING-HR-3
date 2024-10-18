import React, { useEffect, useState } from 'react';

const CompensationPlanning = () => {
  const [salaries, setSalaries] = useState([
    {
      position: 'Reseller',
      currentSalary: 20000,
      plannedSalary: 22000,
      deductions: 2000,
      doublePay: 3000,
      salesCommission: 5000,
      recognitionAward: 1000,
    },
    {
      position: 'CEO',
      currentSalary: 80000,
      plannedSalary: 85000,
      deductions: 2500,
      doublePay: 4000,
      salesCommission: 7000,
      recognitionAward: 1500,
    },
    {
      position: 'Secretary',
      currentSalary: 25000,
      plannedSalary: 26000,
      deductions: 1500,
      doublePay: 2000,
      salesCommission: 1000,
      recognitionAward: 500,
    },
    {
      position: 'Production Head',
      currentSalary: 60000,
      plannedSalary: 65000,
      deductions: 3000,
      doublePay: 3500,
      salesCommission: 3000,
      recognitionAward: 1200,
    },
    {
      position: 'Resellers Sales Head',
      currentSalary: 55000,
      plannedSalary: 58000,
      deductions: 2800,
      doublePay: 3200,
      salesCommission: 4000,
      recognitionAward: 1000,
    },
    {
      position: 'Manager',
      currentSalary: 70000,
      plannedSalary: 75000,
      deductions: 3500,
      doublePay: 3000,
      salesCommission: 5000,
      recognitionAward: 2000,
    },
  ]);

  const [newPosition, setNewPosition] = useState('');
  const [newCurrentSalary, setNewCurrentSalary] = useState(0);
  const [newPlannedSalary, setNewPlannedSalary] = useState(0);
  const [newDeductions, setNewDeductions] = useState(0);
  const [holidayPay, setHolidayPay] = useState(0);
  const [newSalesCommission, setNewSalesCommission] = useState(0);
  const [newRecognitionAward, setNewRecognitionAward] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const handleAddSalary = () => {
    const newSalary = {
      position: newPosition,
      currentSalary: Number(newCurrentSalary),
      plannedSalary: Number(newPlannedSalary),
      deductions: Number(newDeductions),
      doublePay: Number(holidayPay),
      salesCommission: Number(newSalesCommission),
      recognitionAward: Number(newRecognitionAward),
    };

    setSalaries([...salaries, newSalary]);
    resetForm();
    setShowForm(false);
  };

  const handleSubmitToAdmin = () => {
    console.log('Submitting to Admin:', { newPosition, newCurrentSalary, newPlannedSalary, newDeductions, holidayPay, newSalesCommission, newRecognitionAward });
    resetForm();
    setShowForm(false);
  };

  const resetForm = () => {
    setNewPosition('');
    setNewCurrentSalary(0);
    setNewPlannedSalary(0);
    setNewDeductions(0);
    setHolidayPay(0);
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
    document.title = 'Compensation Planning';
  }, []);

  const WORKING_HOURS_PER_DAY = 8;

  return (
    <div className="container mx-auto p-4 md:p-8 bg-base-200 max-w-full">
      <h1 className="text-3xl font-bold mb-4">Compensation Planning</h1>
      <div className="overflow-x-auto">
        <table className="table w-full text-left">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border px-4 py-2">Position</th>
              <th className="border px-4 py-2">Current Salary</th>
              <th className="border px-4 py-2">Planned Salary</th>
              <th className="border px-4 py-2">Deductions</th>
              <th className="border px-4 py-2">Holiday Pay</th>
              <th className="border px-4 py-2">Sales Commission</th>
              <th className="border px-4 py-2">Recognition Award</th>
              <th className="border px-4 py-2">Hourly Rate</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {salaries.map((salary, index) => (
              <tr key={index} className="hover:bg-neutral hover:text-white">
                <td className="border px-4 py-2">{salary.position}</td>
                <td className="border px-4 py-2">₱{salary.currentSalary.toLocaleString()}</td>
                <td className="border px-4 py-2">₱{salary.plannedSalary.toLocaleString()}</td>
                <td className="border px-4 py-2">₱{salary.deductions.toLocaleString()}</td>
                <td className="border px-4 py-2">₱{salary.doublePay.toLocaleString()}</td>
                <td className="border px-4 py-2">₱{salary.salesCommission.toLocaleString()}</td>
                <td className="border px-4 py-2">₱{salary.recognitionAward.toLocaleString()}</td>
                <td className="border px-4 py-2">
                  ₱{(salary.currentSalary / (WORKING_DAYS_PER_MONTH * WORKING_HOURS_PER_DAY)).toLocaleString()}
                </td>
                <td>
                  <button className="btn btn-primary mr-2" onClick={() => handleEditSalary(index)}>
                    Edit
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

      <div className="mt-4">
        <button className="btn btn-primary mr-2" onClick={() => setShowForm(true)}>
          Add New Salary
        </button>
        <button className="btn btn-secondary" onClick={handleSubmitToAdmin}>
          Submit to Admin
        </button>
      </div>

      {showForm && (
        <div className="container mx-auto p-8 bg-base-200">
          <h2 className="text-2xl font-bold mb-4">Add New Salary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">Position</label>
              <select
                value={newPosition}
                onChange={(e) => setNewPosition(e.target.value)}
                className="select select-bordered w-full max-w-xs"
              >
                <option value="" disabled>Select Position</option>
                <option value="CEO">CEO</option>
                <option value="Secretary">Secretary</option>
                <option value="Production Head">Production Head</option>
                <option value="Resellers Sales Head">Resellers Sales Head</option>
                <option value="Reseller">Reseller</option>
                <option value="Manager">Manager</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">Current Salary</label>
              <input
                type="number"
                value={newCurrentSalary}
                onChange={(e) => setNewCurrentSalary(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">Planned Salary</label>
              <input
                type="number"
                value={newPlannedSalary}
                onChange={(e) => setNewPlannedSalary(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">Deductions</label>
              <input
                type="number"
                value={newDeductions}
                onChange={(e) => setNewDeductions(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">Holiday Pay</label>
              <input
                type="number"
                value={holidayPay}
                onChange={(e) => setHolidayPay(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">Sales Commission</label>
              <input
                type="number"
                value={newSalesCommission}
                onChange={(e) => setNewSalesCommission(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">Recognition Award</label>
              <input
                type="number"
                value={newRecognitionAward}
                onChange={(e) => setNewRecognitionAward(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mt-4">
            <button className="btn btn-primary" onClick={handleAddSalary}>
              Add Salary
            </button>
            <button className="btn btn-secondary ml-2" onClick={resetForm}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompensationPlanning;
