import React from 'react';

const compensationData = [
  {
    id: 1,
    name: 'Juan Dela Cruz',
    position: 'Software Engineer',
    salaryType: 'Bi-Monthly',
    baseSalary: 20000, // Bi-monthly
    bonuses: 5000,
    healthInsurance: 1500,
    totalCompensation: (20000 + 5000 + 1500) * 2, // Annualized for overview
  },
  {
    id: 2,
    name: 'Maria Clara',
    position: 'Product Manager',
    salaryType: 'Monthly',
    baseSalary: 60000, // Monthly
    bonuses: 10000,
    healthInsurance: 2000,
    totalCompensation: 60000 + 10000 + 2000, // Monthly total
  },
];

const CompensationOverview = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Compensation Overview</h1>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Position</th>
            <th className="border px-4 py-2">Salary Type</th>
            <th className="border px-4 py-2">Base Salary</th>
            <th className="border px-4 py-2">Bonuses</th>
            <th className="border px-4 py-2">Health Insurance</th>
            <th className="border px-4 py-2">Total Compensation</th>
          </tr>
        </thead>
        <tbody>
          {compensationData.map(employee => (
            <tr key={employee.id}>
              <td className="border px-4 py-2">{employee.id}</td>
              <td className="border px-4 py-2">{employee.name}</td>
              <td className="border px-4 py-2">{employee.position}</td>
              <td className="border px-4 py-2">{employee.salaryType}</td>
              <td className="border px-4 py-2">₱{employee.baseSalary.toLocaleString()}</td>
              <td className="border px-4 py-2">₱{employee.bonuses.toLocaleString()}</td>
              <td className="border px-4 py-2">₱{employee.healthInsurance.toLocaleString()}</td>
              <td className="border px-4 py-2">₱{employee.totalCompensation.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompensationOverview;
