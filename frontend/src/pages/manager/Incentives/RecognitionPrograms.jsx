import React, { useState } from 'react';

const initialPrograms = [
  { id: 1, name: 'Elsie', description: 'Award for the most outstanding employee of the month', reward: '₱5000' },
  { id: 2, name: 'Rhea', description: 'Award for the team with the best performance', reward: '₱10000' },
  { id: 3, name: 'Ramie', description: 'Award for the employee with the best innovation', reward: '₱3000' },
];

const RecognitionPrograms = () => {
  const [programs, setPrograms] = useState(initialPrograms);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [reward, setReward] = useState('');

  const addProgram = () => {
    if (name && description && reward) {
      setPrograms([
        ...programs,
        {
          id: programs.length + 1,
          name,
          description,
          reward,
        },
      ]);
      setName('');
      setDescription('');
      setReward('');
    }
  };

  return (
    <div className="p-6 max-w-4xl shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Recognition Programs</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Add New Recognition Program</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Description</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., Award for the most outstanding employee of the month"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Reward</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1"
              value={reward}
              onChange={(e) => setReward(e.target.value)}
              placeholder="e.g., ₱0.00"
            />
          </div>
          <button
            onClick={addProgram}
            className="btn btn-primary w-full mt-4"
          >
            Add Program
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Reward</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((program) => (
              <tr key={program.id}>
                <td>{program.id}</td>
                <td>{program.name}</td>
                <td>{program.description}</td>
                <td>{program.reward}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecognitionPrograms;
