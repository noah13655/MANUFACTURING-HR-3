import React from 'react';

const BenefitStatements = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Benefits Statement</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Benefits Summary</h2>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Benefit Type</th>
                  <th>Coverage</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Medical</td>
                  <td>80% of eligible expenses</td>
                  <td>₱1000/month</td>
                </tr>
                <tr>
                  <td>Dental</td>
                  <td>50% of eligible expenses</td>
                  <td>₱500/month</td>
                </tr>
                <tr>
                  <td>Vision</td>
                  <td>100% of eligible expenses</td>
                  <td>₱200/month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Dependent Information</h2>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Dependent Name</th>
                  <th>Relationship</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>Spouse</td>
                  <td>35</td>
                </tr>
                <tr>
                  <td>Jane Doe</td>
                  <td>Child</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Premium Information</h2>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Premium Type</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Employee-only</td>
                  <td>₱5000/month</td>
                </tr>
                <tr>
                  <td>Employee + Spouse</td>
                  <td>₱7500/month</td>
                </tr>
                <tr>
                  <td>Employee + Child(ren)</td>
                  <td>₱10000/month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitStatements;
