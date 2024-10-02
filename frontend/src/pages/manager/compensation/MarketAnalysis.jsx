import React, { useEffect, useState } from 'react';

const MarketAnalysis = () => {
  const industryData = [
    { role: 'Software Engineer', dailyWage: 610 },
    { role: 'Project Manager', dailyWage: 750 },
    { role: 'HR Manager', dailyWage: 550 },
    { role: 'Marketing Specialist', dailyWage: 500 },
  ];

  const geographicData = [
    { location: 'Metro Manila', dailyWage: 710 },
    { location: 'Cebu City', dailyWage: 580 },
    { location: 'Davao City', dailyWage: 520 },
  ];

  const incentivesData = [
    {
      type: 'Bonus',
      yourCompany: '10% of Annual Salary',
      competitor: '5% of Annual Salary',
    },
    {
      type: 'Health Insurance',
      yourCompany: 'Full Coverage',
      competitor: 'Partial Coverage',
    },
    {
      type: 'Paid Time Off',
      yourCompany: '20 Days',
      competitor: '15 Days',
    },
    {
      type: 'Retirement Plan',
      yourCompany: 'Company Match up to 10%',
      competitor: 'No Match',
    },
  ];

  const geographicIncentivesData = [
    { location: 'Metro Manila', incentive: 'Higher transportation allowance' },
    { location: 'Cebu City', incentive: 'Flexible work hours' },
    { location: 'Davao City', incentive: 'Remote work options' },
  ];

  const turnoverData = [
    { role: 'Software Engineer', turnoverRate: 10 },
    { role: 'Project Manager', turnoverRate: 5 },
    { role: 'HR Manager', turnoverRate: 7 },
    { role: 'Marketing Specialist', turnoverRate: 8 },
  ];

  const WORKING_DAYS_PER_MONTH = 24;
  const WORKING_DAYS_PER_YEAR = WORKING_DAYS_PER_MONTH * 12;
  const WORKING_HOURS_PER_DAY = 8;

  const calculateMonthlySalary = (dailyWage) => dailyWage * WORKING_DAYS_PER_MONTH;
  const calculateWeeklySalary = (dailyWage) => (dailyWage * WORKING_DAYS_PER_MONTH) / 4;
  const calculateAnnualSalary = (dailyWage) => dailyWage * WORKING_DAYS_PER_YEAR;
  const calculateHourlySalary = (dailyWage) => dailyWage / WORKING_HOURS_PER_DAY;

  const averageIndustryWage = industryData.reduce((acc, curr) => acc + curr.dailyWage, 0) / industryData.length;
  const averageGeographicWage = geographicData.reduce((acc, curr) => acc + curr.dailyWage, 0) / geographicData.length;
  const averageTurnoverRate = turnoverData.reduce((acc, curr) => acc + curr.turnoverRate, 0) / turnoverData.length;

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const filteredIndustryData = industryData;
  const filteredGeographicData = geographicData;

  useEffect(() => {
    document.title = 'Market Analysis';
  }, []); 
  return (
    <div className="container mx-auto p-8 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">Market Analysis</h2>

      <div className="mb-8">
        <label className="mr-4">Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          className="input input-bordered"
        />
        <label className="ml-4 mr-4">End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          className="input input-bordered"
        />
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-accent">Salary Benchmarking (Based on Daily Wage)</h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className='bg-primary text-white'>
                <th className="border px-4 py-2">Job Role</th>
                <th className="border px-4 py-2">Daily Wage (PHP)</th>
                <th className="border px-4 py-2">Hourly Wage (PHP)</th>
                <th className="border px-4 py-2">Monthly Salary (PHP)</th>
                <th className="border px-4 py-2">Weekly Salary (PHP)</th>
                <th className="border px-4 py-2">Annual Salary (PHP)</th>
              </tr>
            </thead>
            <tbody>
              {filteredIndustryData.map((data, index) => (
                <tr key={index} className="hover:bg-neutral hover:text-white">
                  <td className="border px-4 py-2">{data.role}</td>
                  <td className="border px-4 py-2">{data.dailyWage.toLocaleString()}</td>
                  <td className="border px-4 py-2">{calculateHourlySalary(data.dailyWage).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                  <td className="border px-4 py-2">{calculateMonthlySalary(data.dailyWage).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                  <td className="border px-4 py-2">{calculateWeeklySalary(data.dailyWage).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                  <td className="border px-4 py-2">{calculateAnnualSalary(data.dailyWage).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <p className="font-bold">Average Daily Wage in Industry: ₱{averageIndustryWage.toFixed(2).toLocaleString()}</p>
        </div>
      </div>

      <div className="my-4">
        <hr className="border-t-2 border-gray-300 w-full" />
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-accent">Geographic Analysis (Based on Daily Wage)</h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className='bg-primary text-white'>
                <th className="border px-4 py-2">Location</th>
                <th className="border px-4 py-2">Daily Wage (PHP)</th>
                <th className="border px-4 py-2">Hourly Wage (PHP)</th>
                <th className="border px-4 py-2">Monthly Salary (PHP)</th>
                <th className="border px-4 py-2">Weekly Salary (PHP)</th>
                <th className="border px-4 py-2">Annual Salary (PHP)</th>
              </tr>
            </thead>
            <tbody>
              {filteredGeographicData.map((data, index) => (
                <tr key={index} className="hover:bg-neutral hover:text-white">
                  <td className="border px-4 py-2">{data.location}</td>
                  <td className="border px-4 py-2">{data.dailyWage.toLocaleString()}</td>
                  <td className="border px-4 py-2">{calculateHourlySalary(data.dailyWage).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                  <td className="border px-4 py-2">{calculateMonthlySalary(data.dailyWage).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                  <td className="border px-4 py-2">{calculateWeeklySalary(data.dailyWage).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                  <td className="border px-4 py-2">{calculateAnnualSalary(data.dailyWage).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <p className="font-bold">Average Daily Wage in Geography: ₱{averageGeographicWage.toFixed(2).toLocaleString()}</p>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-accent">Employee Turnover Analysis</h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className='bg-primary text-white'>
                <th className="border px-4 py-2">Job Role</th>
                <th className="border px-4 py-2">Turnover Rate (%)</th>
              </tr>
            </thead>
            <tbody>
              {turnoverData.map((data, index) => (
                <tr key={index} className="hover:bg-neutral hover:text-white">
                  <td className="border px-4 py-2">{data.role}</td>
                  <td className="border px-4 py-2">{data.turnoverRate.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <p className="font-bold">Average Turnover Rate: {averageTurnoverRate.toFixed(2)}%</p>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-accent">Company Incentives</h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className='bg-primary text-white'>
                <th className="border px-4 py-2">Incentive Type</th>
                <th className="border px-4 py-2">Your Company</th>
                <th className="border px-4 py-2">Competitor</th>
              </tr>
            </thead>
            <tbody>
              {incentivesData.map((data, index) => (
                <tr key={index} className="hover:bg-neutral hover:text-white">
                  <td className="border px-4 py-2">{data.type}</td>
                  <td className="border px-4 py-2">{data.yourCompany}</td>
                  <td className="border px-4 py-2">{data.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-accent">Geographic Incentives</h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className='bg-primary text-white'>
                <th className="border px-4 py-2">Location</th>
                <th className="border px-4 py-2">Incentive</th>
              </tr>
            </thead>
            <tbody>
              {geographicIncentivesData.map((data, index) => (
                <tr key={index} className="hover:bg-neutral hover:text-white">
                  <td className="border px-4 py-2">{data.location}</td>
                  <td className="border px-4 py-2">{data.incentive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
