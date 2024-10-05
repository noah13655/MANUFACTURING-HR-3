import React from 'react';

const SalaryProjections = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Salary Projections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Current Salary</h2>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023</td>
                  <td>₱100,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Projected Salary</h2>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024</td>
                  <td>₱110,000.00</td>
                </tr>
                <tr>
                  <td>2025</td>
                  <td>₱120,000.00</td>
                </tr>
                <tr>
                  <td>2026</td>
                  <td>₱130,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Salary Growth Rate</h2>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Growth Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>2025</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>2026</td>
                  <td>10%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SalaryProjections;
