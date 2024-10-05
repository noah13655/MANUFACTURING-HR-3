import React from 'react';

const PayStubs = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Pay Stub</h1>
      <button onClick={handlePrint} className="btn btn-primary mb-4">
        Print Pay Stub
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Employee Information</h2>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Job Title</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>EMP001</td>
                  <td>John Doe</td>
                  <td>Software Engineer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Pay Information</h2>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Pay Period</th>
                  <th>Pay Date</th>
                  <th>Gross Pay</th>
                  <th>Net Pay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01/01/2023 - 01/31/2023</td>
                  <td>02/15/2023</td>
                  <td>₱5,000.00</td>
                  <td>₱3,500.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Deductions</h2>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Deduction Type</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Health Insurance</td>
                  <td>₱100.00</td>
                </tr>
                <tr>
                  <td>401(k)</td>
                  <td>₱500.00</td>
                </tr>
                <tr>
                  <td>Taxes</td>
                  <td>₱1,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayStubs;
