import React, { useState } from 'react';

const employeesData = [
    {
        id: '1',
        name: 'John Doe',
        benefits: [
            {
                planName: 'PhilHealth',
                type: 'Health Insurance',
                deduction: 300,
                description: 'Government-mandated health insurance program.',
                contributionHistory: [
                    { date: '2024-01-01', month: 'January', amount: 300 },
                    { date: '2024-02-01', month: 'February', amount: 300 },
                    { date: '2024-03-01', month: 'March', amount: 300 },
                    { date: '2024-04-01', month: 'April', amount: 300 },
                    { date: '2024-05-01', month: 'May', amount: 300 },
                    { date: '2024-06-01', month: 'June', amount: 300 },
                    { date: '2024-07-01', month: 'July', amount: 300 },
                    { date: '2024-08-01', month: 'August', amount: 300 },
                    { date: '2024-09-01', month: 'September', amount: 300 },
                    { date: '2024-10-01', month: 'October', amount: 300 },
                    { date: '2024-11-01', month: 'November', amount: 300 },
                    { date: '2024-12-01', month: 'December', amount: 300 },
                ],
            },
            {
                planName: 'Health Insurance',
                type: 'Health Insurance',
                deduction: 500,
                description: 'Private health insurance.',
                contributionHistory: [
                    { date: '2024-01-01', month: 'January', amount: 500 },
                    { date: '2024-02-01', month: 'February', amount: 500 },
                    { date: '2024-03-01', month: 'March', amount: 500 },
                    { date: '2024-04-01', month: 'April', amount: 500 },
                    { date: '2024-05-01', month: 'May', amount: 500 },
                    { date: '2024-06-01', month: 'June', amount: 500 },
                    { date: '2024-07-01', month: 'July', amount: 500 },
                    { date: '2024-08-01', month: 'August', amount: 500 },
                    { date: '2024-09-01', month: 'September', amount: 500 },
                    { date: '2024-10-01', month: 'October', amount: 500 },
                    { date: '2024-11-01', month: 'November', amount: 500 },
                    { date: '2024-12-01', month: 'December', amount: 500 },
                ],
            },
            {
                planName: 'SSS',
                type: 'Retirement Benefits',
                deduction: 500,
                description: 'Withhold and contribute for retirement, disability, and death benefits.',
                contributionHistory: [
                    { date: '2024-01-01', month: 'January', amount: 500 },
                    { date: '2024-02-01', month: 'February', amount: 500 },
                    { date: '2024-03-01', month: 'March', amount: 500 },
                    { date: '2024-04-01', month: 'April', amount: 500 },
                    { date: '2024-05-01', month: 'May', amount: 500 },
                    { date: '2024-06-01', month: 'June', amount: 500 },
                    { date: '2024-07-01', month: 'July', amount: 500 },
                    { date: '2024-08-01', month: 'August', amount: 500 },
                    { date: '2024-09-01', month: 'September', amount: 500 },
                    { date: '2024-10-01', month: 'October', amount: 500 },
                    { date: '2024-11-01', month: 'November', amount: 500 },
                    { date: '2024-12-01', month: 'December', amount: 500 },
                ],
            },
        ],
    },
    {
        id: '2',
        name: 'Jane Smith',
        benefits: [
            {
                planName: 'PhilHealth',
                type: 'Health Insurance',
                deduction: 250,
                description: 'Government-mandated health insurance program.',
                contributionHistory: [
                    { date: '2024-01-01', month: 'January', amount: 250 },
                    { date: '2024-02-01', month: 'February', amount: 250 },
                    { date: '2024-03-01', month: 'March', amount: 250 },
                    { date: '2024-04-01', month: 'April', amount: 250 },
                    { date: '2024-05-01', month: 'May', amount: 250 },
                    { date: '2024-06-01', month: 'June', amount: 250 },
                    { date: '2024-07-01', month: 'July', amount: 250 },
                    { date: '2024-08-01', month: 'August', amount: 250 },
                    { date: '2024-09-01', month: 'September', amount: 250 },
                    { date: '2024-10-01', month: 'October', amount: 250 },
                    { date: '2024-11-01', month: 'November', amount: 250 },
                    { date: '2024-12-01', month: 'December', amount: 250 },
                ],
            },
            {
                planName: 'Health Insurance',
                type: 'Health Insurance',
                deduction: 400,
                description: 'Private health insurance.',
                contributionHistory: [
                    { date: '2024-01-01', month: 'January', amount: 400 },
                    { date: '2024-02-01', month: 'February', amount: 400 },
                    { date: '2024-03-01', month: 'March', amount: 400 },
                    { date: '2024-04-01', month: 'April', amount: 400 },
                    { date: '2024-05-01', month: 'May', amount: 400 },
                    { date: '2024-06-01', month: 'June', amount: 400 },
                    { date: '2024-07-01', month: 'July', amount: 400 },
                    { date: '2024-08-01', month: 'August', amount: 400 },
                    { date: '2024-09-01', month: 'September', amount: 400 },
                    { date: '2024-10-01', month: 'October', amount: 400 },
                    { date: '2024-11-01', month: 'November', amount: 400 },
                    { date: '2024-12-01', month: 'December', amount: 400 },
                ],
            },
        ],
    },
    {
        id: '3',
        name: 'Mark Johnson',
        benefits: [
            {
                type: 'Health Insurance',
                planName: 'Pag-IBIG',
                deduction: 350,
                description: 'Government-mandated health insurance program.',
                contributionHistory: [
                    { date: '2024-01-01', month: 'January', amount: 350 },
                    { date: '2024-02-01', month: 'February', amount: 350 },
                    { date: '2024-03-01', month: 'March', amount: 350 },
                    { date: '2024-04-01', month: 'April', amount: 350 },
                    { date: '2024-05-01', month: 'May', amount: 350 },
                    { date: '2024-06-01', month: 'June', amount: 350 },
                    { date: '2024-07-01', month: 'July', amount: 350 },
                    { date: '2024-08-01', month: 'August', amount: 350 },
                    { date: '2024-09-01', month: 'September', amount: 350 },
                    { date: '2024-10-01', month: 'October', amount: 350 },
                    { date: '2024-11-01', month: 'November', amount: 350 },
                    { date: '2024-12-01', month: 'December', amount: 350 },
                ],
            },
            {
                type: 'Retirement Benefits',
                planName: 'GSIS',
                deduction: 700,
                description: 'Withhold and contribute for retirement, disability, and death benefits.',
                contributionHistory: [
                    { date: '2024-01-01', month: 'January', amount: 700 },
                    { date: '2024-02-01', month: 'February', amount: 700 },
                    { date: '2024-03-01', month: 'March', amount: 700 },
                    { date: '2024-04-01', month: 'April', amount: 700 },
                    { date: '2024-05-01', month: 'May', amount: 700 },
                    { date: '2024-06-01', month: 'June', amount: 700 },
                    { date: '2024-07-01', month: 'July', amount: 700 },
                    { date: '2024-08-01', month: 'August', amount: 700 },
                    { date: '2024-09-01', month: 'September', amount: 700 },
                    { date: '2024-10-01', month: 'October', amount: 700 },
                    { date: '2024-11-01', month: 'November', amount: 700 },
                    { date: '2024-12-01', month: 'December', amount: 700 },
                ],
            },
        ],
    },
];

