import React from "react";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { RiPassPendingLine } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const ManagerDashboard = () => {
  const payrollData = [
    { employee: 'Alice', grossPay: '$3000', netPay: '$2800', deductions: '$200', status: 'Processed' },
    { employee: 'Bob', grossPay: '$4000', netPay: '$3800', deductions: '$200', status: 'Pending' },
  ];

  const leaveRequests = [
    { employee: 'Charlie', type: 'Sick Leave', duration: '3 days', status: 'Approved' },
    { employee: 'Diana', type: 'Vacation', duration: '5 days', status: 'Pending' },
  ];

  return (
    <div className="p-2 sm:p-4">
      <p className="font-semibold text-xl">HR 3 Overview - Compensation and Benefits</p>

      {/* Compensation and Benefits Cards */}
      <div className="flex flex-wrap justify-center gap-4 p-2">
        {/* Payroll Summary */}
        <div className="bg-white shadow-lg w-full sm:w-[240px] p-4 rounded-lg mt-3 transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-semibold text-sm">Payroll Summary</p>
            <HiOutlineCurrencyDollar className="text-gray-600 text-xl" />
          </div>
          <div className="flex gap-2 my-2">
            <p className="text-2xl font-bold">₱25,800</p>
            <p className="flex items-center gap-1 bg-green-100 text-green-700 rounded-full px-2 py-1 text-xs font-semibold">
              <IoIosArrowUp className="text-green-700" /> 5.5%
            </p>
          </div>
          <div className="my-2">
            <p className="text-green-700 font-semibold">
              +₱1,400 <span className="text-gray-500">than last month</span>
            </p>
          </div>
        </div>

        {/* Incentives Overview */}
        <div className="bg-white shadow-lg w-full sm:w-[240px] p-4 rounded-lg mt-3 transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-semibold text-sm">Incentives Overview</p>
            <GrMoney className="text-gray-600 text-xl" />
          </div>
          <div className="flex gap-2 my-2">
            <p className="text-2xl font-bold">₱7,200</p>
            <p className="flex items-center gap-1 bg-red-100 text-red-700 rounded-full px-2 py-1 text-xs font-semibold">
              <IoIosArrowDown className="text-red-700" /> 1.5%
            </p>
          </div>
          <div className="my-2">
            <p className="text-red-700 font-semibold">
              -₱110 <span className="text-gray-500">than last month</span>
            </p>
          </div>
        </div>
        
        {/* Deductions Overview */}
        <div className="bg-white shadow-lg w-full sm:w-[240px] p-4 rounded-lg mt-3 transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-semibold text-sm">Deductions Overview</p>
            <GrMoney className="text-gray-600 text-xl" />
          </div>
          <div className="flex gap-2 my-2">
            <p className="text-2xl font-bold">₱5,200</p>
            <p className="flex items-center gap-1 bg-red-100 text-red-700 rounded-full px-2 py-1 text-xs font-semibold">
              <IoIosArrowDown className="text-red-700" /> 1.5%
            </p>
          </div>
          <div className="my-2">
            <p className="text-red-700 font-semibold">
              -₱110 <span className="text-gray-500">than last month</span>
            </p>
          </div>
        </div>

        {/* Benefits Enrollment */}
        <div className="bg-white shadow-lg w-full sm:w-[240px] p-4 rounded-lg mt-3 transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-semibold text-sm">Benefits Enrollment</p>
            <RiPassPendingLine className="text-gray-600 text-xl" />
          </div>
          <div className="flex gap-2 my-2">
            <p className="text-2xl font-bold">15 Pending</p>
            <p className="flex items-center gap-1 bg-green-100 text-green-700 rounded-full px-2 py-1 text-xs font-semibold">
              <IoIosArrowUp className="text-green-700" /> 3 New
            </p>
          </div>
          <div className="my-2">
            <p className="text-gray-700 font-semibold">Enrollment for Q4</p>
          </div>
        </div>

        {/* Leave Requests Overview */}
        <div className="bg-white shadow-lg w-full sm:w-[240px] p-4 rounded-lg mt-3 transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-semibold text-sm">Leave Requests</p>
            <RiPassPendingLine className="text-gray-600 text-xl" />
          </div>
          <div className="flex gap-2 my-2">
            <p className="text-2xl font-bold">3 Pending</p>
            <p className="flex items-center gap-1 bg-red-100 text-red-700 rounded-full px-2 py-1 text-xs font-semibold">
              <IoIosArrowDown className="text-red-700" /> 1 New
            </p>
          </div>
          <div className="my-2">
            <p className="text-gray-700 font-semibold">Leave Requests for Review</p>
          </div>
        </div>
      </div>

      {/* Payroll Processing Area Chart */}
      <div className="mt-4 rounded-lg bg-white p-2 sm:p-3">
        <p className="font-semibold text-lg">Payroll Overview</p>
        <AreaChart width={300} height={150} data={payrollData}>
          <Area type="monotone" dataKey="grossPay" stroke="#8884d8" fill="#8884d8" />
          <XAxis dataKey="employee" />
          <YAxis />
          <Tooltip />
        </AreaChart>
      </div>

      {/* Charts */}
      <div className="flex flex-wrap gap-4 p-2 justify-center">
        <div className="border bg-white/70 p-2 rounded-lg flex-shrink-0 md:flex-1 max-w-xs">
          <AreaChart
            width={300}
            height={150}
            data={payrollData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="employee" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="grossPay" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="netPay" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </div>

        <div className="border bg-white/70 p-2 rounded-lg flex-shrink-0 md:flex-1 max-w-xs">
          <BarChart width={300} height={150} data={payrollData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="employee" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="grossPay" fill="#8884d8" />
            <Bar dataKey="netPay" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>

      {/* Payroll Processing Table */}
      <div className="mt-4 rounded-lg bg-white p-2 sm:p-3">
        <p className="font-semibold text-lg">Payroll Processing</p>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Employee</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Gross Pay</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Net Pay</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Deductions</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {payrollData.map((payroll, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 text-sm text-gray-700">{payroll.employee}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{payroll.grossPay}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{payroll.netPay}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{payroll.deductions}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{payroll.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Leave Requests Table */}
      <div className="mt-4 rounded-lg bg-white p-2 sm:p-3">
        <p className="font-semibold text-lg">Leave Requests</p>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Employee</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Type</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Duration</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((request, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 text-sm text-gray-700">{request.employee}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{request.type}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{request.duration}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{request.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerDashboard;
