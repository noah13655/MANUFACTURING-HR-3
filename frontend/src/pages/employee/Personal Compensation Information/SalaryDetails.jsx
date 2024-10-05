import React, { useState } from 'react';

const SalaryDetails = () => {
  const [showDetails, setShowDetails] = useState(false);

  // Sample data for the table
  const employeeData = {
    name: 'John Doe',
    code: 'E12345',
    designation: 'Software Engineer',
    department: 'IT',
    bankAccount: '123456789012',
    epfAccount: 'EPF123456789',
    basicSalary: 70000,
    allowances: 10000,
    deductions: 5000,
    overtime: 2000
  };

  const totalSalary = (
    employeeData.basicSalary +
    employeeData.allowances -
    employeeData.deductions +
    employeeData.overtime
  ).toFixed(2);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold text-center mb-5">Employee Salary Details</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-5 mb-5">
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={() => setShowDetails(!showDetails)} 
            className="btn btn-primary"
          >
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
          <button 
            onClick={handlePrint}
            className="btn btn-secondary"
          >
            Print Salary Details
          </button>
        </div>

        {showDetails && (
          <table className="table w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th>Item</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(employeeData).map(([key, value]) => (
                <tr key={key}>
                  <td><strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}: </strong></td>
                  <td>{value}</td>
                </tr>
              ))}
              <tr className="font-bold">
                <td>Total Salarys:</td>
                <td>₱{totalSalary}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default SalaryDetails;
