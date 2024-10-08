import React from 'react';

const payStubData = [
  {
    id: 1,
    name: 'Rhen',
    designation: 'Software Engineer',
    department: 'IT',
    basicSalary: 60000,
    allowances: 5000,
    deductions: 2000,
    totalSalary: 63000,
    payPeriod: '2024-01-01 to 2024-01-15',
  },
  {
    id: 2,
    name: 'John llody',
    designation: 'Project Manager',
    department: 'Management',
    basicSalary: 80000,
    allowances: 7000,
    deductions: 3000,
    totalSalary: 85000,
    payPeriod: '2024-01-01 to 2024-01-15',
  },
  // Add more pay stub data as needed
];

const PayStubs = () => {
  const handlePrint = (stub) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Pay Stub for ${stub.name}</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body class="p-4">
          <h1 class="text-2xl font-bold mb-4">Pay Stub for ${stub.name}</h1>
          <p><strong>Designation:</strong> ${stub.designation}</p>
          <p><strong>Department:</strong> ${stub.department}</p>
          <p><strong>Pay Period:</strong> ${stub.payPeriod}</p>
          <table class="table w-full mb-4">
            <thead>
              <tr>
                <th>Basic Salary</th>
                <th>Allowances</th>
                <th>Deductions</th>
                <th>Total Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>₱${stub.basicSalary.toLocaleString()}</td>
                <td>₱${stub.allowances.toLocaleString()}</td>
                <td>₱${stub.deductions.toLocaleString()}</td>
                <td>₱${stub.totalSalary.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Pay Stubs</h1>
      <table className="table table-zebra w-full mb-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Pay Period</th>
            <th>Total Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {payStubData.map((stub) => (
            <tr key={stub.id}>
              <td>{stub.id}</td>
              <td>{stub.name}</td>
              <td>{stub.designation}</td>
              <td>{stub.department}</td>
              <td>{stub.payPeriod}</td>
              <td>₱{stub.totalSalary.toLocaleString()}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handlePrint(stub)}>Print Pay Stub</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayStubs;
