import React, { useState } from 'react';

const RequestBudget = () => {
  const [budgetType, setBudgetType] = useState('');
  const [budgetAmount, setBudgetAmount] = useState('');
  const [budgetDescription, setBudgetDescription] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [employeeDepartment, setEmployeeDepartment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBudgetTypeChange = (e) => {
    setBudgetType(e.target.value);
  };

  const handleBudgetAmountChange = (e) => {
    setBudgetAmount(e.target.value);
  };

  const handleBudgetDescriptionChange = (e) => {
    setBudgetDescription(e.target.value);
  };

  const handleEmployeeNameChange = (e) => {
    setEmployeeName(e.target.value);
  };

  const handleEmployeeDepartmentChange = (e) => {
    setEmployeeDepartment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Request Budget for Finance</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <label className="text-lg font-bold text-gray-800 mb-2" htmlFor="budgetType">
              Budget Type
            </label>
            <select
              className="w-full p-2 rounded-lg border border-gray-300"
              id="budgetType"
              value={budgetType}
              onChange={handleBudgetTypeChange}
            >
              <option value="">Select Budget Type</option>
              <option value="Capital Expenditure">Capital Expenditure</option>
              <option value="Operating Expenditure">Operating Expenditure</option>
              <option value="Research and Development">Research and Development</option>
            </select>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <label className="text-lg font-bold text-gray-800 mb-2" htmlFor="budgetAmount">
              Budget Amount
            </label>
            <input
              className="w-full p-2 rounded-lg border border-gray-300"
              id="budgetAmount"
              type="number"
              value={budgetAmount}
              onChange={handleBudgetAmountChange}
            />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <label className="text-lg font-bold text-gray-800 mb-2" htmlFor="budgetDescription">
              Budget Description
            </label>
            <textarea
              className="w-full p-2 rounded-lg border border-gray-300"
              id="budgetDescription"
              value={budgetDescription}
              onChange={handleBudgetDescriptionChange}
            />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <label className="text-lg font-bold text-gray-800 mb-2" htmlFor="employeeName">
              Employee Name
            </label>
            <input
              className="w-full p-2 rounded-lg border border-gray-300"
              id="employeeName"
              type="text"
              value={employeeName}
              onChange={handleEmployeeNameChange}
            />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <label className="text-lg font-bold text-gray-800 mb-2" htmlFor="employeeDepartment">
              Employee Department
            </label>
            <select
              className="w-full p-2 rounded-lg border border-gray-300"
              id="employeeDepartment"
              value={employeeDepartment}
              onChange={handleEmployeeDepartmentChange}
            >
              <option value="">Select Department</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit Request
        </button>
        {isSubmitted && (
          <p className="text-gray-600 mt-2">Budget request submitted successfully!</p>
        )}
      </form>
    </div>
  );
};

export default RequestBudget;
