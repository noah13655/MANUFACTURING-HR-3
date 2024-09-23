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
];

const LaborLaws = () => {
  return (
    <div>
      <h1>Labor Laws</h1>
      <ul>
        {laborLaws.map(law => (
          <li key={law.id}>
            <h2>{law.title}</h2>
            <p>{law.description}</p>
            <a href={law.link}>Learn More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LaborLaws;
