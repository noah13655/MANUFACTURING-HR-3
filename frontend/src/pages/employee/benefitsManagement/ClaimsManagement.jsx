import React from 'react';

const ClaimsManagement = () => {
  const claims = [
    { id: 1, name: 'John Doe', claimType: 'Health', status: 'Approved' },
    { id: 2, name: 'Jane Doe', claimType: 'Auto', status: 'Pending' },
    { id: 3, name: 'Bob Smith', claimType: 'Home', status: 'Denied' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Claims Management</h1>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">ID</th>
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Claim Type</th>
            <th className="border border-gray-400 p-2">Status</th>
            <th className="border border-gray-400 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim) => (
            <tr key={claim.id}>
              <td className="border border-gray-400 p-2">{claim.id}</td>
              <td className="border border-gray-400 p-2">{claim.name}</td>
              <td className="border border-gray-400 p-2">{claim.claimType}</td>
              <td className="border border-gray-400 p-2">{claim.status}</td>
              <td className="border border-gray-400 p-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClaimsManagement;
