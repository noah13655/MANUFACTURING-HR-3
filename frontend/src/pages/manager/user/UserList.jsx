import React, { useEffect } from 'react';
import { useAuthStore } from '../../../store/authStore';

const UserList = () => {
  const { users, fetchUsers } = useAuthStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full border border-gray-300">
        <thead>
          <tr>
            <th>Lastname</th>
            <th>Firstname</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Total Hours</th>
            <th>OverTime</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.length > 0 ? (
            users.map((employee) => (
              <tr key={`${employee.id}-${employee.lastname}`}>  
                <td>{employee.lastname || 'N/A'}</td>
                <td>{employee.firstname || 'N/A'}</td>
                <td>{employee.email || 'N/A'}</td>
                <td>{employee.role || 'N/A'}</td>
                <td>{employee.status || 'N/A'}</td>
                <td>{employee.totalHours || 'N/A'}</td>
                <td>{employee.overtime || 'N/A'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
