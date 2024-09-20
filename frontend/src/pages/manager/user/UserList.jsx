import React, { useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Elsie', email: 'elsiegandan@example.com', role: 'Manager' },
    { id: 2, name: 'Rhen', email: 'Rhensexy@example.com', role: 'Developer' },
    { id: 3, name: 'john', email: 'jhonpogi@example.com', role: 'Designer' },
  ]);

  const [newUser, setNewUser] = useState({ id: 0, name: '', email: '', role: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleAddOrEditUser = () => {
    if (isEditing) {
      setUsers(users.map(user => user.id === newUser.id ? newUser : user));
    } else {
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
    }
    resetForm();
  };

  const handleEdit = (user) => {
    setNewUser(user);
    setIsEditing(true);
  };

  const resetForm = () => {
    setNewUser({ id: 0, name: '', email: '', role: '' });
    setIsEditing(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-2">{user.id}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => alert(`Viewing user: ${user.name}`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td className="p-2">
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="ID"
                value={newUser.id}
                onChange={(e) => setNewUser({ ...newUser, id: parseInt(e.target.value) })}
                disabled={isEditing} // Disable ID input when editing
              />
            </td>
            <td className="p-2">
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              />
            </td>
            <td className="p-2">
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
            </td>
            <td className="p-2">
              <select
                className="select select-bordered w-full"
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              >
                <option value="">Select Role</option>
                <option value="Manager">Manager</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
              </select>
            </td>
            <td className="p-2">
              <button
                className="btn btn-primary"
                onClick={handleAddOrEditUser}
              >
                {isEditing ? 'Update User' : 'Add User'}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
