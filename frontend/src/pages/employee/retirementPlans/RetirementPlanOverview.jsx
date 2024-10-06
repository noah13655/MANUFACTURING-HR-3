import React from 'react';

const RetirementPlanOverview = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Retirement Plan Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Retirement Plan Details</h2>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Plan Type</th>
                  <th>Contribution Rate</th>
                  <th>Employer Match</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>401(k)</td>
                  <td>10%</td>
                  <td>5%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Account Balance</h2>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Account Type</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>401(k)</td>
                  <td>₱100,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Investment Options</h2>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Investment Type</th>
                  <th>Allocation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Stocks</td>
                  <td>60%</td>
                </tr>
                <tr>
                  <td>Bonds</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td>Cash</td>
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

export default RetirementPlanOverview;
