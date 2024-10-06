import React from 'react';

const DirectDeposit = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Direct Deposit</h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="form-control">
            <label className="label" htmlFor="account-type">Account Type</label>
            <select id="account-type" className="select select-bordered w-full">
              <option value="">Select an option</option>
              <option value="checking">Checking</option>
              <option value="savings">Savings</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label" htmlFor="account-number">Account Number</label>
            <input type="text" id="account-number" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="routing-number">Routing Number</label>
            <input type="text" id="routing-number" className="input input-bordered w-full" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4 mt-6">Deposit Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="form-control">
            <label className="label" htmlFor="deposit-amount">Deposit Amount</label>
            <input type="number" id="deposit-amount" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="deposit-frequency">Deposit Frequency</label>
            <select id="deposit-frequency" className="select select-bordered w-full">
              <option value="">Select an option</option>
              <option value="weekly">Weekly</option>
              <option value="bi-weekly">Bi-Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary mt-6">Save Changes</button>
      </form>
    </div>
  );
};

export default DirectDeposit;
