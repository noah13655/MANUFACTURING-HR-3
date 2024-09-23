import React from 'react';

// Example data for HR regulations
const regulations = [
  {
    id: 1,
    title: 'Employee Rights and Responsibilities',
    summary: 'Outlines the basic rights and responsibilities of employees within the company.',
    link: '#',
  },
  {
    id: 2,
    title: 'Anti-Harassment Policy',
    summary: 'Describes the company’s stance on harassment and the procedures for reporting and addressing incidents.',
    link: '#',
  },
  {
    id: 3,
    title: 'Leave and Absence Policy',
    summary: 'Details the procedures for requesting and managing employee leave and absences.',
    link: '#',
  },
  {
    id: 4,
    title: 'Workplace Safety Standard',
    summary: 'Establishes safety standards and practices to ensure a safe working environment.',
    link: '#',
  },
];

const Regulations = () => {
  return (
    <div>
      <h1>HR Regulations</h1>
      <ul>
        {regulations.map(regulation => (
          <li key={regulation.id}>
            <h2>{regulation.title}</h2>
            <p>{regulation.summary}</p>
            <a href={regulation.link}>Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Regulations;
