import React, { useState } from 'react';

const CompensationRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: 'Request Payroll Records', description: 'Request payroll records for the current year' },
    { id: 2, name: 'Request Legal Review', description: 'Request a legal review of the current compensation structure' },
    { id: 3, name: 'Request Compensation Review', description: 'Request a review of the current compensation package' },
    { id: 4, name: 'Request Salary Structure Details', description: 'Request details of the current salary structure' },
    { id: 5, name: 'Request to Store Documents', description: 'Request to store compensation-related documents' },
    { id: 6, name: 'Request Incentives Details', description: 'Request details of the current incentives structure' },
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [requestStatus, setRequestStatus] = useState('');

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
  };

  const handleRequestSubmit = () => {
    if (selectedRequest) {
      setRequestStatus(`Request for ${selectedRequest.name} submitted successfully`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8 sm:p-12 md:p-16 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Compensation Requests</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {requests.map((request) => (
          <div key={request.id} className="bg-white shadow-lg p-8 rounded-lg cursor-pointer hover:shadow-xl" onClick={() => handleRequestClick(request)}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{request.name}</h2>
            <p className="text-lg text-gray-500">{request.description}</p>
          </div>
        ))}
      </div>
      {selectedRequest && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Selected Request: {selectedRequest.name}</h2>
          <button className="btn btn-primary" onClick={handleRequestSubmit}>
            Submit Request
          </button>
          {requestStatus && <p className="text-lg text-green-500 mt-4">{requestStatus}</p>}
        </div>
      )}
    </div>
  );
};

export default CompensationRequests;
