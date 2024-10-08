import React from 'react';

const leaveData = [
  { id: 1, name: 'John lloyd', annualLeave: 15, usedAnnualLeave: 5, sickLeave: 10, usedSickLeave: 2, personalLeave: 5, usedPersonalLeave: 1 },
  { id: 2, name: 'Rhen', annualLeave: 15, usedAnnualLeave: 8, sickLeave: 10, usedSickLeave: 3, personalLeave: 5, usedPersonalLeave: 0 },
  // More employee data can be added here
];

const LeaveBalances = () => {
  const handleView = ({ name, annualLeave, usedAnnualLeave, sickLeave, usedSickLeave, personalLeave, usedPersonalLeave }) => {
    alert(`
      Leave Balances for ${name}:
      Annual: ${annualLeave} (Used: ${usedAnnualLeave}, Remaining: ${annualLeave - usedAnnualLeave})
      Sick: ${sickLeave} (Used: ${usedSickLeave}, Remaining: ${sickLeave - usedSickLeave})
      Personal: ${personalLeave} (Used: ${usedPersonalLeave}, Remaining: ${personalLeave - usedPersonalLeave})
    `);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Leave Balances</h1>
      <table className="table table-zebra w-full mb-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Annual Leave</th>
            <th>Used Annual Leave</th>
            <th>Sick Leave</th>
            <th>Used Sick Leave</th>
            <th>Personal Leave</th>
            <th>Used Personal Leave</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leaveData.map(({ id, name, annualLeave, usedAnnualLeave, sickLeave, usedSickLeave, personalLeave, usedPersonalLeave }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{annualLeave}</td>
              <td>{usedAnnualLeave}</td>
              <td>{sickLeave}</td>
              <td>{usedSickLeave}</td>
              <td>{personalLeave}</td>
              <td>{usedPersonalLeave}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleView({ name, annualLeave, usedAnnualLeave, sickLeave, usedSickLeave, personalLeave, usedPersonalLeave })}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveBalances;
