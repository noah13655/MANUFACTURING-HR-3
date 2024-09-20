import React, { useState } from 'react';

const initialPlans = [
  { id: 1, employee: 'Elsie', plan: '401(k)', provider: 'RetireCo', contribution: 500, status: 'Active' },
  { id: 2, employee: 'Rhea', plan: 'Pension', provider: 'PensionPlus', contribution: 600, status: 'Active' },
  { id: 3, employee: 'Ramie', plan: 'IRA', provider: 'FutureSave', contribution: 300, status: 'Inactive' },
];

const RetirementPlans = () => {
  const [plans, setPlans] = useState(initialPlans);
  const [employee, setEmployee] = useState('');
  const [plan, setPlan] = useState('');
  const [provider, setProvider] = useState('');
  const [contribution, setContribution] = useState('');
  const [status, setStatus] = useState('Active');

  const addPlan = () => {
    if (employee && plan && provider && contribution) {
      setPlans([
        ...plans,
        {
          id: plans.length + 1,
          employee,
          plan,
          provider,
          contribution: parseFloat(contribution),
          status,
        },
      ]);
      setEmployee('');
      setPlan('');
      setProvider('');
      setContribution('');
      setStatus('Active');
    }
  };

  return (
    <div className="p-6 max-w-4xl rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Retirement Plans Management</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Add New Retirement Plan</h2>
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
            <label className="block text-sm font-medium text-gray-600">Plan Type</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              placeholder="e.g., 401(k), Pension"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Provider</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              placeholder="e.g., RetireCo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Monthly Contribution</label>
            <input
              type="number"
              className="input input-bordered w-full mt-1"
              value={contribution}
              onChange={(e) => setContribution(e.target.value)}
              placeholder="₱0.00"
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
          onClick={addPlan}
          className="btn btn-primary mt-4 w-full"
        >
          Add Plan
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-mb w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Plan</th>
              <th>Provider</th>
              <th>Contribution</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.id}>
                <td>{plan.id}</td>
                <td>{plan.employee}</td>
                <td>{plan.plan}</td>
                <td>{plan.provider}</td>
                <td>₱{plan.contribution.toFixed(2)}</td>
                <td>
                  <span
                    className={`badge ${
                      plan.status === 'Active' ? 'badge-success' :
                      'badge-error'
                    }`}
                  >
                    {plan.status}
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

export default RetirementPlans;
