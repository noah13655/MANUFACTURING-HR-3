import React, { useEffect, useState } from 'react';

const initialPayrollRecords = [
  { employeeName: 'John Lloyd', salary: 30000, hoursWorked: 40, complianceStatus: 'Pending Review' },
  { employeeName: 'Oliver', salary: 32000, hoursWorked: 42, complianceStatus: 'Pending Review' },
  { employeeName: 'Abby', salary: 3500, hoursWorked: 30, complianceStatus: 'Pending Review' },
  { employeeName: 'Maria', salary: 6000, hoursWorked: 45, complianceStatus: 'Pending Review' },
  { employeeName: 'Liam', salary: 4500, hoursWorked: 36, complianceStatus: 'Pending Review' },
];

const ComplianceTracking = () => {
  const [payrollRecords, setPayrollRecords] = useState(initialPayrollRecords);

  const calculatePayroll = (record) => {
    const minimumWage = 610;
    const overtimeThreshold = 40;
    const overtimeRate = 1.25;
    const holidayRate = 1.3;
    const sssDeduction = 500;
    const philHealthDeduction = 300;
    const pagIbigDeduction = 100;
    const taxRate = 0.10;

    const overtimeHours = Math.max(0, record.hoursWorked - overtimeThreshold);
    const overtimePay = overtimeHours * (minimumWage * overtimeRate);

    const holidayWork = record.hoursWorked > 8;
    const holidayPay = holidayWork ? (record.salary / 30) * holidayRate : 0;

    const tax = (record.salary + overtimePay + holidayPay) * taxRate;
    const totalDeductions = sssDeduction + philHealthDeduction + pagIbigDeduction + tax;

    const netPay = record.salary + overtimePay + holidayPay - totalDeductions;

    return {
        ...record,
        overtimePay,
        holidayPay,
        tax,
        totalDeductions,
        netPay,
    };
};


  const updatedPayrollRecords = payrollRecords.map(calculatePayroll);

  const handleDownloadCSV = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      updatedPayrollRecords
        .map((record) =>
          `${record.employeeName},${record.salary},${record.hoursWorked},${record.overtimePay.toFixed(2) || 0},${record.holidayPay.toFixed(2) || 0},${record.tax.toFixed(2) || 0},${record.totalDeductions.toFixed(2) || 0},${record.netPay.toFixed(2) || 0},${record.complianceStatus}`
        )
        .join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'payroll_records.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmitToLegal = () => {
    const updatedRecords = updatedPayrollRecords.map((record) => ({
      ...record,
      complianceStatus: 'Sent',
    }));

    setPayrollRecords(updatedRecords);
    alert('Compliance checked and records updated.');
  };

  useEffect(() => {
    document.title = 'Compliance Tracking';
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Compliance Tracking</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Payroll Records</h2>
        <table className="table-auto w-full border bg-white shadow-md rounded-lg">
          <thead className="bg-primary text-white">
            <tr>
              <th className="border p-3">Employee Name</th>
              <th className="border p-3">Salary</th>
              <th className="border p-3">Hours Worked</th>
              <th className="border p-3">Overtime Pay</th>
              <th className="border p-3">Holiday Pay</th>
              <th className="border p-3">Tax</th>
              <th className="border p-3">Total Deductions</th>
              <th className="border p-3">Net Pay</th>
              <th className="border p-3">Compliance Status</th>
            </tr>
          </thead>
          <tbody>
            {updatedPayrollRecords.map((record, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors">
                <td className="border p-3">{record.employeeName}</td>
                <td className="border p-3">₱{record.salary.toFixed(2)}</td>
                <td className="border p-3">{record.hoursWorked}</td>
                <td className="border p-3">₱{record.overtimePay?.toFixed(2) || '0.00'}</td>
                <td className="border p-3">₱{record.holidayPay?.toFixed(2) || '0.00'}</td>
                <td className="border p-3">₱{record.tax?.toFixed(2) || '0.00'}</td>
                <td className="border p-3">₱{record.totalDeductions?.toFixed(2) || '0.00'}</td>
                <td className="border p-3">₱{record.netPay?.toFixed(2) || '0.00'}</td>
                <td className="border p-3">{record.complianceStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-4">
        <button className="btn btn-primary" onClick={handleDownloadCSV}>
          Download Compliance Records
        </button>
        <button className="btn btn-primary" onClick={handleSubmitToLegal}>
          Submit All to Admin
        </button>
      </div>
    </div>
  );
};

export default ComplianceTracking;
