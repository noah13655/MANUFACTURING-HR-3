import React, { useState } from "react";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { RiPassPendingLine } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { MdRemoveRedEye } from "react-icons/md";
import { IoCodeDownloadOutline } from "react-icons/io5";
import { CiTrash } from "react-icons/ci";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const ManagerDashboard = () => {
  const [payrollData] = useState([
    { employee: "John Doe", grossPay: "₱3000", netPay: "₱2500", deductions: "₱500", status: "Processed" },
    { employee: "Jane Smith", grossPay: "₱2800", netPay: "₱2400", deductions: "₱400", status: "Processed" },
    { employee: "Mark Johnson", grossPay: "₱3200", netPay: "₱2700", deductions: "₱500", status: "Pending" },
  ]);

  const [leaveRequests] = useState([
    { employee: "John Doe", type: "Sick Leave", duration: "3 Days", status: "Pending" },
    { employee: "Jane Smith", type: "Vacation Leave", duration: "5 Days", status: "Approved" },
    { employee: "Mark Johnson", type: "Sick Leave", duration: "2 Days", status: "Rejected" },
  ]);

  const data = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  ];

  return (
    <div className="bg-gray-200 text-black h-auto p-5">
      {/* Overview */}
      <p className="font-semibold">HR 3 Overview - Compensation and Benefits</p>

      {/* Compensation and Benefits Cards */}
      <div className="flex gap-4 p-4 overflow-x-auto flex-wrap">
        {/* Payroll Summary */}
        <div className="bg-white shadow-lg w-[280px] p-5 rounded-lg mt-3 transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-semibold text-sm">Payroll Summary</p>
            <HiOutlineCurrencyDollar className="text-gray-600 text-xl" />
          </div>
          <div className="flex gap-3 my-3">
            <p className="text-3xl font-bold">₱25,800</p>
            <p className="flex items-center gap-1 bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-semibold">
              <IoIosArrowUp className="text-green-700" /> 5.5%
            </p>
          </div>
          <div className="my-3">
            <p className="text-green-700 font-semibold">
              +₱1,400 <span className="text-gray-500">than last month</span>
            </p>
          </div>
        </div>

        {/* Incentives Overview */}
        <div className="bg-white shadow-lg w-[280px] p-5 rounded-lg mt-3 transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-semibold text-sm">Incentives Overview</p>
            <GrMoney className="text-gray-600 text-xl" />
          </div>
          <div className="flex gap-3 my-3">
            <p className="text-3xl font-bold">₱7,200</p>
            <p className="flex items-center gap-1 bg-red-100 text-red-700 rounded-full px-3 py-1 text-sm font-semibold">
              <IoIosArrowDown className="text-red-700" /> 1.5%
            </p>
          </div>
          <div className="my-3">
            <p className="text-red-700 font-semibold">
              -₱110 <span className="text-gray-500">than last month</span>
            </p>
          </div>
        </div>
        {/* Deductions Overview */}
        <div className="bg-white shadow-lg w-[280px] p-5 rounded-lg mt-3 transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-semibold text-sm">Deductions Overview</p>
            <GrMoney className="text-gray-600 text-xl" />
          </div>
          <div className="flex gap-3 my-3">
            <p className="text-3xl font-bold">₱5,200</p>
            <p className="flex items-center gap-1 bg-red-100 text-red-700 rounded-full px-3 py-1 text-sm font-semibold">
              <IoIosArrowDown className="text-red-700" /> 1.5%
            </p>
          </div>
          <div className="my-3">
            <p className="text-red-700 font-semibold">
              -₱110 <span className="text-gray-500">than last month</span>
            </p>
          </div>
        </div>

        {/* Benefits Enrollment */}
        <div className="bg-white shadow-lg w-[280px] p-5 rounded-lg mt-3 transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-semibold text-sm">Benefits Enrollment</p>
            <RiPassPendingLine className="text-gray-600 text-xl" />
          </div>
          <div className="flex gap-3 my-3">
            <p className="text-3xl font-bold">15 Pending</p>
            <p className="flex items-center gap-1 bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-semibold">
              <IoIosArrowUp className="text-green-700" /> 3 New
            </p>
          </div>
          <div className="my-3">
            <p className="text-gray-700 font-semibold">Enrollment for Q4</p>
          </div>
        </div>

        {/* Leave Requests Overview */}
        <div className="bg-white shadow-lg w-[280px] p-5 rounded-lg mt-3 transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-semibold text-sm">Leave Requests</p>
            <RiPassPendingLine className="text-gray-600 text-xl" />
          </div>
          <div className="flex gap-3 my-3">
            <p className="text-3xl font-bold">3 Pending</p>
            <p className="flex items-center gap-1 bg-red-100 text-red-700 rounded-full px-3 py-1 text-sm font-semibold">
              <IoIosArrowDown className="text-red-700" /> 1 New
            </p>
          </div>
          <div className="my-3">
            <p className="text-gray-700 font-semibold">Leave Requests for Review</p>
          </div>
        </div>
      </div>

      

      {/* Charts */}
      <div className="flex gap-4 p-4 overflow-x-auto justify-between">
        <div className="border bg-white/70 p-2 rounded-lg flex-shrink-0 md:flex-1 ">
          <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </div>

        <div className="border bg-white/70 p-2 rounded-lg flex-shrink-0 md:flex-1">
          <BarChart width={430} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>

      {/* Payroll Processing Table */}
      <div className="mt-5 rounded-lg bg-white w-[700px] p-4">
        <div className="flex justify-between">
          <p className="font-semibold text-black/90">Payroll Processing</p>
          <p className="flex gap-1 items-center p-1 rounded-lg bg-gray-200 cursor-pointer">
            <IoCodeDownloadOutline className="text-lg" />
            Download Report
          </p>
        </div>

        {/* Table Header */}
        <div className="flex justify-between mt-4 text-black/75">
          <p>Employee</p>
          <p>Gross Pay</p>
          <p>Net Pay</p>
          <p>Deductions</p>
          <p>Status</p>
          <p>Action</p>
        </div>
        <hr className="mt-2" />

        {/* Table Rows */}
        {payrollData.map((payroll, index) => (
          <div key={index} className="flex justify-between items-center my-4">
            <p>{payroll.employee}</p>
            <p>{payroll.grossPay}</p>
            <p>{payroll.netPay}</p>
            <p>{payroll.deductions}</p>
            <p>{payroll.status}</p>
            <p className="flex items-center gap-1">
              <MdRemoveRedEye className="text-gray-600" />
              <CiTrash className="text-red-600" />
            </p>
          </div>
        ))}
      </div>

      {/* Leave Requests Table */}
      <div className="mt-5 rounded-lg bg-white w-[700px] p-4">
        <div className="flex justify-between">
          <p className="font-semibold text-black/90">Leave Requests</p>
        </div>

        {/* Table Header */}
        <div className="flex justify-between mt-4 text-black/75">
          <p>Employee</p>
          <p>Type</p>
          <p>Duration</p>
          <p>Status</p>
        </div>
        <hr className="mt-2" />

        {/* Table Rows */}
        {leaveRequests.map((leave, index) => (
          <div key={index} className="flex justify-between items-center my-4">
            <p>{leave.employee}</p>
            <p>{leave.type}</p>
            <p>{leave.duration}</p>
            <p>{leave.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagerDashboard;
