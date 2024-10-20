import React, { useState, useEffect } from 'react';

const initialEmployees = [
    { id: 1, name: "John Lloyd", bonuses: 500, commissions: 300, approvedIncentives: 200, date: '2024-09-01' },
    { id: 2, name: "Oliver", bonuses: 400, commissions: 350, approvedIncentives: 150, date: '2024-09-15' },
    { id: 3, name: "Abby", bonuses: 600, commissions: 450, approvedIncentives: 250, date: '2024-09-20' },
];

const TotalRewards = () => {
    const [employees, setEmployees] = useState(initialEmployees);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [filteredEmployees, setFilteredEmployees] = useState(employees);

    useEffect(() => {
        const filterByDate = () => {
            if (startDate && endDate) {
                const filtered = employees.filter(employee => {
                    const employeeDate = new Date(employee.date);
                    return employeeDate >= new Date(startDate) && employeeDate <= new Date(endDate);
                });
                setFilteredEmployees(filtered);
            } else {
                setFilteredEmployees(employees);
            }
        };
        filterByDate();
    }, [startDate, endDate, employees]);

    useEffect(() => {
        document.title = 'Total Rewards';
      }, []); 
    return (
        <div className="relative max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
            <h1 className="text-center text-3xl font-bold mb-4">Total Rewards Overview</h1>
            
            <div className="mb-4 flex items-center justify-center">
                <label className="mr-2">Start Date:</label>
                <input 
                    type="date" 
                    value={startDate} 
                    onChange={(e) => setStartDate(e.target.value)} 
                    className="input input-bordered w-32 mr-4"
                />
                <label className="mx-2">End Date:</label>
                <input 
                    type="date" 
                    value={endDate} 
                    onChange={(e) => setEndDate(e.target.value)} 
                    className="input input-bordered w-32"
                />
            </div>

            <h2 className="text-xl text-primary mb-2">Employee Rewards Details</h2>
            <table className="table w-full">
                <thead>
                    <tr className="bg-primary text-white">
                        <th className="p-4">Employee Name</th>
                        <th className="p-4">Bonuses</th>
                        <th className="p-4">Commissions</th>
                        <th className="p-4">Approved Incentives</th>
                        <th className="p-4">Total Rewards</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmployees.map(employee => {
                        const totalRewards = employee.bonuses + employee.commissions + employee.approvedIncentives;
                        return (
                            <tr key={employee.id} className="hover:bg-neutral hover:text-white">
                                <td className="p-4">{employee.name}</td>
                                <td className="p-4">₱{employee.bonuses}</td>
                                <td className="p-4">₱{employee.commissions}</td>
                                <td className="p-4">₱{employee.approvedIncentives}</td>
                                <td className="p-4">₱{totalRewards}</td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr className="bg-gray-200 font-bold">
                        <td className="p-4">Total</td>
                        <td className="p-4">₱{filteredEmployees.reduce((acc, emp) => acc + emp.bonuses, 0)}</td>
                        <td className="p-4">₱{filteredEmployees.reduce((acc, emp) => acc + emp.commissions, 0)}</td>
                        <td className="p-4">₱{filteredEmployees.reduce((acc, emp) => acc + emp.approvedIncentives, 0)}</td>
                        <td className="p-4">₱{filteredEmployees.reduce((acc, emp) => acc + (emp.bonuses + emp.commissions + emp.approvedIncentives), 0)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default TotalRewards;
