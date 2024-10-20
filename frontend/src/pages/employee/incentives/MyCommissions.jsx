import React, { useEffect, useState } from 'react';

const employeeId = 1; 
const initialEmployeeCommissions = [
  {
    id: 1,
    employeeName: 'Elsie',
    salesAmount: 10000,
    commissionRate: 0.05,
    commissionEarned: 500,
    date: '2024-09-01', 
  },
  {
    id: 2,
    employeeName: 'Elsie',
    salesAmount: 15000,
    commissionRate: 0.04,
    commissionEarned: 600,
    date: '2024-09-05',
  },
];

const MyCommissions = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');

  const employeeCommissions = initialEmployeeCommissions.filter(commission => commission.employeeName === 'Elsie');

  const handleFeedbackToggle = () => {
    setShowFeedback(!showFeedback);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = () => {
    console.log(feedback);
    setFeedback('');
    setShowFeedback(false);
  };
  useEffect(() => {
    document.title = "My Commissions";
  });
  return (
    <div className="relative max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center">My Sales Commissions</h1>

        {employeeCommissions.length > 0 ? (
          <table className="table w-full table-zebra">
            <thead>
              <tr>
                <th>Date</th>
                <th>Sales Amount</th>
                <th>Commission Rate</th>
                <th>Commission Earned</th>
              </tr>
            </thead>
            <tbody>
              {employeeCommissions.map((commission) => (
                <tr key={commission.id}>
                  <td>{commission.date}</td>
                  <td>₱{commission.salesAmount.toFixed(2)}</td>
                  <td>{(commission.commissionRate * 100).toFixed(2)}%</td>
                  <td>₱{commission.commissionEarned.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="alert alert-warning text-center">No commission data available.</div>
        )}

        <div className="mt-6 text-center">
          <button className="btn btn-secondary" onClick={handleFeedbackToggle}>
            {showFeedback ? 'Hide Feedback' : 'Give Feedback'}
          </button>
          {showFeedback && (
            <div className="mt-4">
              <textarea 
                className="textarea textarea-bordered w-full mb-2" 
                placeholder="Provide feedback or request..." 
                value={feedback} 
                onChange={handleFeedbackChange}>
              </textarea>
              <button className="btn btn-primary" onClick={handleFeedbackSubmit}>Submit Feedback</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCommissions;
