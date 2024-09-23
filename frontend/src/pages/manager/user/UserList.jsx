import React from 'react';

const UserList = () => {
  const users = [
    { id: 1, name: 'Elsie', email: 'elsiegandan@example.com', role: 'Manager' },
    { id: 2, name: 'Rhen', email: 'Rhensexy@example.com', role: 'Developer' },
    { id: 3, name: 'john', email: 'jhonpogi@example.com', role: 'Designer' },
  ];

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add New User</h2>
      <div>
        <input type="number" placeholder="ID" />
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <select>
          <option value="">Select Role</option>
          <option value="Manager">Manager</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
        </select>
        <button>Add User</button>
      </div>
    </div>
  );
};

export default UserList;