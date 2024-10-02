import React, { useEffect, useState } from 'react';

const EquityAdjustments = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Lloyd', equity: 100, newEquity: '' },
    { id: 2, name: 'Oliver', equity: 120, newEquity: '' },
    { id: 3, name: 'Abby', equity: 150, newEquity: '' },
  ]);

  const handleEquityChange = (id, newEquity) => {
    setEmployees((prev) =>
      prev.map((employee) =>
        employee.id === id ? { ...employee, newEquity } : employee
      )
    );
  };

  const handleSubmit = () => {
    console.log('Equity adjustments submitted:', employees);
  };

  useEffect(() => {
    document.title = 'Equity Adjustment';
  }, []); 
  return (
    <div className="container mx-auto p-8 bg-base-200">
      <h2 className="text-3xl font-bold mb-6">Equity Adjustments</h2>

      <table className="table w-full">
        <thead>
          <tr className='bg-primary text-white'>
            <th className="border px-4 py-2">Employee</th>
            <th className="border px-4 py-2">Current Equity</th>
            <th className="border px-4 py-2">New Equity</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className='hover:bg-neutral hover:text-white'>
              <td className="border px-4 py-2">{employee.name}</td>
              <td className="border px-4 py-2">{employee.equity}</td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  value={employee.newEquity}
                  onChange={(e) =>
                    handleEquityChange(employee.id, e.target.value)
                  }
                  className="input input-bordered w-full"
                  placeholder="Enter new equity"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className="btn btn-primary"
        onClick={handleSubmit}
      >
        Submit Equity Adjustments
      </button>
    </div>
  );
};

export default EquityAdjustments;
