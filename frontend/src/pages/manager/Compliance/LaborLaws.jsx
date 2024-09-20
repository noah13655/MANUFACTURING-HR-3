import React from 'react';

// Example data for labor laws
const laborLaws = [
  {
    id: 1,
    title: 'Minimum Wage Law',
    description: 'Ensures that all employees receive a minimum wage as set by the government.',
    link: '#',
  },
  {
    id: 2,
    title: 'Working Hours Regulations',
    description: 'Regulates the maximum working hours and provides guidelines for overtime pay.',
    link: '#',
  },
  {
    id: 3,
    title: 'Occupational Health and Safety',
    description: 'Mandates safety standards to protect employees from workplace hazards.',
    link: '#',
  },
  {
    id: 4,
    title: 'Anti-Discrimination Law',
    description: 'Prohibits discrimination based on race, gender, age, religion, or disability.',
    link: '#',
  },
  // Add more laws as needed
];

const LaborLaws = () => {
  return (
    <div className="p-6 max-w-4xl shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Labor Laws</h1>
      <ul className="space-y-4">
        {laborLaws.map(law => (
          <li key={law.id} className="p-4 bg-gray-100 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{law.title}</h2>
            <p className="text-gray-700 mb-2">{law.description}</p>
            <a href={law.link} className="text-blue-500 hover:underline">Learn More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LaborLaws;
