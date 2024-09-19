import React, { useEffect } from 'react';
import { useAuthStore } from '../../../store/authStore';
const UserList = () => {
  const { users, fetchUsers, error } = useAuthStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Last name</th>
            <th>First name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map(user => (
              <tr key={user._id}>
                <td>{`${user.lastname}`}</td>
                <td>{`${user.firstname}`}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button>View</button>
                  <button>Update</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
