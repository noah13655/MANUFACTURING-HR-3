import React, { useState } from 'react';

const initialBenefits = [
  { id: 1, name: 'Elsie', description: 'Coverage for medical expenses', amount: 5000 },
  { id: 2, name: 'Rhea', description: 'Monthly gym membership fee', amount: 1000 },
  { id: 3, name: 'Remie', description: 'Monthly transportation allowance', amount: 2000 },
];

const FlexibleBenefits = () => {
  const [benefits, setBenefits] = useState(initialBenefits);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const addBenefit = () => {
    if (name && description && amount) {
      setBenefits([
        ...benefits,
        {
          id: benefits.length + 1,
          name,
          description,
          amount: parseFloat(amount),
        },
      ]);
      setName('');
      setDescription('');
      setAmount('');
    }
  };

  return (
    <div className="p-6 max-w-4xl shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Flexible Benefits Management</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Add New Flexible Benefit</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-600">Benefit Name</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Description</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., Coverage for medical expenses"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Amount</label>
            <input
              type="number"
              className="input input-bordered w-full mt-1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="₱0.00"
            />
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
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {benefits.map((benefit) => (
              <tr key={benefit.id}>
                <td>{benefit.id}</td>
                <td>{benefit.name}</td>
                <td>{benefit.description}</td>
                <td>₱{benefit.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlexibleBenefits;
