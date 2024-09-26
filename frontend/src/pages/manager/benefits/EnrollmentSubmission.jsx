import React, { useState } from 'react';

const EnrollmentSubmission = () => {
    const requests = [
        {
            _id: '1',
            employeeName: 'John Doe',
            benefitName: 'PhilHealth',
            status: 'Pending',
            benefitDescription: 'Facilitate contributions for healthcare services',
        },
        {
            _id: '2',
            employeeName: 'John Doe',
            benefitName: 'Pag-IBIG Fund',
            status: 'Pending',
            benefitDescription: 'Help employees access housing loans and savings programs.',
        },
        {
            _id: '3',
            employeeName: 'Jane Smith',
            benefitName: 'Social Security Contributions (SSS)',
            status: 'Approved',
            benefitDescription: 'Contribute to retirement, disability, and death benefits.',
        },
    ];

    const enrolledBenefits = {
        'John Doe': [
            { name: 'Life Insurance', description: 'Comprehensive life insurance plan.', requiresRequest: true },
            { name: 'Critical Illness Insurance', description: 'Coverage for critical illnesses.', requiresRequest: true },
            { name: 'Overtime Pay', description: 'Compensation for extra hours.', requiresRequest: false },
            { name: 'Meal and Transportation Allowance', description: 'Monthly meal and transportation allowance.', requiresRequest: false },
        ],
        'Jane Smith': [
            { name: 'Dental Plan', description: 'Full dental coverage.', requiresRequest: true },
            { name: 'Health Savings Account', description: 'Savings for medical expenses.', requiresRequest: true },
            { name: 'Holiday Pay', description: 'Additional pay for holidays.', requiresRequest: false },
        ],
    };

    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleViewBenefits = (employeeName) => setSelectedEmployee(employeeName);
    const closeBenefitsModal = () => setSelectedEmployee(null);

    const renderEmployeeRequests = requests.reduce((acc, req) => {
        if (!acc[req.employeeName]) {
            acc[req.employeeName] = { name: req.employeeName, benefits: [], statuses: new Set(), descriptions: [] };
        }
        acc[req.employeeName].benefits.push(req.benefitName);
        acc[req.employeeName].statuses.add(req.status);
        acc[req.employeeName].descriptions.push(req.benefitDescription);
        return acc;
    }, {});

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Benefit Requests</h2>
            <table className="table-auto w-full border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Employee</th>
                        <th className="px-4 py-2">Requested Benefits</th>
                        <th className="px-4 py-2">Descriptions</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(renderEmployeeRequests).map(employee => (
                        <tr key={employee.name}>
                            <td className="border px-4 py-2">{employee.name}</td>
                            <td className="border px-4 py-2">{employee.benefits.join(', ')}</td>
                            <td className="border px-4 py-2">{employee.descriptions.join(' & ')}</td>
                            <td className="border px-4 py-2">{Array.from(employee.statuses).join(', ')}</td>
                            <td className="border px-4 py-2">
                                <button className="btn btn-info mr-2" onClick={() => handleViewBenefits(employee.name)}>
                                    View Enrolled Benefits
                                </button>
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
        </div>
    );
};

export default EnrollmentSubmission;
