import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { GiWallet, GiGears, GiChecklist } from 'react-icons/gi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import jjmLogo from '../../assets/jjmlogo.jpg';

const Sidebar = () => {
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
        <Link to="/dashboard"><img src={jjmLogo} alt="Dashboard logo" className="w-10 h-10" /></Link>
        {!isCollapsed && <p className="text-xl font-bold">Portal</p>}
      </div>

      {/* Dashboard */}
      <div
        className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 transition-all duration-300 p-2 rounded-md mb-4 cursor-pointer"
        aria-label="Dashboard"
      >
        <MdDashboard className="w-5 h-5" />
        {!isCollapsed && <p className="text-sm font-semibold"><Link to="/dashboard">Dashboard</Link></p>}
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
          <li><Link to="/benefits-statements">Benefit Statements</Link></li>
          <li><Link to="/claims-management">Claims Management</Link></li>
        </ul>
      </div>

      {/* Payroll Information */}
      <div className="mb-2">
        <div
          className="flex gap-2 items-center cursor-pointer text-sm hover:text-blue-500 transition duration-200"
          onClick={() => toggleDropdown('payroll')}
          aria-expanded={openDropdown === 'payroll'}
          aria-controls="payroll-dropdown"
          aria-label="Payroll Information"
        >
          <GiWallet className="w-5 h-5" />
          {!isCollapsed && <span>Payroll Information</span>}
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
          <li><Link to="/salary-request">Salary Request</Link></li>
          <li><Link to="/direct-deposit">Direct Deposit</Link></li>
          <li><Link to="/pay-stubs">Pay Stubs</Link></li>
          <li><Link to="/tax-documents">Tax Documents</Link></li>
        </ul>
      </div>

      {/* Leave Management */}
      <div className="mb-2">
        <div
          className="flex gap-2 items-center cursor-pointer text-sm hover:text-blue-500 transition duration-200"
          onClick={() => toggleDropdown('leave')}
          aria-expanded={openDropdown === 'leave'}
          aria-controls="leave-dropdown"
          aria-label="Leave Management"
        >
          <GiChecklist className="w-5 h-5" />
          {!isCollapsed && <span>Leave Management</span>}
          {!isCollapsed && (
            <div className="ml-auto">
              {openDropdown === 'leave' ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
            </div>
          )}
        </div>
        <ul
          id="leave-dropdown"
          className={`pl-6 mt-1 space-y-1 overflow-hidden transition-max-height duration-500 ease-in-out ${
            openDropdown === 'leave' ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <li><Link to="/leave-balances">Leave Balances</Link></li>
          <li><Link to="/leave-history">Leave History</Link></li>
          <li><Link to="/leave-requests">Leave Requests</Link></li>
        </ul>
      </div>

      {/* Compensation History */}
      <div className="mb-2">
        <div
          className="flex gap-2 items-center cursor-pointer text-sm hover:text-blue-500 transition duration-200"
          onClick={() => toggleDropdown('compensation')}
          aria-expanded={openDropdown === 'compensation'}
          aria-controls="compensation-dropdown"
          aria-label="Compensation Information"
        >
          <GiWallet className="w-5 h-5" />
          {!isCollapsed && <span>Compensation Information</span>}
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
          <li><Link to="/compensation-history">Compensation History</Link></li>
          <li><Link to="/salary-details">Salary Details</Link></li>
          <li><Link to="/salary-projections">Salary Projections</Link></li>
        </ul>
      </div>

            {/* Incentives and Commissions */}
      <div className="mb-2">
        <div
          className="flex gap-2 items-center cursor-pointer text-sm hover:text-blue-500 transition duration-200"
          onClick={() => toggleDropdown('incentives')}
          aria-expanded={openDropdown === 'incentives'}
          aria-controls="incentives-dropdown"
          aria-label="Incentives"
        >
          <GiGears className="w-5 h-5" />
          {!isCollapsed && <span>Incentives</span>}
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
          <li><Link to="/incentives-overview">Incentives Overview</Link></li>
          <li><Link to="/my-incentives">My Incentives</Link></li>
          <li><Link to="/my-commissions">My Commissions</Link></li>
        </ul>
      </div>

          {/* Retirement plans */}
      <div className="mb-2">
        <div
          className="flex gap-2 items-center cursor-pointer text-sm hover:text-blue-500 transition duration-200"
          onClick={() => toggleDropdown('retirement')}
          aria-expanded={openDropdown === 'retirement'}
          aria-controls="retirement-dropdown"
          aria-label="Retirement Plans"
        >
          <GiWallet className="w-5 h-5" />
          {!isCollapsed && <span>Retirement Plans</span>}
          {!isCollapsed && (
            <div className="ml-auto">
              {openDropdown === 'retirement' ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
            </div>
          )}
        </div>
        <ul
          id="retirement-dropdown"
          className={`pl-6 mt-1 space-y-1 overflow-hidden transition-max-height duration-500 ease-in-out ${
            openDropdown === 'retirement' ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <li><Link to="/beneficiary-information">Beneficiary Information</Link></li>
          <li><Link to="/retirement-plan-overview">Retirement Plan Overview</Link></li>
        </ul>
      </div>


      {/* Support and Resources */}
      <div className="mb-2">
        <div
          className="flex gap-2 items-center cursor-pointer text-sm hover:text-blue-500 transition duration-200"
          onClick={() => toggleDropdown('support')}
          aria-expanded={openDropdown === 'support'}
          aria-controls="support-dropdown"
          aria-label="Support and Resources"
        >
          <GiGears className="w-5 h-5" />
          {!isCollapsed && <span>Support and Resources</span>}
          {!isCollapsed && (
            <div className="ml-auto">
              {openDropdown === 'support' ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
            </div>
          )}
        </div>
        <ul
          id="support-dropdown"
          className={`pl-6 mt-1 space-y-1 overflow-hidden transition-max-height duration-500 ease-in-out ${
            openDropdown === 'support' ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <li><Link to="/contact-hr">Contact HR</Link></li>
          <li><Link to="/faqs">FAQs</Link></li>
        </ul>
      </div>    
    </div>
  );
};

export default Sidebar;
