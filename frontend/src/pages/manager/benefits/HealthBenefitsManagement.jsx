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
    <div>
      <h1>Health Benefits Management</h1>

      <div>
        <h2>Add New Health Benefit</h2>
        <div>
          <div>
            <label>Employee Name</label>
            <input
              type="text"
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
              placeholder="e.g., Name"
            />
          </div>
          <div>
            <label>Benefit</label>
            <input
              type="text"
              value={benefit}
              onChange={(e) => setBenefit(e.target.value)}
              placeholder="e.g., Medical Insurance"
            />
          </div>
          <div>
            <label>Provider</label>
            <input
              type="text"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              placeholder="e.g., HealthCo"
            />
          </div>
          <div>
            <label>Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <button onClick={addBenefit}>
          Add Benefit
        </button>
      </div>

      <div>
        <table>
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
                <td>{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HealthBenefitsManagement;
