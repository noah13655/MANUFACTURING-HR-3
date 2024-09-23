import React from 'react';

const RequestBudget = () => {
  return (
    <div>
      <h1>Request Budget for Finance</h1>
      <form>
        <div>
          <label htmlFor="budgetType">Budget Type</label>
          <select id="budgetType">
            <option value="">Select Budget Type</option>
            <option value="Capital Expenditure">Capital Expenditure</option>
            <option value="Operating Expenditure">Operating Expenditure</option>
            <option value="Research and Development">Research and Development</option>
          </select>
        </div>
        <div>
          <label htmlFor="budgetAmount">Budget Amount</label>
          <input id="budgetAmount" type="number" />
        </div>
        <div>
          <label htmlFor="budgetDescription">Budget Description</label>
          <textarea id="budgetDescription"></textarea>
        </div>
        <div>
          <label htmlFor="employeeName">Employee Name</label>
          <input id="employeeName" type="text" />
        </div>
        <div>
          <label htmlFor="employeeDepartment">Employee Department</label>
          <select id="employeeDepartment">
            <option value="">Select Department</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default RequestBudget;
