import React, { useEffect, useState } from 'react';

const initialPayrollRecords = [
  { employeeName: 'John Lloyd', salary: 30000, hoursWorked: 40, complianceStatus: 'Pending Review', complianceDetails: '' },
  { employeeName: 'Oliver', salary: 32000, hoursWorked: 42, complianceStatus: 'Pending Review', complianceDetails: '' },
  { employeeName: 'Abby', salary: 3500, hoursWorked: 30, complianceStatus: 'Pending Review', complianceDetails: '' },
  { employeeName: 'Maria', salary: 6000, hoursWorked: 45, complianceStatus: 'Pending Review', complianceDetails: '' },
  { employeeName: 'Liam', salary: 4500, hoursWorked: 36, complianceStatus: 'Pending Review', complianceDetails: '' },
];

const ComplianceTracking = () => {
  const [payrollRecords, setPayrollRecords] = useState(initialPayrollRecords);

  const handleDownloadCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + payrollRecords.map(record => `${record.employeeName},${record.salary},${record.hoursWorked},${record.complianceStatus},${record.complianceDetails}`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "payroll_records.csv");
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmitToLegal = () => {
    let hasComplianceIssues = false;

    const updatedRecords = payrollRecords.map(record => {
      const minimumWage = 610; // Example minimum wage
      const overtimeThreshold = 40; // Standard working hours
      const overtimeRate = 1.5; // Overtime pay rate multiplier
      
      let complianceDetails = [];

      // Compliance checks
      if (record.salary < minimumWage) {
        hasComplianceIssues = true;
        complianceDetails.push(`Salary below minimum wage of ₱${minimumWage}.`);
      }

      if (record.hoursWorked > overtimeThreshold) {
        const overtimeHours = record.hoursWorked - overtimeThreshold;
        complianceDetails.push(`${overtimeHours} hours of overtime pay needed.`);
      }
      
      // Set compliance status and details
      const complianceStatus = complianceDetails.length > 0 ? 'Requires Attention' : 'Sent to Admin';

      return {
        ...record,
        complianceStatus,
        complianceDetails: complianceDetails.join(' ')
      };
    });
    
    setPayrollRecords(updatedRecords);
    
    // If there are compliance issues, alert the user
    if (hasComplianceIssues) {
      alert('Some payroll records require attention due to compliance issues.');
    } else {
      alert('All records submitted to admin successfully.');
    }
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
              <th className="border p-3">Hours Worked</th>
              <th className="border p-3">Compliance Status</th>
              <th className="border p-3">Compliance Details</th>
            </tr>
          </thead>
          <tbody>
            {payrollRecords.map((record, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors">
                <td className="border p-3">{record.employeeName}</td>
                <td className="border p-3">₱{record.salary.toFixed(2)}</td>
                <td className="border p-3">{record.hoursWorked}</td>
                <td className="border p-3">{record.complianceStatus}</td>
                <td className="border p-3">{record.complianceDetails}</td>
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
          Download Compliance Records
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
