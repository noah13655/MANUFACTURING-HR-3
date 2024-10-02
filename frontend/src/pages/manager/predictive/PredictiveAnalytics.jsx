import React, { useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

const PredictiveAnalytics = () => {
  const industryData = [
    { role: 'Software Engineer', dailyWage:800,count:25},
    { role: 'Project Manager', dailyWage:1000,count:25},
    { role: 'HR Manager', dailyWage:900,count:25},
    { role: 'Marketing Specialist', dailyWage:750,count:25},
  ];


  const predictFutureSalary = (currentSalary) => currentSalary * (1 + 0.05);

  const calculateAnnualSalary = (dailyWage) => dailyWage * 22 * 12;

  const calculateMonthlySalary = (dailyWage) => dailyWage * 22;

  const predictTurnover = (satisfaction) => (100 - satisfaction) / 100;

  const predictFutureWages = (data) => {
    return data.map((item) => ({
      ...item,
      predictedAnnualSalary: predictFutureSalary(calculateAnnualSalary(item.dailyWage)),
      predictedMonthlySalary: calculateMonthlySalary(item.dailyWage),
      currentMonthlySalary: calculateMonthlySalary(item.dailyWage), 
    }));
  };

  const predictedIndustryData = predictFutureWages(industryData);

  const predictiveChartData = predictedIndustryData.map((item, index) => ({
    year: `Year ${index + 1}`,
    currentSalary: item.currentMonthlySalary,
    predictedSalary: item.predictedMonthlySalary,
  }));

  const employeeSatisfactionData = [
    { role: 'Software Engineer', satisfaction: 85, benefitsSatisfaction: 90 },
    { role: 'Project Manager', satisfaction: 75, benefitsSatisfaction: 80 },
    { role: 'HR Manager', satisfaction: 80, benefitsSatisfaction: 85 },
    { role: 'Marketing Specialist', satisfaction: 70, benefitsSatisfaction: 75 },
  ];

  const analyzeEmployeeBehavior = (data) => {
    return data.map((employee) => ({
      ...employee,
      turnoverRisk: predictTurnover(employee.satisfaction),
      isAtRisk: employee.turnoverRisk > 0.2 ? 'High Risk' : 'Low Risk',
    }));
  };

  const analyzedBehaviorData = analyzeEmployeeBehavior(employeeSatisfactionData);

  const behavioralChartData = analyzedBehaviorData.map((employee) => ({
    role: employee.role,
    satisfaction: employee.satisfaction,
    turnoverRisk: employee.turnoverRisk * 100,
    benefitsSatisfaction: employee.benefitsSatisfaction,
  }));

const handlePrint = () => {
  const printWindow = window.open('', '_blank');
  const style = `
    <style>
      @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
      body {
        font-family: 'Inter', sans-serif; /* Ensure Tailwind font is used */
        margin: 20px;
      }
      h1 {
        text-align: center;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      th, td {
        padding: 0.5rem; /* Tailwind's spacing utility */
      }
      th {
        @apply bg-base-300 text-gray-800; /* Using Tailwind classes */
      }
      tr:nth-child(even) {
        @apply bg-base-200; /* Alternating row colors */
      }
      tr:hover {
        @apply bg-base-100; /* Hover effect */
      }
      .footer {
        margin-top: 20px;
        text-align: center;
      }
      .total {
        font-weight: bold;
      }
    </style>
  `;
  
  const tableHeader = `
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">Role</th>
          <th class="px-4 py-2">Daily Wage</th>
          <th class="px-4 py-2">Predicted Monthly Salary</th>
          <th class="px-4 py-2">Number of Employees</th>
          <th class="px-4 py-2">Total Payroll</th>
        </tr>
      </thead>
      <tbody>
  `;
  
  const tableRows = predictedIndustryData.map(item => `
    <tr>
      <td class="border px-4 py-2">${item.role}</td>
      <td class="border px-4 py-2">${item.dailyWage}</td>
      <td class="border px-4 py-2">${calculateMonthlySalary(item.dailyWage)}</td>
      <td class="border px-4 py-2">${item.count}</td>
      <td class="border px-4 py-2">${(calculateMonthlySalary(item.dailyWage) * item.count).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
    </tr>
  `).join('');

  const totalPayroll = predictedIndustryData.reduce((total, item) => {
    return total + calculateMonthlySalary(item.dailyWage) * item.count;
  }, 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const printContent = `
    <div>
      <h1 class="text-2xl font-semibold">Monthly Salary Predictions</h1>
      ${tableHeader}
      ${tableRows}
      </tbody>
    </table>
    <div class="footer">
      <p class="total">Total Employees: ${predictedIndustryData.reduce((total, item) => total + item.count, 0)}</p>
      <p class="total">Overall Payroll Prediction: PHP ${totalPayroll}</p>
    </div>
    </div>
  `;

  printWindow.document.write(style + printContent);
  printWindow.document.close();
  printWindow.print();
};

useEffect(() => {
  document.title = 'Predictive Analytics';
}, []); 
  return (
    <div className="px-4 py-6">
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-accent">Predicted Salary Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={predictiveChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="currentSalary" stroke="#8884d8" name="Current Salary" />
            <Line type="monotone" dataKey="predictedSalary" stroke="#82ca9d" name="Predicted Salary" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-accent">Employee Satisfaction and Turnover Risk</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={behavioralChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="role" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="satisfaction" fill="#82ca9d" />
            <Bar dataKey="turnoverRisk" fill="#ff7300" />
            <Bar dataKey="benefitsSatisfaction" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="p-4 bg-base-200 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-accent">Monthly Salary Predictions</h3>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Role</th>
              <th>Daily Wage</th>
              <th>Predicted Monthly Salary</th>
              <th>Current Monthly Salary</th>
              <th>Number of Employees</th>
              <th>Total Payroll</th>
            </tr>
          </thead>
          <tbody>
            {predictedIndustryData.map((item) => {
              const monthlySalary = calculateMonthlySalary(item.dailyWage);
              const totalPayroll = monthlySalary * item.count;
              return (
                <tr key={item.role}>
                  <td>{item.role}</td>
                  <td>{item.dailyWage}</td>
                  <td>{monthlySalary}</td>
                  <td>{monthlySalary}</td>
                  <td>{item.count}</td>
                  <td>{totalPayroll.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="mt-4 font-bold">
          <h4 className="text-lg">Total Employees: {predictedIndustryData.reduce((total, item) => total + item.count, 0)}</h4>
          <h4 className="text-lg">Overall Payroll Prediction:</h4>
          <p>
            PHP{' '}
            {predictedIndustryData.reduce((total, item) => {
              return total + calculateMonthlySalary(item.dailyWage) * item.count;
            }, 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>

        <button className="btn btn-primary mt-4" onClick={handlePrint}>
          Print Report
        </button>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;
