import React, { useEffect } from 'react';

const initialPrograms = [
  { name: 'John Lloyd', description: 'Award for the most outstanding employee of the month', reward: '₱5000' },
  { name: 'Padit', description: 'Award for the team with the best performance', reward: '₱10000' },
  { name: 'Abby', description: 'Award for the employee with the best innovation', reward: '₱3000' },
];


const RecognitionPrograms = () => {
  useEffect(() => {
    document.title = 'Recognition Programs';
  }, []); 
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Recognition Programs</h1>

      <div className="mb-6 p-4 border rounded-lg shadow-md bg-base-200">
        <h2 className="text-xl font-semibold mb-4">Add New Recognition Program</h2>
        <div className="mb-4">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="e.g., Name" className="input input-bordered w-full" />
        </div>
        <div className="mb-4">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" placeholder="e.g., Award for the most outstanding employee of the month" className="input input-bordered w-full" />
        </div>
        <div className="mb-4">
          <label className="label">
            <span className="label-text">Reward</span>
          </label>
          <input type="text" placeholder="e.g., ₱0.00" className="input input-bordered w-full" />
        </div>
        <button className="btn btn-primary">Add Program</button>
      </div>

      <div>
        <table className="table w-full">
          <thead>
            <tr className='bg-primary text-white'>
              <th>Name</th>
              <th>Description</th>
              <th>Reward</th>
            </tr>
          </thead>
          <tbody>
            {initialPrograms.map((program, index) => (
              <tr key={index} className='hover:bg-neutral hover:text-white'>
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
