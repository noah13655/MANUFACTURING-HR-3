import React from 'react';

const UpdatePersonalInformation = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Update Personal Information</h2>
        <p>Enter your updated personal information:</p>
        <form>
          <div className="form-control">
            <label className="label" htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">Email:</label>
            <input type="email" id="email" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="address">Address:</label>
            <textarea id="address" className="textarea textarea-bordered w-full" />
          </div>
          <button type="submit" className="btn btn-primary mt-4">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePersonalInformation;
