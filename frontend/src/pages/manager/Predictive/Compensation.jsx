import React from 'react'; 

const Compensation = () => {
  const requests = [
    { id: 1, name: 'Request Payroll Records', description: 'Request payroll records for the current year' },
    { id: 2, name: 'Request Legal Review', description: 'Request a legal review of the current compensation structure' },
    { id: 3, name: 'Request Compensation Review', description: 'Request a review of the current compensation package' },
    { id: 4, name: 'Request Salary Structure Details', description: 'Request details of the current salary structure' },
    { id: 5, name: 'Request to Store Documents', description: 'Request to store compensation-related documents' },
    { id: 6, name: 'Request Incentives Details', description: 'Request details of the current incentives structure' },
  ];

  return (
    <div>
      <h1>Compensation</h1>
      <div>
        {requests.map((request) => (
          <div key={request.id}>
            <h2>{request.name}</h2>
            <p>{request.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compensation;