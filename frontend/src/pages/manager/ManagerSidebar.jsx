import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FaDollarSign, FaMoneyBillWave, FaStar } from 'react-icons/fa';
import { AiOutlineBarChart } from 'react-icons/ai';
import { GiHealthNormal } from 'react-icons/gi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import jjmLogo from '../../assets/jjmlogo.jpg';
import { useAuthStore } from '../../store/authStore';

const ManagerSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [openModule, setOpenModule] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); 

  const { isAuthenticated } = useAuthStore();


  useEffect(() => {
    console.log('User authentication status changed:', isAuthenticated);
  }, [isAuthenticated]);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  const handleModuleClick = (module) => {
    if (openModule === module) {
      setOpenModule(null);
    } else {
      setOpenModule(module);
    }
  };

  const handleSelectChange = (event) => {
    window.location.href = event.target.value;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex">
      {!isMobile ? (
        <div
          className={`flex flex-col bg-white text-black px-4 py-4 border-r-2 sticky top-0 h-screen transition-all duration-300 ${isCollapsed ? 'w-24' : 'w-80'}`}
          aria-label="Sidebar"
        >
          <div className="flex justify-end">
            <button
              onClick={toggleSidebar}
              className={`mb-4 p-1 text-black border border-gray-300 rounded-md hover:bg-gray-200 transition duration-200 ${isCollapsed ? 'w-11' : 'w-11 '}`}
              aria-expanded={!isCollapsed}
              aria-label={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
              {isCollapsed ? '▶' : '◀'}
            </button>
          </div>

          <div className="flex items-center gap-2 cursor-pointer mb-8 justify-center" aria-label="Dashboard Logo">
            <Link to="/"><img src={jjmLogo} alt="Dashboard logo" className="w-10 h-10" /></Link>
            {!isCollapsed && <p className="text-xl font-bold">Dashboard</p>}
          </div>

          <DashboardLink icon={<MdDashboard />} text="Dashboard" to="/" isCollapsed={isCollapsed} />
          <DropdownSection
            icon={<GiHealthNormal />}
            text="Benefits Administration"
            section="benefits"
            isCollapsed={isCollapsed}
            isOpen={openModule === 'benefits'}
            onClick={() => handleModuleClick('benefits')}
            links={[
              { to: "/benefits-overview", text: "Benefits Overview" },
              { to: "/enrollment-submission", text: "Enrollment Submission" },
              { to: "/leave-request", text: "Leave Request" },
              { to: "/deductions", text: "Deductions" },
            ]}
          />
           <DropdownSection
            icon={<FaStar />}
            text="Incentives Management"
            section="incentives"
            isCollapsed={isCollapsed}
            isOpen={openModule === 'incentives'}
            onClick={() => handleModuleClick('incentives')}
            links={[
              { to: "/incentives-overview", text: "Incentives Overview" },
              { to: "/incentives-request", text: "Incentive Request" },
              { to: "/sales-commissions", text: "Sales Commissions" },
              { to: "/recognition-programs", text: "Recognition Programs" },
            ]}
          />
          <DashboardLink icon={<FaMoneyBillWave />} text="Compensation Planning" to="/compensation-overview" isCollapsed={isCollapsed} />
          <DashboardLink icon={<FaDollarSign />} text="Payroll Processing" to="/payroll-management" isCollapsed={isCollapsed} />
          <DashboardLink icon={<AiOutlineBarChart />} text="Analytics" to="/predictive-analytics" isCollapsed={isCollapsed} />

        </div>
      ) : (
<div className="flex flex-col bg-white text-black p-4 border-b-2 sticky top-0 z-10">
  <div className="flex justify-center">
    <select
      onChange={handleSelectChange}
      className="bg-gray-200 p-2 rounded-md w-1/2 sm:w-1/3 lg:w-1/4"
    >
      <option value=""></option>
      <option value="/">Dashboard</option>
      <option value="/payroll-management">Payroll Processing</option>
      <option value="/compensation-overview">Compensation Planning</option>
      <option value="/benefits-overview">Benefits Overview</option>
      <option value="/enrollment-submission">Enrollment Submission</option>
      <option value="/leave-request">Leave Request</option>
      <option value="/deductions">Deductions</option>
      <option value="/incentives-overview">Incentives Overview</option>
      <option value="/incentives-request">Incentive Request</option>
      <option value="/sales-commissions">Sales Commissions</option>
      <option value="/recognition-programs">Recognition Programs</option>
      <option value="/predictive-analytics">Employee Analytics</option>
      <option value="/reports-overview">Reports Overview</option>
      <option value="/detailed-reports">Detailed Reports</option>
      <option value="/monthly-reports">Monthly Reports</option>
    </select>
  </div>
</div>
      )}
    </div>
  );
};

const DashboardLink = ({ icon, text, to, isCollapsed }) => (
  <Link to={to} className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 transition duration-200 ${isCollapsed ? 'justify-center' : ''}`}>
    <span className="text-xl">{icon}</span>
    {!isCollapsed && <span className="text-sm">{text}</span>}
  </Link>
);

const DropdownSection = ({ icon, text, section, isCollapsed, isOpen, onClick, links }) => (
  <div>
    <div className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 transition duration-200 ${isCollapsed ? 'justify-center' : ''}`} onClick={onClick}>
      <span className="text-xl">{icon}</span>
      {!isCollapsed && <span className="text-sm">{text}</span>}
      {!isCollapsed && <span className="ml-auto">{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>}
    </div>
    {!isCollapsed && isOpen && (
      <div className="ml-6">
        {links.map((link) => (
          <Link to={link.to} key={link.text} className="flex items-center gap-2 py-1 pl-2 rounded-md hover:bg-gray-200 transition duration-200 text-sm">
            {link.text}
          </Link>
        ))}
      </div>
    )}
  </div>
);

export default ManagerSidebar;
