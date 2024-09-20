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
  // Add more regulations as needed
];

const Regulations = () => {
  return (
    <div className="p-6 max-w-4xl shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">HR Regulations</h1>
      <ul className="space-y-4">
        {regulations.map(regulation => (
          <li key={regulation.id} className="p-4 bg-gray-100 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{regulation.title}</h2>
            <p className="text-gray-700 mb-2">{regulation.summary}</p>
            <a href={regulation.link} className="text-blue-500 hover:underline">Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Regulations;
