import React from 'react';

const TaxDocuments = () => {
  const handleDownload = (fileName) => {
    // Simulating download action
    alert(`Downloading ${fileName}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Tax Documents for Employees</h2>
      <p>Below are the tax documents available for download:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title">W-2 Form</h3>
            <p>Download your W-2 form for the current tax year.</p>
            <button 
              className="btn btn-primary" 
              onClick={() => handleDownload('W-2_Form.pdf')}
            >
              Download
            </button>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title">1099 Form</h3>
            <p>Download your 1099 form for the current tax year.</p>
            <button 
              className="btn btn-primary" 
              onClick={() => handleDownload('1099_Form.pdf')}
            >
              Download
            </button>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title">Tax Withholding Form</h3>
            <p>Download the tax withholding form to update your tax withholding information.</p>
            <button 
              className="btn btn-primary" 
              onClick={() => handleDownload('Tax_Withholding_Form.pdf')}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxDocuments;
