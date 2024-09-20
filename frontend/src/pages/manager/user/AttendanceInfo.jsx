import React, { useState } from 'react';

const AttendanceInformation = () => {
  const [attendances, setAttendances] = useState([
    {
      name: 'Elsie',
      timeIn: '08:00',
      timeOut: '17:00',
      overtime: '0',
      totalWorkHours: '9',
      status: 'Present',
    },
  ]);

  const [newName, setNewName] = useState('');
  const [newTimeIn, setNewTimeIn] = useState('');
  const [newTimeOut, setNewTimeOut] = useState('');
  const [newOvertime, setNewOvertime] = useState('');
  const [newTotalWorkHours, setNewTotalWorkHours] = useState('');
  const [newStatus, setNewStatus] = useState('');

  const handleAddAttendance = () => {
    setAttendances([
      ...attendances,
      {
        name: newName,
        timeIn: newTimeIn,
        timeOut: newTimeOut,
        overtime: newOvertime,
        totalWorkHours: newTotalWorkHours,
        status: newStatus,
      },
    ]);
    setNewName('');
    setNewTimeIn('');
    setNewTimeOut('');
    setNewOvertime('');
    setNewTotalWorkHours('');
    setNewStatus('');
  };

  const handleUpdateAttendance = (index) => {
    const updatedAttendances = [...attendances];
    updatedAttendances[index].status = updatedAttendances[index].status === 'Present' ? 'Absent' : 'Present';
    setAttendances(updatedAttendances);
  };

  const handleViewDetails = (attendance) => {
    alert(`Details:\nName: ${attendance.name}\nTime In: ${attendance.timeIn}\nTime Out: ${attendance.timeOut}\nOvertime: ${attendance.overtime}\nTotal Work Hours: ${attendance.totalWorkHours}\nStatus: ${attendance.status}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Attendance Information</h1>
      <table className="table w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Name</th>
            <th className="p-2">Time In</th>
            <th className="p-2">Time Out</th>
            <th className="p-2">Overtime</th>
            <th className="p-2">Total Work Hours</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendances.map((attendance, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{attendance.name}</td>
              <td className="p-2">{attendance.timeIn}</td>
              <td className="p-2">{attendance.timeOut}</td>
              <td className="p-2">{attendance.overtime}</td>
              <td className="p-2">{attendance.totalWorkHours}</td>
              <td className="p-2">{attendance.status}</td>
              <td className="p-2">
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => handleUpdateAttendance(index)}
                >
                  Update
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => handleViewDetails(attendance)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter name"
          className="input input-bordered w-full mt-2"
        />
        <input
          type="time"
          value={newTimeIn}
          onChange={(e) => setNewTimeIn(e.target.value)}
          className="input input-bordered w-full mt-2"
        />
        <input
          type="time"
          value={newTimeOut}
          onChange={(e) => setNewTimeOut(e.target.value)}
          className="input input-bordered w-full mt-2"
        />
        <input
          type="number"
          value={newOvertime}
          onChange={(e) => setNewOvertime(e.target.value)}
          placeholder="Enter overtime"
          className="input input-bordered w-full mt-2"
        />
        <input
          type="number"
          value={newTotalWorkHours}
          onChange={(e) => setNewTotalWorkHours(e.target.value)}
          placeholder="Enter total work hours"
          className="input input-bordered w-full mt-2"
        />
        <select
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
          className="select select-bordered w-full mt-2"
        >
          <option value="">Select status</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        <button
          className="btn btn-success mt-2"
          onClick={handleAddAttendance}
        >
          Add Attendance
        </button>
      </div>
    </div>
  );
};

export default AttendanceInformation;
