import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FaRegUser, FaDollarSign, FaStar, FaMoneyBillWave } from 'react-icons/fa';
import { AiOutlineFileText, AiOutlineBarChart } from 'react-icons/ai';
import { GiHealthNormal } from 'react-icons/gi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import jjmLogo from '../../assets/jjmlogo.jpg';
import { useAuthStore } from '../../store/authStore';

const ManagerSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { isAuthenticated } = useAuthStore();

  const toggleSidebar = () => {
    setIsCollapsed((prev) => {
      const newCollapseState = !prev;
      if (newCollapseState) {
        setOpenDropdown(null);
      }
      return newCollapseState;
    });
  };

  const toggleDropdown = (section) => {
    setOpenDropdown((prev) => (prev === section ? null : section));
  };

  const handleLinkClick = () => {
    if (!isCollapsed) {
      setIsCollapsed(true); 
    }
  };

  useEffect(() => {
    console.log('User authentication status changed:', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <div className="flex">
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

        <DashboardLink icon={<MdDashboard />} text="Dashboard" to="/" isCollapsed={isCollapsed} onClick={handleLinkClick} />
        <DropdownSection icon={<FaRegUser />} text="User Management" section="user" openDropdown={openDropdown} toggleDropdown={toggleDropdown} isCollapsed={isCollapsed} links={[
          { to: "/user-list", text: "User List" },
          { to: "/attendance-info", text: "Attendance Info" },
        ]} onClick={handleLinkClick} />
        <DropdownSection icon={<FaDollarSign />} text="Payroll Processing" section="payroll" openDropdown={openDropdown} toggleDropdown={toggleDropdown} isCollapsed={isCollapsed} links={[
          { to: "/payroll-management", text: "Payroll Management" },
          { to: "/salary-computation", text: "Salary Computation" },
          { to: "/deductions-management", text: "Deductions Management" },
          { to: "/payroll-distribution", text: "Payroll Distribution" },
          { to: "/payroll-reports", text: "Payroll Reports" },
          { to: "/payroll-history", text: "Payroll History" },
          { to: "/request-budget", text: "Request Budget" },
        ]} onClick={handleLinkClick} />
        <DropdownSection icon={<GiHealthNormal />} text="Benefits Administration" section="benefits" openDropdown={openDropdown} toggleDropdown={toggleDropdown} isCollapsed={isCollapsed} links={[
          { to: "/benefits-overview", text: "Benefits Overview" },
          { to: "/enrollment-submission", text: "Enrollment Submission" },
          { to: "/leave-request", text: "Leave Request" },
          { to: "/deductions", text: "Deductions" },
        ]} onClick={handleLinkClick} />
        <DropdownSection icon={<FaStar />} text="Incentives Management" section="incentives" openDropdown={openDropdown} toggleDropdown={toggleDropdown} isCollapsed={isCollapsed} links={[
          { to: "/incentives-overview", text: "Incentives Overview" },
          { to: "/incentives-request", text: "Incentive Request" },
          { to: "/sales-commissions", text: "Sales Commissions" },
          { to: "/recognition-programs", text: "Recognition Programs" },
        ]} onClick={handleLinkClick} />
        <DropdownSection icon={<FaMoneyBillWave />} text="Compensation Planning" section="compensation" openDropdown={openDropdown} toggleDropdown={toggleDropdown} isCollapsed={isCollapsed} links={[
          { to: "/compensation-overview", text: "Compensation Overview" },
          { to: "/salary-planning", text: "Salary Planning" },
          { to: "/market-analysis", text: "Market Analysis" },
          { to: "/equity-adjustments", text: "Equity Adjustment" },
          { to: "/total-rewards", text: "Total Rewards" },
        ]} onClick={handleLinkClick} />
        <DropdownSection icon={<AiOutlineBarChart />} text="Predictive Analytics" section="analytics" openDropdown={openDropdown} toggleDropdown={toggleDropdown} isCollapsed={isCollapsed} links={[
          { to: "/employee-analytics", text: "Employee Analytics" },
          { to: "/financial-analytics", text: "Financial Analytics" },
          { to: "/operational-analytics", text: "Operational Analytics" },
        ]} onClick={handleLinkClick} />
        <DropdownSection icon={<AiOutlineFileText />} text="Reports" section="reports" openDropdown={openDropdown} toggleDropdown={toggleDropdown} isCollapsed={isCollapsed} links={[
          { to: "/reports-overview", text: "Reports Overview" },
          { to: "/detailed-reports", text: "Detailed Reports" },
          { to: "/monthly-reports", text: "Monthly Reports" },
        ]} onClick={handleLinkClick} />
      </div>

      <div className={`md:hidden flex flex-col bg-white text-black px-4 py-4 fixed top-0 left-0 h-full transition-all duration-300 ${isCollapsed ? 'w-24' : 'w-80'} overflow-hidden`}>
        <button onClick={toggleSidebar} className="p-2">
          {isCollapsed ? '☰' : '✕'} 
        </button>
        <div className={`flex flex-col transition-all duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
          <DashboardLink icon={<MdDashboard />} text="Dashboard" to="/" onClick={handleLinkClick} />
          <DropdownSection icon={<FaRegUser />} text="User Management" section="user" openDropdown={openDropdown} toggleDropdown={toggleDropdown} links={[
            { to: "/user-list", text: "User List" }, 
            { to: "/attendance-info", text: "Attendance Info" }]} 
            onClick={handleLinkClick} />
          <DropdownSection icon={<FaDollarSign />} text="Payroll Processing" section="payroll" openDropdown={openDropdown} toggleDropdown={toggleDropdown} links={[
            { to: "/payroll-management", text: "Payroll Management" }, 
            { to: "/salary-computation", text: "Salary Computation" }, 
            { to: "/deductions-management", text: "Deductions Management" }, 
            { to: "/payroll-distribution", text: "Payroll Distribution" }, 
            { to: "/payroll-reports", text: "Payroll Reports" }, 
            { to: "/payroll-history", text: "Payroll History" }, 
            { to: "/request-budget", text: "Request Budget" }]} 
            onClick={handleLinkClick} />
          <DropdownSection icon={<GiHealthNormal />} text="Benefits Administration" section="benefits" openDropdown={openDropdown} toggleDropdown={toggleDropdown} links={[
            { to: "/benefits-overview", text: "Benefits Overview" }, 
            { to: "/enrollment-submission", text: "Enrollment Submission" }, 
            { to: "/leave-request", text: "Leave Request" }, 
            { to: "/deductions", text: "Deductions" }]} 
            onClick={handleLinkClick} />
          <DropdownSection icon={<FaStar />} text="Incentives Management" section="incentives" openDropdown={openDropdown} toggleDropdown={toggleDropdown} links={[
            { to: "/incentives-overview", text: "Incentives Overview" }, 
            { to: "/incentives-request", text: "Incentive Request" }, 
            { to: "/sales-commissions", text: "Sales Commissions" }, 
            { to: "/recognition-programs", text: "Recognition Programs" }]} 
            onClick={handleLinkClick} />
          <DropdownSection icon={<FaMoneyBillWave />} text="Compensation Planning" section="compensation" openDropdown={openDropdown} toggleDropdown={toggleDropdown} links={[
            { to: "/compensation-overview", text: "Compensation Overview" }, 
            { to: "/salary-planning", text: "Salary Planning" }, 
            { to: "/market-analysis", text: "Market Analysis" }, 
            { to: "/equity-adjustments", text: "Equity Adjustment" }, 
            { to: "/total-rewards", text: "Total Rewards" }]} 
            onClick={handleLinkClick} />
          <DropdownSection icon={<AiOutlineBarChart />} text="Predictive Analytics" section="analytics" openDropdown={openDropdown} toggleDropdown={toggleDropdown} links={[
            { to: "/employee-analytics", text: "Employee Analytics" }, 
            { to: "/financial-analytics", text: "Financial Analytics" }, 
            { to: "/operational-analytics", text: "Operational Analytics" }]} 
            onClick={handleLinkClick} />
          <DropdownSection icon={<AiOutlineFileText />} text="Reports" section="reports" openDropdown={openDropdown} toggleDropdown={toggleDropdown} links={[
            { to: "/reports-overview", text: "Reports Overview" }, 
            { to: "/detailed-reports", text: "Detailed Reports" }, 
            { to: "/monthly-reports", text: "Monthly Reports" }]} 
            onClick={handleLinkClick} />
        </div>
      </div>
    </div>
  );
};

const DropdownSection = ({ icon, text, section, openDropdown, toggleDropdown, isCollapsed, links, onClick }) => (
  <div>
    <button
      className={`flex items-center justify-between p-2 rounded-md hover:bg-gray-200 transition duration-200 ${isCollapsed ? 'justify-center' : ''}`}
      onClick={() => {
        toggleDropdown(section);
        onClick();
      }}
      aria-expanded={openDropdown === section}
      aria-controls={section}
    >
      <div className="flex items-center">
        <span className="mr-2">{icon}</span>
        {!isCollapsed && <span>{text}</span>}
      </div>
      {openDropdown === section ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </button>
    {openDropdown === section && !isCollapsed && (
      <div className="ml-4">
        {links.map(({ to, text }, index) => (
          <Link key={index} to={to} className="block py-1 text-sm hover:bg-gray-200 rounded-md transition duration-200" onClick={onClick}>
            {text}
          </Link>
        ))}
      </div>
    )}
  </div>
);

const DashboardLink = ({ icon, text, to, isCollapsed, onClick }) => (
  <Link
    to={to}
    className={`flex items-center p-2 rounded-md hover:bg-gray-200 transition duration-200 ${isCollapsed ? 'justify-center' : ''}`}
    onClick={onClick}
  >
    <span className="mr-2">{icon}</span>
    {!isCollapsed && <span>{text}</span>}
  </Link>
);

export default ManagerSidebar;
