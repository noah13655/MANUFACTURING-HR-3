import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { GiWallet, GiGears, GiChecklist } from 'react-icons/gi';
import { FaRegUser,FaDollarSign } from 'react-icons/fa';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosArrowDown, IoIosArrowUp, IoIosStats } from 'react-icons/io';

const ManagerSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsCollapsed(prev => {
      const newCollapseState = !prev;
      if (newCollapseState) {
        setOpenDropdown(null); 
      }
      return newCollapseState;
    });
  };

  const toggleDropdown = section => {
    setOpenDropdown(prev => (prev === section ? null : section));
  };

  return (
    <div
      className={`flex flex-col h-screen bg-white text-black px-4 py-4 border-r-2 sticky top-0 max-md:hidden transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-72 lg:w-60'
      }`}
      aria-label="Sidebar"
    >
      {/* Toggle Button */}
      <div className="flex justify-end">
        <button
          onClick={toggleSidebar}
          className={`mb-4 p-1 text-black border border-gray-300 rounded-md hover:bg-gray-200 transition duration-200 ${
            isCollapsed ? 'w-11' : 'w-11 '
          }`}
          aria-expanded={!isCollapsed}
          aria-label={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {isCollapsed ? '▶' : '◀'}
        </button>
      </div>

      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer mb-8 justify-center"
        aria-label="Dashboard Logo"
      >
        <Link to="/"><img src="" alt="Dashboard logo" className="w-10 h-10" /></Link>
        {!isCollapsed && <p className="text-xl font-bold">Dashboard</p>}
      </div>

      {/* Dashboard */}
      <div
        className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 transition-all duration-300 p-2 rounded-md mb-4 cursor-pointer"
        aria-label="Dashboard"
      >
        <MdDashboard className="w-5 h-5" />
        {!isCollapsed && <p className="text-sm font-semibold"><Link to="/">Dashboard</Link></p>}
      </div>

      {/* User Management */}
      <div className="mb-2">
        <div
          className="flex gap-2 items-center cursor-pointer text-sm hover:text-blue-500 transition duration-200"
          onClick={() => toggleDropdown('user')}
          aria-expanded={openDropdown === 'user'}
          aria-controls="user-dropdown"
          aria-label="User Management"
        >
          <FaRegUser className="w-5 h-5" />
          {!isCollapsed && <span>User Management</span>}
          {!isCollapsed && (
            <div className="ml-auto">
              {openDropdown === 'user' ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
            </div>
          )}
        </div>
        <ul
          id="user-dropdown"
          className={`pl-6 mt-1 space-y-1 overflow-hidden transition-max-height duration-500 ease-in-out ${
            openDropdown === 'user' ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <li><Link to="/user-list">User List</Link></li>
          <li><Link to="/attendance-info">Attendance info</Link></li>
        </ul>
      </div>

      {/* Payroll Processing */}
      <div className="mb-2">
        <div
          className="flex gap-2 items-center cursor-pointer text-sm hover:text-blue-500 transition duration-200"
          onClick={() => toggleDropdown('payroll')}
          aria-expanded={openDropdown === 'payroll'}
          aria-controls="payroll-dropdown"
          aria-label="Payroll Processing"
        >
          <GiWallet className="w-5 h-5" />
          {!isCollapsed && <span>Payroll Processing</span>}
          {!isCollapsed && (
            <div className="ml-auto">
              {openDropdown === 'payroll' ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
            </div>
          )}
        </div>
        <ul
          id="payroll-dropdown"
          className={`pl-6 mt-1 space-y-1 overflow-hidden transition-max-height duration-500 ease-in-out ${
            openDropdown === 'payroll' ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <li><Link to="/salary-computation">Salary Computation</Link></li>
          <li><Link to="/deductions-management">Deductions Management</Link></li>
          <li><Link to="/payroll-distribution">Payroll Distribution</Link></li>
          <li><Link to="/compliance-tracking">Compliance Tracking</Link></li>
        </ul>
      </div>

      {/* Benefits Administration */}
      <div className="mb-2">
        <div
          className="flex gap-2 items-center cursor-pointer text-sm hover:text-blue-500 transition duration-200"
          onClick={() => toggleDropdown('benefits')}
          aria-expanded={openDropdown === 'benefits'}
          aria-controls="benefits-dropdown"
          aria-label="Benefits Administration"
        >
          <GiGears className="w-5 h-5" />
          {!isCollapsed && <span>Benefits Administration</span>}
          {!isCollapsed && (
            <div className="ml-auto">
              {openDropdown === 'benefits' ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
            </div>
          )}
        </div>
        <ul
          id="benefits-dropdown"
          className={`pl-6 mt-1 space-y-1 overflow-hidden transition-max-height duration-500 ease-in-out ${
            openDropdown === 'benefits' ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <li><Link to="/benefits-overview">Benefits Overview</Link></li>
          <li><Link to="/health-benefits-management">Health Benefits Management</Link></li>
          <li><Link to="/retirement-plans">Retirement Plans</Link></li>
          <li><Link to="/leave-management">Leave Management</Link></li>
          <li><Link to="/flexible-benefits">Flexible Benefits</Link></li>
        </ul>
      </div>

      {/* Incentives Management */}
      <div className="mb-2">
        <div
          className="flex gap-2 items-center cursor-pointer text-sm hover:text-blue-500 transition duration-200"
          onClick={() => toggleDropdown('incentives')}
          aria-expanded={openDropdown === 'incentives'}
          aria-controls="incentives-dropdown"
          aria-label="Incentives Management"
        >
          <GiChecklist className="w-5 h-5" />
          {!isCollapsed && <span>Incentives Management</span>}
          {!isCollapsed && (
            <div className="ml-auto">
              {openDropdown === 'incentives' ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
            </div>
          )}
        </div>
        <ul
          id="incentives-dropdown"
          className={`pl-6 mt-1 space-y-1 overflow-hidden transition-max-height duration-500 ease-in-out ${
            openDropdown === 'incentives' ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <li><Link to="/performance-based-bonuses">Performance-Based Bonuses</Link></li>
          <li><Link to="/recognition-programs">Recognition Programs</Link></li>
          <li><Link to="/sales-commissions">Sales Commissions</Link></li>
          <li><Link to="/profit-sharing">Profit Sharing</Link></li>
        </ul>
      </div>

      {/* Compensation Planning */}
      <div className="mb-2">
        <div
          className="flex gap-2 items-center cursor-pointer text-sm hover:text-blue-500 transition duration-200"
          onClick={() => toggleDropdown('compensation')}
          aria-expanded={openDropdown === 'compensation'}
          aria-controls="compensation-dropdown"
          aria-label="Compensation Planning"
        >
          <GiChecklist className="w-5 h-5" />
          {!isCollapsed && <span>Compensation Planning</span>}
          {!isCollapsed && (
            <div className="ml-auto">
              {openDropdown === 'compensation' ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
            </div>
          )}
        </div>
        <ul
          id="compensation-dropdown"
          className={`pl-6 mt-1 space-y-1 overflow-hidden transition-max-height duration-500 ease-in-out ${
            openDropdown === 'compensation' ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <li><Link to="/salary-planning">Salary Planning</Link></li>
          <li><Link to="/compensation-analysis">Compensation Analysis</Link></li>
          <li><Link to="/equity-adjustments">Equity Adjustments</Link></li>
          <li><Link to="/total-rewards-management">Total Rewards Management</Link></li>
        </ul>
      </div>

      {/* Compliance Management */}
      <div className="mb-2">
        <div
          className="flex gap-2 items-center cursor-pointer text-sm hover:text-blue-500 transition duration-200"
          onClick={() => toggleDropdown('compliance')}
          aria-expanded={openDropdown === 'compliance'}
          aria-controls="compliance-dropdown"
          aria-label="Compliance Management"
        >
          <BsFillShieldLockFill className="w-5 h-5" />
          {!isCollapsed && <span>Compliance Management</span>}
          {!isCollapsed && (
            <div className="ml-auto">
              {openDropdown === 'compliance' ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
            </div>
          )}
        </div>
        <ul
          id="compliance-dropdown"
          className={`pl-6 mt-1 space-y-1 overflow-hidden transition-max-height duration-500 ease-in-out ${
            openDropdown === 'compliance' ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <li><Link to="/labor-laws">Labor Laws</Link></li>
          <li><Link to="/regulations">Regulations</Link></li>
        </ul>
      </div>

      {/* Analytics */}
      <div className="mb-2">
        <div
          className="flex gap-2 items-center cursor-pointer text-sm hover:text-blue-500 transition duration-200"
          onClick={() => toggleDropdown('analytics')}
          aria-expanded={openDropdown === 'analytics'}
          aria-controls="analytics-dropdown"
          aria-label="Predictive and Behavioral Analytics"
        >
          <IoIosStats className="w-5 h-5" />
          {!isCollapsed && <span>Predictive and Behavioral Analytics</span>}
          {!isCollapsed && (
            <div className="ml-auto">
              {openDropdown === 'analytics' ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
            </div>
          )}
        </div>
        <ul
          id="analytics-dropdown"
          className={`pl-6 mt-1 space-y-1 overflow-hidden transition-max-height duration-500 ease-in-out ${
            openDropdown === 'analytics' ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <li><Link to="/predictive-turnover-analysis">Predictive Turnover Analysis</Link></li>
          <li><Link to="/employee-performance-forecasting">Employee Performance Forecasting</Link></li>
          <li><Link to="/benefits-utilization-analysis">Benefits Utilization Analysis</Link></li>
          <li><Link to="/compensation">Compensation</Link></li>
        </ul>
      </div>

       {/* Finance */} 
   <div className="mb-2">
    <div
    className="flex gap-2 items-center cursor-pointer text-sm hover:text-blue-500 transition duration-200"
    onClick={() => toggleDropdown('finance')}
    aria-expanded={openDropdown === 'finance'}
    aria-controls="user-dropdown"
    aria-label="Finance"
  >
    <FaDollarSign className="w-5 h-5" /> {/* Updated icon */}
    {!isCollapsed && <span>Finance</span>}
    {!isCollapsed && (
      <div className="ml-auto">
        {openDropdown === 'finance' ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
      </div>
    )}
  </div>
  
        <ul
          id="user-dropdown"
          className={`pl-6 mt-1 space-y-1 overflow-hidden transition-max-height duration-500 ease-in-out ${
            openDropdown === 'finance' ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <li><Link to="/request-budget">Request Budget</Link></li>
        </ul>
      </div>

      {/* Reports */}
      <div className="mb-2">
        <Link
          to="/reports"
          className="flex gap-2 items-center cursor-pointer text-sm hover:text-blue-500 transition duration-200"
          aria-label="Reports"
        >
          <AiOutlineFileSearch className="w-5 h-5" />
          {!isCollapsed && <span>Reports</span>}
        </Link>
      </div>
    </div>
  );
};

export default ManagerSidebar;
