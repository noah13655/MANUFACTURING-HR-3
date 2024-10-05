import React from 'react';

const BeneficiaryInformation = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Beneficiary Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Primary Beneficiary</h2>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Relationship</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>Spouse</td>
                  <td>100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Contingent Beneficiary</h2>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Relationship</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jane Doe</td>
                  <td>Child</td>
                  <td>100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Beneficiary Designation</h2>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Benefit Type</th>
                  <th>Beneficiary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Life Insurance</td>
                  <td>John Doe</td>
                </tr>
                <tr>
                  <td>Retirement Plan</td>
                  <td>Jane Doe</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BeneficiaryInformation;
