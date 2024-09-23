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
    <div>
      <h1>Flexible Benefits Management</h1>

      <div>
        <h2>Add New Flexible Benefit</h2>
        <div>
          <div>
            <label>Benefit Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Name"
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., Coverage for medical expenses"
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
            />
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
                <td>{benefit.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlexibleBenefits;
