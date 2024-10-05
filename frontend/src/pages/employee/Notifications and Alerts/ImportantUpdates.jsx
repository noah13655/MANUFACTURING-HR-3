import React from 'react';

const ImportantUpdates = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Important Updates for Employees</h2>
      <div className="alert alert-info">
        <div className="flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h8m0 0v8m0-8l-8 8-4-4-6 4"></path>
          </svg>
          <span>Open Enrollment for Benefits: April 1st - April 15th</span>
        </div>
      </div>
      <div className="alert alert-warning">
        <div className="flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h8m0 0v8m0-8l-8 8-4-4-6 4"></path>
          </svg>
          <span>Required Training: Compliance and Ethics - Due May 1st</span>
        </div>
      </div>
      <div className="alert alert-success">
        <div className="flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h8m0 0v8m0-8l-8 8-4-4-6 4"></path>
          </svg>
          <span>New Employee Recognition Program - Nominate a Colleague Today!</span>
        </div>
      </div>
    </div>
  );
};

export default ImportantUpdates;
