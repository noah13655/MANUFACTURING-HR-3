import React, { useEffect, useState } from 'react';

const RequestBudget = () => {
  const [file, setFile] = useState(null); 
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please upload a supporting document for the budget request.');
      return;
    }

    console.log({
      file,
    });

    setFile(null);
    setError('');
  };

  useEffect(() => {
    document.title = 'Request Budget';
  }, []); 
  return (
    <div className="p-6 bg-base-200 shadow-md rounded-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Request Budget for Payroll</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div>
          <label htmlFor="file" className="block mb-2 font-medium text-gray-700">Supporting Document</label>
          <input
            id="file"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files[0])}
            className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            required 
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition duration-200">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default RequestBudget;
