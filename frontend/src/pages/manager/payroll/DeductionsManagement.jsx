import React, { useState } from 'react';

const initialDeductions = [
  { firstName: 'John', lastName: 'Doe', type: 'Tax', amount: 1000 },
  { firstName: 'Jane', lastName: 'Smith', type: 'SSS', amount: 500 },
  { firstName: 'Mark', lastName: 'Johnson', type: 'PhilHealth', amount: 300 },
];

const DeductionsManagement = () => {
  const [deductions, setDeductions] = useState(initialDeductions);
  const [deductionType, setDeductionType] = useState('');
  const [deductionAmount, setDeductionAmount] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const addDeduction = () => {
    if (deductionType && deductionAmount && firstName && lastName) {
      setDeductions([
        ...deductions,
        {
          firstName,
          lastName,
          type: deductionType,
          amount: parseFloat(deductionAmount),
        },
      ]);
      setDeductionType('');
      setDeductionAmount('');
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div>
      <h1>Deductions Management</h1>

      <div>
        <h2>Add New Deduction</h2>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="e.g., John"
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="e.g., Doe"
          />
        </div>
        <div>
          <label>Deduction Type</label>
          <input
            type="text"
            value={deductionType}
            onChange={(e) => setDeductionType(e.target.value)}
            placeholder="e.g., Tax"
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={deductionAmount}
            onChange={(e) => setDeductionAmount(e.target.value)}
            placeholder="₱0.00"
          />
        </div>
        <button onClick={addDeduction}>Add Deduction</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {deductions.map((deduction, index) => (
            <tr key={index}>
              <td>{deduction.firstName}</td>
              <td>{deduction.lastName}</td>
              <td>{deduction.type}</td>
              <td>₱{deduction.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeductionsManagement;
