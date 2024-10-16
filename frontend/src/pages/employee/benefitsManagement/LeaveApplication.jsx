import React, { useEffect } from 'react'

const LeaveApplication = () => {
  useEffect(()=> {
    document.title = "Leave Application";
  });
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Leave Request</h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="form-control">
            <label className="label" htmlFor="leave-type">Leave Type</label>
            <select id="leave-type" className="select select-bordered w-full">
              <option value="">Select an option</option>
              <option value="vacation">Vacation</option>
              <option value="sick-leave">Sick Leave</option>
              <option value="holiday">Holiday</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label" htmlFor="start-date">Start Date</label>
            <input type="date" id="start-date" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="end-date">End Date</label>
            <input type="date" id="end-date" className="input input-bordered w-full" />
          </div>
        </div>
        <div className="form-control">
          <label className="label" htmlFor="leave-reason">Leave Reason</label>
          <textarea id="leave-reason" className="textarea textarea-bordered w-full" />
        </div>
        <button className="btn btn-primary mt-6">Submit Request</button>
      </form>
    </div>
  );
};
export default LeaveApplication