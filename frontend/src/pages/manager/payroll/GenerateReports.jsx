import React, { useEffect, useState } from 'react';

const GenerateReports = () => {
  const [reportType, setReportType] = useState('');
  const [reportData, setReportData] = useState([]);

  const handleReportGeneration = () => {
    if (!reportType) {
      alert('Please select a report type before generating the report.');
      return;
    }

    const sampleReportData = [
      { employeeName: 'John Lloyd', salary: 30000, paymentMethod: 'Cash', status: 'Approved', date: new Date().toLocaleDateString() },
      { employeeName: 'Oliver', salary: 32000, paymentMethod: 'GCash', status: 'Approved', date: new Date().toLocaleDateString() },
      { employeeName: 'Abby', salary: 32000, paymentMethod: 'GCash', status: 'Approved', date: new Date().toLocaleDateString() },
    ];

    setReportData(sampleReportData);
  };

  const handlePrint = () => {
    const printContent = document.getElementById('report-table').innerHTML;
    const newWindow = window.open('', '', 'width=800, height=600');
    newWindow.document.write(`
      <html>
        <head>
          <title>Payroll Report</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1 { text-align: center; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; }
            th { background-color: #007bff; color: white; }
            tr:hover { background-color: #f2f2f2; }
            @media print {
              button { display: none; }
            }
          </style>
        </head>
        <body>
          <h1>Payroll Report</h1>
          <div>${printContent}</div>
        </body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
  };

  useEffect(() => {
    document.title = 'Generate Reports';
  }, []); 
  return (
    <div className="container mx-auto p-4 md:p-8 bg-base-200 max-w-7xl">
      <h1 className="text-2xl font-bold mb-4">Generate Reports</h1>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="reportType">
          Select Report Type:
        </label>
        <select
          id="reportType"
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="select select-bordered w-full"
        >
          <option value="">Select Report Type</option>
          <option value="monthly">Monthly Payroll Report</option>
          <option value="yearly">Yearly Payroll Report</option>
          <option value="custom">Custom Date Range Report</option>
        </select>
      </div>

      <button className="btn btn-primary w-full sm:w-auto" onClick={handleReportGeneration}>
        Generate Report
      </button>

      <div className={`mt-4 ${reportData.length === 0 ? 'min-h-[100px]' : ''}`}>
        {reportData.length > 0 ? (
          <>
            <h2 className="text-xl font-semibold mb-2">Generated Report</h2>
            <div id="report-table" className="overflow-x-auto">
              <table className="table table-auto w-full border">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border px-4 py-2">Employee Name</th>
                    <th className="border px-4 py-2">Salary</th>
                    <th className="border px-4 py-2">Payment Method</th>
                    <th className="border px-4 py-2">Status</th>
                    <th className="border px-4 py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {reportData.map((data, index) => (
                    <tr key={index} className="hover:bg-neutral hover:text-white">
                      <td className="border px-4 py-2">{data.employeeName}</td>
                      <td className="border px-4 py-2">₱{data.salary.toFixed(2)}</td>
                      <td className="border px-4 py-2">{data.paymentMethod}</td>
                      <td className="border px-4 py-2">{data.status}</td>
                      <td className="border px-4 py-2">{data.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="btn btn-secondary mt-4 w-full sm:w-auto" onClick={handlePrint}>
              Print Report
            </button>
          </>
        ) : (
          <p className="text-gray-500 text-center">No report generated yet. Please select a report type and generate a report.</p>
        )}
      </div>
    </div>
  );
};

export default GenerateReports;