const Deductions = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentContributions, setCurrentContributions] = useState([]);

    const calculateTotalDeductions = (benefits) => {
        return benefits.reduce((total, benefit) => total + benefit.deduction, 0);
    };

    const openModal = (contributionHistory) => {
        setCurrentContributions(contributionHistory);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentContributions([]);
    };

    const uniqueEmployees = [...new Set(employeesData.map(employee => employee.name))];

    return (
        <div className="">
            <h2 className="text-2xl font-bold mb-6 text-center">Deductions</h2>

            <table className="table w-full ">
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Plan Name</th>
                        <th>Benefit Type</th>
                        <th>Deduction</th>
                        <th>Description</th>
                        <th>Contributions</th>
                        <th>Total Deductions</th>
                    </tr>
                </thead>
                <tbody>
                    {uniqueEmployees.map(employeeName => (
                        employeesData
                            .filter(employee => employee.name === employeeName)
                            .map(employee => (
                                employee.benefits.map((benefit, index) => (
                                    <tr key={index}>
                                        {index === 0 ? (
                                            <td rowSpan={employee.benefits.length}>{employee.name}</td>
                                        ) : null}
                                        <td>{benefit.planName}</td>
                                        <td>{benefit.type}</td>
                                        <td>{benefit.deduction}</td>
                                        <td>{benefit.description}</td>
                                        <td>
                                            <button 
                                                onClick={() => openModal(benefit.contributionHistory)}
                                                className="btn btn-link"
                                            >
                                                View Contributions
                                            </button>
                                        </td>
                                        <td>{calculateTotalDeductions(employee.benefits)}</td>
                                    </tr>
                                ))
                            ))
                    ))}
                </tbody>
            </table>

            {/* Modal to display contribution history */}
            {modalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h2 className="font-bold text-lg">Contribution History</h2>
                        <ul className="py-4">
                            {currentContributions.map((contribution, index) => (
                                <li key={index}>
                                    {contribution.month}: {contribution.amount}
                                </li>
                            ))}
                        </ul>
                        <div className="modal-action">
                            <button className="btn" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Deductions;
