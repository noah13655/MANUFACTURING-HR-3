import React, { useEffect, useState } from 'react';

const EnrollmentSubmission = () => {
    const requests = [
        {
            employeeName: 'John Lloyd',
            benefitsName: 'PhilHealth',
            status: 'Pending',
            benefitDescription: 'Facilitate contributions for healthcare services',
            files: ['philhealth_document.pdf', 'philhealth_form.pdf'], 
        },
        {
            employeeName: 'John Lloyd',
            benefitsName: 'Pag-IBIG Fund',
            status: 'Pending',
            benefitDescription: 'Help employees access housing loans and savings programs.',
            files: ['pagibig_document.pdf'],
        },
        {
            employeeName: 'Oliver',
            benefitsName: 'Social Security Contributions (SSS)',
            status: 'Approved',
            benefitDescription: 'Contribute to retirement, disability, and death benefits.',
            files: ['sss_document.pdf'],
        },
        {
            employeeName: 'Abby',
            benefitsName: 'Social Security Contributions (SSS)',
            status: 'Approved',
            benefitDescription: 'Contribute to retirement, disability, and death benefits.',
            files: ['sss_document.pdf'],
        },
    ];

    const enrolledBenefits = {
        'John Lloyd': [
            { name: 'Life Insurance', description: 'Comprehensive life insurance plan.', requiresRequest: true },
            { name: 'Critical Illness Insurance', description: 'Coverage for critical illnesses.', requiresRequest: true },
            { name: 'Overtime Pay', description: 'Compensation for extra hours.', requiresRequest: false },
            { name: 'Meal and Transportation Allowance', description: 'Monthly meal and transportation allowance.', requiresRequest: false },
        ],
        'Oliver': [
            { name: 'Dental Plan', description: 'Full dental coverage.', requiresRequest: true },
            { name: 'Health Savings Account', description: 'Savings for medical expenses.', requiresRequest: true },
            { name: 'Holiday Pay', description: 'Additional pay for holidays.', requiresRequest: false },
        ],
        'Abby': [
            { name: 'Dental Plan', description: 'Full dental coverage.', requiresRequest: true },
            { name: 'Health Savings Account', description: 'Savings for medical expenses.', requiresRequest: true },
            { name: 'Holiday Pay', description: 'Additional pay for holidays.', requiresRequest: false },
        ],
    };

    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleViewBenefits = (employeeName) => {
        setSelectedEmployee(employeeName);
        setSelectedFiles([]); 
    };

    const handleViewFiles = (files) => {
        setSelectedFiles(files);
    };

    const closeBenefitsModal = () => setSelectedEmployee(null);
    const closeFilesModal = () => setSelectedFiles([]);

    const renderEmployeeRequests = requests.reduce((acc, req) => {
        if (!acc[req.employeeName]) {
            acc[req.employeeName] = { name: req.employeeName, benefits: [], statuses: new Set(), descriptions: [], files: [] };
        }
        acc[req.employeeName].benefits.push(req.benefitsName);
        acc[req.employeeName].statuses.add(req.status);
        acc[req.employeeName].descriptions.push(req.benefitDescription);
        acc[req.employeeName].files.push(...req.files);
        return acc;
    }, {});

    useEffect(() => {
        document.title = 'Enrollment submission';
      }, []); 
    return (
        <div className='container mx-auto p-8 bg-base-200'>
            <h2 className="text-2xl font-bold mb-4">Benefit Requests</h2>
            <table className="table w-full">
                <thead>
                    <tr className='bg-primary text-white'>
                        <th className="px-4 py-2">Employee</th>
                        <th className="px-4 py-2">Requested Benefits</th>
                        <th className="px-4 py-2">Descriptions</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Files</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(renderEmployeeRequests).map(employee => (
                        <tr key={employee.name} className='hover:bg-neutral hover:text-white'>
                            <td className="border px-4 py-2 cursor-pointer" onClick={() => handleViewBenefits(employee.name)}>
                                {employee.name}
                            </td>
                            <td className="border px-4 py-2">{employee.benefits.join(', ')}</td>
                            <td className="border px-4 py-2">{employee.descriptions.join(' & ')}</td>
                            <td className="border px-4 py-2">{Array.from(employee.statuses).join(', ')}</td>
                            <td className="border px-4 py-2">
                                {employee.files.length > 0 ? (
                                    <button className="btn btn-info" onClick={() => handleViewFiles(employee.files)}>
                                        View Files ({employee.files.length})
                                    </button>
                                ) : (
                                    <span>No Files</span>
                                )}
                            </td>
                            <td className="border px-4 py-2">
                                {employee.statuses.has('Pending') && (
                                    <>
                                        <button className="btn btn-success mr-2">Approve</button>
                                        <button className="btn btn-danger">Reject</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedEmployee && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h3 className="text-xl font-bold mb-4">{selectedEmployee}'s Enrolled Benefits</h3>
                        <h4 className="font-semibold">Benefits Requiring Requests:</h4>
                        {enrolledBenefits[selectedEmployee].filter(b => b.requiresRequest).length > 0 ? (
                            <ul className="list-disc pl-5 mb-4">
                                {enrolledBenefits[selectedEmployee].filter(b => b.requiresRequest).map((benefit, index) => (
                                    <li key={index}><strong>{benefit.name}:</strong> {benefit.description}</li>
                                ))}
                            </ul>
                        ) : <p>No benefits require requests.</p>}
                        
                        <h4 className="font-semibold">Automatically Enrolled Benefits:</h4>
                        {enrolledBenefits[selectedEmployee].filter(b => !b.requiresRequest).length > 0 ? (
                            <ul className="list-disc pl-5">
                                {enrolledBenefits[selectedEmployee].filter(b => !b.requiresRequest).map((benefit, index) => (
                                    <li key={index}><strong>{benefit.name}:</strong> {benefit.description}</li>
                                ))}
                            </ul>
                        ) : <p>No automatically enrolled benefits.</p>}
                        <div className="mt-4 flex justify-end">
                            <button className="btn btn-secondary" onClick={closeBenefitsModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}

            {selectedFiles.length > 0 && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h3 className="text-xl font-bold mb-4">Submitted Files</h3>
                        <ul className="list-disc pl-5 mb-4">
                            {selectedFiles.map((file, index) => (
                                <li key={index}>
                                    <a href={`/path/to/files/${file}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                        {file}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 flex justify-end">
                            <button className="btn btn-secondary" onClick={closeFilesModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EnrollmentSubmission;
