import React, { useState } from 'react';

const initialBenefits = [
  { id: 1, employee: 'Elsie', benefit: 'Medical Insurance', provider: 'HealthCo', status: 'Active' },
  { id: 2, employee: 'Rhea', benefit: 'Dental Insurance', provider: 'DentalPlus', status: 'Active' },
  { id: 3, employee: 'Remie', benefit: 'Vision Insurance', provider: 'VisionCare', status: 'Inactive' },
];

const HealthBenefitsManagement = () => {
  const [benefits, setBenefits] = useState(initialBenefits);
  const [employee, setEmployee] = useState('');
  const [benefit, setBenefit] = useState('');
  const [provider, setProvider] = useState('');
  const [status, setStatus] = useState('Active');

  const addBenefit = () => {
    if (employee && benefit && provider) {
      setBenefits([
        ...benefits,
        {
          id: benefits.length + 1,
          employee,
          benefit,
          provider,
          status,
        },
      ]);
      setEmployee('');
      setBenefit('');
      setProvider('');
      setStatus('Active');
    }
  };

  return (
    <div className="p-6 max-w-4xl rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Health Benefits Management</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Add New Health Benefit</h2>
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
            <label className="block text-sm font-medium text-gray-600">Benefit</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1"
              value={benefit}
              onChange={(e) => setBenefit(e.target.value)}
              placeholder="e.g., Medical Insurance"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Provider</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              placeholder="e.g., HealthCo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Status</label>
            <select
              className="select select-bordered w-full mt-1"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <button
          onClick={addBenefit}
          className="btn btn-primary mt-4 w-full"
        >
          Add Benefit
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-mb w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Benefit</th>
              <th>Provider</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {benefits.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.employee}</td>
                <td>{record.benefit}</td>
                <td>{record.provider}</td>
                <td>
                  <span
                    className={`badge ${
                      record.status === 'Active' ? 'badge-success' :
                      'badge-error'
                    }`}
                  >
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HealthBenefitsManagement;
