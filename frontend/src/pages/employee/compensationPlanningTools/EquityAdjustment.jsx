import React from 'react';

const EquityAdjustment = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Equity Adjustment</h2>
        <p>Enter the adjustment details:</p>
        <form>
          <div className="form-control">
            <label className="label" htmlFor="date">Date:</label>
            <input type="date" id="date" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="amount">Amount:</label>
            <input type="number" id="amount" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="description">Description:</label>
            <textarea id="description" className="textarea textarea-bordered w-full" />
          </div>
          <button className="btn btn-primary mt-4">Save Adjustment</button>
        </form>
      </div>
    </div>
  );
};

export default EquityAdjustment;
