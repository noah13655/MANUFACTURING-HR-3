import React from 'react';

const initialPrograms = [
  { id: 1, name: 'Elsie', description: 'Award for the most outstanding employee of the month', reward: '₱5000' },
  { id: 2, name: 'Rhea', description: 'Award for the team with the best performance', reward: '₱10000' },
  { id: 3, name: 'Ramie', description: 'Award for the employee with the best innovation', reward: '₱3000' },
];

const RecognitionPrograms = () => {
  return (
    <div>
      <h1>Recognition Programs</h1>

      <div>
        <h2>Add New Recognition Program</h2>
        <div>
          <label>Name</label>
          <input type="text" placeholder="e.g., Name" />
        </div>
        <div>
          <label>Description</label>
          <input type="text" placeholder="e.g., Award for the most outstanding employee of the month" />
        </div>
        <div>
          <label>Reward</label>
          <input type="text" placeholder="e.g., ₱0.00" />
        </div>
        <button>Add Program</button>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Reward</th>
            </tr>
          </thead>
          <tbody>
            {initialPrograms.map((program) => (
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
