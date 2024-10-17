import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FaMoneyBillWave, FaStar } from 'react-icons/fa';
import { GiHealthNormal } from 'react-icons/gi';
import { RiNavigationFill } from "react-icons/ri";
import { BiSolidNavigation } from "react-icons/bi";
import jjmLogo from '../../assets/jjmlogo.jpg';
import { useAuthStore } from '../../store/authStore';

const EmployeeSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeLink, setActiveLink] = useState(null);
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    console.log('User authentication status changed:', isAuthenticated);
  }, [isAuthenticated]);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex">
      <div
        className={`flex flex-col bg-white text-black px-4 py-4 border-r-2 sticky top-0 h-screen transition-all duration-300 ${isCollapsed ? 'w-24' : 'w-72'}`}
        aria-label="Sidebar"
      >
        <div className="flex justify-end">
          <button
            onClick={toggleSidebar}
            className={`mb-4 p-1 text-black border border-gray-300 rounded-md hover:bg-gray-200 transition duration-200`}
            aria-expanded={!isCollapsed}
            aria-label=
            {isCollapsed ? <BiSolidNavigation /> : <RiNavigationFill />}
          >
            {isCollapsed ? '➡️' : '⬅️'}
          </button>
        </div>

        <div className="flex items-center gap-2 cursor-pointer mb-8 justify-center" aria-label="Dashboard Logo">
          <Link to="/"><img src={jjmLogo} alt="Dashboard logo" className="w-10 h-10" /></Link>
          {!isCollapsed && <p className="text-xl font-bold">Dashboard</p>}
        </div>

        <DashboardLink icon={<MdDashboard />} text="Dashboard" to="/" isCollapsed={isCollapsed} isActive={activeLink === 'dashboard'} onClick={() => handleLinkClick('dashboard')} />
        <DashboardLink icon={<GiHealthNormal />} text="My Benefits" to="/benefits-overview" isCollapsed={isCollapsed} isActive={activeLink === 'benefits'} onClick={() => handleLinkClick('benefits')} />
        <DashboardLink icon={<FaStar />} text="My Incentives" to="/incentives-overview" isCollapsed={isCollapsed} isActive={activeLink === 'incentives'} onClick={() => handleLinkClick('incentives')} />
        <DashboardLink icon={<FaMoneyBillWave />} text="My Salary" to="/my-salary-info" isCollapsed={isCollapsed} isActive={activeLink === 'salary'} onClick={() => handleLinkClick('salary')} />
      </div>
    </div>
  );
};

const DashboardLink = ({ icon, text, to, isCollapsed, isActive, onClick }) => (
  <Link to={to} className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 transition duration-200 ${isCollapsed ? 'justify-center' : ''}`} onClick={onClick}>
    <span className={`text-xl transition duration-200 ${isActive ? 'text-blue-500' : 'text-black'}`}>
      {icon}
    </span>
    {!isCollapsed && <span className={`text-sm ${isActive ? 'text-blue-500' : 'text-black'}`}>{text}</span>}
  </Link>
);

export default EmployeeSidebar;
