import React from 'react';

const BenefitStatements = () => {
  const benefits = [
    {
      plan: 'Health Insurance',
      type: 'Medical',
      status: 'Active',
      effectiveDate: '2023-01-01',
      startDate: '2023-01-01',
      endDate: '2024-01-01',
      monthlyPremium: '₱15,000',
      employeeContributions: '₱7,500',
      employerContributions: '₱7,500',
    },
    {
      plan: 'Dental Insurance',
      type: 'Dental',
      status: 'Active',
      effectiveDate: '2023-01-01',
      startDate: '2023-01-01',
      endDate: '2024-01-01',
      monthlyPremium: '₱2,500',
      employeeContributions: '₱1,250',
      employerContributions: '₱1,250',
    },
    // Add more benefit entries as needed
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Benefit Statements</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th>PLAN</th>
            <th>TYPE</th>
            <th>STATUS</th>
            <th>EFFECTIVE DATE</th>
            <th>START DATE</th>
            <th>END DATE</th>
            <th>MONTHLY PREMIUM</th>
            <th>EMPLOYEE CONTRIBUTIONS</th>
            <th>EMPLOYER CONTRIBUTIONS</th>
          </tr>
        </thead>
        <tbody>
          {benefits.map((benefit, index) => (
            <tr key={index}>
              <td>{benefit.plan}</td>
              <td>{benefit.type}</td>
              <td>{benefit.status}</td>
              <td>{benefit.effectiveDate}</td>
              <td>{benefit.startDate}</td>
              <td>{benefit.endDate}</td>
              <td>{benefit.monthlyPremium}</td>
              <td>{benefit.employeeContributions}</td>
              <td>{benefit.employerContributions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BenefitStatements;
