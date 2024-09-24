import React from 'react';

const BenefitsOverview = () => {
  return (
    <div className="overflow-x-auto">
      <h2>Benefits Overview</h2>
      <table className="table table-zebra w-full border border-gray-300">
        <thead>
          <tr>
            <th>Benefits Name</th>
            <th>Description</th>
            <th>Benefits Type</th>
            <th colSpan={3} className='justify-center'>Action</th>
          </tr>
        </thead>
        <tbody> 
          <tr>
            <td>Minimum Wage Compliance</td>
            <td>Ensure all employees earn at least the mandated minimum wage.</td>
            <td>Compensation</td>
            <td>View</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>13th Month Pay</td>
            <td>Provide an additional month’s salary after one year of service.</td>
            <td>Compensation</td>
            <td>View</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>Health Insurance</td>
            <td>Coverage for hospitalization and preventive care.</td>
            <td>Health</td>
            <td>View</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>Social Security Contributions (SSS)</td>
            <td>Withhold and contribute for retirement, disability, and death benefits.</td>
            <td>Retirement</td>
            <td>View</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>PhilHealth</td>
            <td>Facilitate contributions for healthcare services.</td>
            <td>Health</td>
            <td>View</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>Pag-IBIG Fund</td>
            <td>Help employees access housing loans and savings programs.</td>
            <td>Financial</td>
            <td>View</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>Overtime Pay</td>
            <td>Compensate for hours worked beyond standard hours at a higher rate.</td>
            <td>Compensation</td>
            <td>View</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>Holiday Pay</td>
            <td>Provide full wages or double pay for work on public holidays.</td>
            <td>Compensation</td>
            <td>View</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>Service Incentive Leave</td>
            <td>Offer paid leave (typically 5 days annually) after one year.</td>
            <td>Leave</td>
            <td>View</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>Safety and Wellness Programs</td>
            <td>Implement health initiatives and safety training.</td>
            <td>Health</td>
            <td>View</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>Retirement Benefits</td>
            <td>Provide retirement plans for eligible employees.</td>
            <td>Retirement</td>
            <td>View</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>Training and Development</td>
            <td>Support skills training and career growth.</td>
            <td>Development</td>
            <td>View</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>Meal and Transportation Allowances</td>
            <td>Offer allowances for commuting and meals.</td>
            <td>Financial</td>
            <td>View</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>Performance Bonuses</td>
            <td>Introduce bonuses to incentivize productivity.</td>
            <td>Compensation</td>
            <td>View</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>Flexible Working Arrangements</td>
            <td>Consider flexible schedules to accommodate employees' needs.</td>
            <td>Work-Life Balance</td>
            <td>View</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BenefitsOverview;
