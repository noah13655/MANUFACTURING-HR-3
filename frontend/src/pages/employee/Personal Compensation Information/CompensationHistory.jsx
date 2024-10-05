import React, { useState } from 'react';

const CompensationHistory = () => {
  // Sample data for compensation history
  const compensationData = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'Software Engineer',
      department: 'IT',
      date: '2024-01-15',
      basicSalary: 70000,
      allowances: 10000,
      deductions: 5000,
      totalCompensation: 80000,
    },
    {
      id: 2,
      name: 'Jane Smith',
      designation: 'Product Manager',
      department: 'Product',
      date: '2024-02-10',
      basicSalary: 90000,
      allowances: 12000,
      deductions: 7000,
      totalCompensation: 95000,
    },
    {
      id: 3,
      name: 'Alice Johnson',
      designation: 'Data Scientist',
      department: 'Analytics',
      date: '2024-03-05',
      basicSalary: 80000,
      allowances: 11000,
      deductions: 6000,
      totalCompensation: 85000,
    },
    // Add more employee data as needed
  ];

  const [selectedId, setSelectedId] = useState(null);

  const toggleDetails = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold text-center mb-5">Compensation History</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-5">
        <table className="table w-full">
          <thead>
            <tr className="bg-primary text-white">
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Date</th>
              <th>Basic Salary</th>
              <th>Allowances</th>
              <th>Deductions</th>
              <th>Total Compensation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {compensationData.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.department}</td>
                <td>{employee.date}</td>
                <td>₱{employee.basicSalary.toLocaleString()}</td>
                <td>₱{employee.allowances.toLocaleString()}</td>
                <td>₱{employee.deductions.toLocaleString()}</td>
                <td>₱{employee.totalCompensation.toLocaleString()}</td>
                <td>
                  <button 
                    onClick={() => toggleDetails(employee.id)} 
                    className="btn btn-secondary"
                  >
                    {selectedId === employee.id ? 'Hide Details' : 'View Details'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompensationHistory;
