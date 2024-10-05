import React, { useEffect, useState } from 'react';

const initialPayrollRecords = [
  { employeeName: 'John Lloyd', salary: 30000, complianceStatus: 'Pending Review' },
  { employeeName: 'Oliver', salary: 32000, complianceStatus: 'Pending Review' },
  { employeeName: 'Abby', salary: 3500, complianceStatus: 'Pending Review' },
];

const ComplianceTracking = () => {
  const [payrollRecords, setPayrollRecords] = useState(initialPayrollRecords);

  const handleDownloadCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + payrollRecords.map(record => `${record.employeeName},${record.salary},${record.complianceStatus}`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "payroll_records.csv");
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmitToLegal = () => {
    const updatedRecords = payrollRecords.map(record => ({
      ...record,
      complianceStatus: 'Sent to Admin',
    }));
    setPayrollRecords(updatedRecords);
  };

  useEffect(() => {
    document.title = 'Compliance Tracking';
  }, []); 
  return (
    <div className="container mx-auto p-4 md:p-8 bg-base-200 max-w-7xl rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Compliance Tracking</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Payroll Records</h2>
        <table className="table-auto w-full border bg-white shadow-md rounded-lg">
          <thead className="bg-primary text-white">
            <tr>
              <th className="border p-3">Employee Name</th>
              <th className="border p-3">Salary</th>
              <th className="border p-3">Compliance Status</th>
            </tr>
          </thead>
          <tbody>
            {payrollRecords.map((record, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors">
                <td className="border p-3">{record.employeeName}</td>
                <td className="border p-3">₱{record.salary.toFixed(2)}</td>
                <td className="border p-3">{record.complianceStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-between">
        <button
          className="btn btn-primary"
          onClick={handleDownloadCSV}
        >
          Download Payroll Records
        </button>
        <button
          className="btn btn-primary"
          onClick={handleSubmitToLegal}
        >
          Submit All to Admin
        </button>
      </div>
    </div>
  );
};

export default ComplianceTracking;
