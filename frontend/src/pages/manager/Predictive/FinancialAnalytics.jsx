import React from 'react';

const defaultBenefitsUtilization = [
  { id: 1, benefit: 'Health Insurance', utilizationRate: 80, cost: 1000 },
  { id: 2, benefit: 'Dental Insurance', utilizationRate: 70, cost: 500 },
  { id: 3, benefit: 'Vision Insurance', utilizationRate: 60, cost: 300 },
  { id: 4, benefit: 'Life Insurance', utilizationRate: 50, cost: 200 },
  { id: 5, benefit: 'Disability Insurance', utilizationRate: 40, cost: 150 },
];

const FinancialAnalytics = () => {
  return (
    <div>
      <h1>Benefits Utilization Analysis</h1>
      <table>
        <thead>
          <tr>
            <th>Benefit</th>
            <th>Utilization Rate (%)</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {defaultBenefitsUtilization.map((benefit) => (
            <tr key={benefit.id}>
              <td>{benefit.benefit}</td>
              <td>{benefit.utilizationRate}</td>
              <td>{benefit.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add New Benefit</h2>
      <div>
        <label>Benefit</label>
        <input type="text" />
      </div>
      <div>
        <label>Utilization Rate (%)</label>
        <input type="number" />
      </div>
      <div>
        <label>Cost</label>
        <input type="number" />
      </div>
      <button>Add Benefit</button>
    </div>
  );
};

export default FinancialAnalytics;