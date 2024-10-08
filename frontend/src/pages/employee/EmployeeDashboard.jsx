import React from 'react';

const EmployeeDashboard = () => {
  return (
    <div className="container mx-auto p-4 mt-4">
      <h1 className="text-3xl font-bold mb-4">Employee Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Payroll Information</h2>
            <div className="mt-4">
              <h3 className="font-semibold">Most Recent Payment Statement</h3>
              <p>
                <a href="/pay-stubs">
                  09/30/2024
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Leave</h2>
            <div className="mt-4">
              <p>Sick Leave: 0 Used</p>
              <p>Vacation: 0 Used</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Benefits</h2>
            <ul>
              <li>
                Health Insurance
                <p className="text-sm text-gray-500">Effective Date: 01/01/2024</p>
              </li>
              <li>
                Retirement Plan
                <p className="text-sm text-gray-500">Effective Date: 01/01/2024</p>
              </li>
              <li>
                Paid Parental Leave
                <p className="text-sm text-gray-500">Effective Date: 01/01/2024</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Events</h2>
            <ul>
              <li>03/06/2024 - Employee Appreciation Day</li>
              <li>04/03/2024 - Walk to Work Day</li>
              <li>09/02/2024 - Labor Day</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
