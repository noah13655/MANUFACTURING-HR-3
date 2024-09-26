import React, { useState } from 'react';

const ManagerDashboard = () => {
    const [selectedSection, setSelectedSection] = useState('overview');

    // Sample data
    const benefitsOverview = [
        { name: 'Health Insurance', description: 'Comprehensive health coverage.', requiresRequest: 'No' },
        { name: 'Overtime Pay', description: 'Compensation for extra hours worked.', requiresRequest: 'No' },
        { name: 'Retirement Savings Plan', description: 'Plan to save for retirement.', requiresRequest: 'Yes' },
    ];

    const enrollmentSubmissions = [
        { employeeName: 'John Doe', benefitName: 'Retirement Savings Plan', status: 'Pending' },
        { employeeName: 'Jane Smith', benefitName: 'Health Insurance', status: 'Approved' },
    ];

    const deductions = [
        { employeeName: 'John Doe', benefitType: 'PhilHealth', deductionAmount: '₱300' },
        { employeeName: 'Jane Smith', benefitType: 'Health Insurance', deductionAmount: '₱500' },
    ];

    const retirementPlans = [
        { employeeName: 'John Doe', planType: '401(k)', contributionAmount: '₱2,000' },
        { employeeName: 'Jane Smith', planType: 'Pension Plan', contributionAmount: '₱1,500' },
    ];

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Manager Dashboard</h1>
            <div className="flex space-x-4 mb-4">
                <button onClick={() => setSelectedSection('overview')} className="btn btn-secondary">Overview</button>
                <button onClick={() => setSelectedSection('enrollment')} className="btn btn-secondary">Enrollment Submissions</button>
                <button onClick={() => setSelectedSection('deductions')} className="btn btn-secondary">Deductions</button>
                <button onClick={() => setSelectedSection('retirement')} className="btn btn-secondary">Retirement Plans</button>
            </div>

            {/* Overview Section */}
            {selectedSection === 'overview' && (
                <div>
                    <h2 className="text-2xl font-bold mb-2">Benefits Overview</h2>
                    <table className="table-auto w-full border border-gray-300">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Benefit Name</th>
                                <th className="px-4 py-2">Description</th>
                                <th className="px-4 py-2">Requires Request</th>
                            </tr>
                        </thead>
                        <tbody>
                            {benefitsOverview.map((benefit, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{benefit.name}</td>
                                    <td className="border px-4 py-2">{benefit.description}</td>
                                    <td className="border px-4 py-2">{benefit.requiresRequest}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Enrollment Submissions Section */}
            {selectedSection === 'enrollment' && (
                <div>
                    <h2 className="text-2xl font-bold mb-2">Enrollment Submissions</h2>
                    <table className="table-auto w-full border border-gray-300">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Employee Name</th>
                                <th className="px-4 py-2">Benefit Name</th>
                                <th className="px-4 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enrollmentSubmissions.map((submission, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{submission.employeeName}</td>
                                    <td className="border px-4 py-2">{submission.benefitName}</td>
                                    <td className="border px-4 py-2">{submission.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Deductions Section */}
            {selectedSection === 'deductions' && (
                <div>
                    <h2 className="text-2xl font-bold mb-2">Deductions</h2>
                    <table className="table-auto w-full border border-gray-300">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Employee Name</th>
                                <th className="px-4 py-2">Benefit Type</th>
                                <th className="px-4 py-2">Deduction Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {deductions.map((deduction, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{deduction.employeeName}</td>
                                    <td className="border px-4 py-2">{deduction.benefitType}</td>
                                    <td className="border px-4 py-2">{deduction.deductionAmount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Retirement Plans Section */}
            {selectedSection === 'retirement' && (
                <div>
                    <h2 className="text-2xl font-bold mb-2">Retirement Plans</h2>
                    <table className="table-auto w-full border border-gray-300">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Employee Name</th>
                                <th className="px-4 py-2">Plan Type</th>
                                <th className="px-4 py-2">Contribution Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {retirementPlans.map((plan, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{plan.employeeName}</td>
                                    <td className="border px-4 py-2">{plan.planType}</td>
                                    <td className="border px-4 py-2">{plan.contributionAmount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ManagerDashboard;
