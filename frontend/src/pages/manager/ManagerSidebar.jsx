import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { GiWallet, GiGears, GiChecklist } from 'react-icons/gi';
import { FaRegUser } from 'react-icons/fa';
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
        isCollapsed ? 'w-20' : 'w-72 lg:w-80'
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
        {!isCollapsed && <p className="text-xl font-bold">Manager Dashboard</p>}
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
          <li><Link to="/roles">Roles</Link></li>
        </ul>
      </div>

      {/* Payroll Management */}
      <div className="mb-2">
        <div
          className="flex gap-2 items-center cursor-pointer text-sm hover:text-blue-500 transition duration-200"
          onClick={() => toggleDropdown('payroll')}
          aria-expanded={openDropdown === 'payroll'}
          aria-controls="payroll-dropdown"
          aria-label="Payroll Management"
        >
          <GiWallet className="w-5 h-5" />
          {!isCollapsed && <span>Payroll Management</span>}
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
          <li><Link to="/payroll-overview">Employee Payroll Overview</Link></li>
          <li><Link to="/salary-adjustment">Salary Adjustments</Link></li>
          <li><Link to="/overtime">Overtime Management</Link></li>
          <li><Link to="/tax-calculations">Tax Calculations</Link></li>
        </ul>
      </div>

      {/* Benefits Management */}
      <div className="mb-2">
        <div
          className="flex gap-2 items-center cursor-pointer text-sm hover:text-blue-500 transition duration-200"
          onClick={() => toggleDropdown('benefits')}
          aria-expanded={openDropdown === 'benefits'}
          aria-controls="benefits-dropdown"
          aria-label="Benefits Management"
        >
          <GiGears className="w-5 h-5" />
          {!isCollapsed && <span>Benefits Management</span>}
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
          <li><Link to="/benefits-enrollment">Benefits Enrollment</Link></li>
          <li><Link to="/benefits-request">Request</Link></li>
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
          <li><Link to="/compensation-overview">Compensation Overview</Link></li>
          <li><Link to="/salary-planning">Salary Planning</Link></li>
          <li><Link to="/incentive-planning">Incentive Planning</Link></li>
          <li><Link to="/benefits-planning">Benefits Planning</Link></li>
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
          aria-label="Advanced Analytics"
        >
          <IoIosStats className="w-5 h-5" />
          {!isCollapsed && <span>Analytics</span>}
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
          <li><Link to="/forecasting-insights">Forecasting Insights</Link></li>
          <li><Link to="/behavioral-insights">Behavioral Insights</Link></li>
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
