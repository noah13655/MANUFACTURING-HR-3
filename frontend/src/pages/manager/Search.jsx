import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useAuthStore } from "../../store/authStore";
import { useEmployeeStore } from "../../store/employeeStore";
import io from 'socket.io-client';

const socket = io("http://localhost:7687",{withCredentials:true});

const Search = ({ onToggleSidebar }) => {
  const { logout } = useAuthStore();
  const { fetchData, user } = useEmployeeStore();
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRoutes, setFilteredRoutes] = useState([]);

  const managerRoutes = [
    { path: '/dashboard', name: 'Dashboard' },
    { path: '/employee-list', name: 'Employee List' },
    { path: '/benefits-administration', name: 'Benefits Administration' },
    { path: '/enrollment-submission', name: 'Enrollment Submission' },
    { path: '/deductions-management', name: 'Deductions Management' },
    { path: '/incentives-management', name: 'Incentives Management' },
    { path: '/recognition-programs', name: 'Recognition Programs' },
    { path: '/sales-commissions', name: 'Sales Commissions' },
    { path: '/compensation-overview', name: 'Compensation Overview' },
    { path: '/compensation-planning', name: 'Compensation Planning' },
    { path: '/salary-structure', name: 'Salary Structure' },
    { path: '/total-rewards', name: 'Total Rewards' },
    { path: '/market-analysis', name: 'Market Analysis' },
    { path: '/grievance-request', name: 'Grievance Request' },
    { path: '/payroll-management', name: 'Payroll Management' },
    { path: '/attendance', name: 'Attendance Tracking' },
    { path: '/salary-computation', name: 'Salary Computation' },
    { path: '/compliance-tracking', name: 'Compliance Tracking' },
    { path: '/request-budget', name: 'Budget Request' },
    { path: '/payroll-distribution', name: 'Payroll Distribution' },
    { path: '/generate-reports', name: 'Report Generation' },
    { path: '/payroll-history', name: 'Payroll History' },
    { path: '/predictive-analytics', name: 'Predictive Analytics' },
  ];
  
  const employeeRoutes = [
    { path: '/dashboard', name: 'Dashboard' },
    { path: '/benefits-overview', name: 'Benefits Overview' },
    { path: '/benefits-enrollment', name: 'Benefits Enrollment' },
    { path: '/my-deductions', name: 'My Deductions' },
    { path: '/incentives-overview', name: 'Incentives Overview' },
    { path: '/my-commissions', name: 'My Commissions' },
    { path: '/incentive-request', name: 'Incentive Request' },
    { path: '/incentive-history', name: 'Incentive History' },
    { path: '/my-salary-info', name: 'My Salary Information' },
    { path: '/salary-request', name: 'Salary Request' },
    { path: '/my-pay-slip', name: 'My Pay Slip' },
    { path: '/my-overtime-bonuses', name: 'My Overtime Bonuses' },
  ];
  
  
  const getRoutesByRole = (role) => {
    if(role === 'Manager'){
      return managerRoutes;
    }else if(role === 'Employee'){
      return employeeRoutes;
    }else{
      return [];
    }
  };

  const routes = getRoutesByRole(user?.role);


  useEffect(() => {
    const fetchUserData = async () => {
      await fetchData();
    };
    fetchUserData();
  }, [fetchData]);

  useEffect(() => {
    if (searchQuery) {
      setFilteredRoutes(routes.filter(route =>
        route.name.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    } else {
      setFilteredRoutes([]);
    }
  }, [searchQuery]);

useEffect(() => {
  socket.on('connect', () => {
    console.log('Socket connected:', socket.id);
  });

  socket.on('requestSalaryCreated', (data) => {
    if (user?.role === 'Manager') {
      setNotifications((prev) => [
        ...prev,
        { id: Date.now(), message: data.message },
      ]);
    }
  });

  return () => {
    socket.off('connect');
    socket.off('requestSalaryCreated');
  };
}, [user]);  
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
    onToggleSidebar();
  };

  return (
    <div className="w-full p-5 bg-base-100 shadow-lg rounded-lg sticky top-0 z-50 border border-gray-300">
      <div className="flex items-center">
        <button onClick={handleToggleSidebar} className="btn btn-ghost">
          {isSidebarOpen ? <HiOutlineX className="text-xl" /> : <HiOutlineMenu className="text-xl" />}
        </button>

        <div className="flex-grow flex justify-center relative">
          <input
            type="text"
            placeholder="Search routes..."
            className="input input-bordered w-full max-w-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {filteredRoutes.length > 0 && (
            <ul className="absolute z-50 bg-base-100 border border-gray-300 rounded-lg mt-12 w-80 max-h-40 overflow-y-auto">
              {filteredRoutes.map(route => (
                <li key={route.path}>
                  <button
                    onClick={() => {
                      navigate(route.path);
                      setSearchQuery('');
                      setFilteredRoutes([]);
                    }}
                    className="block px-2 py-1 text-left hover:bg-gray-200 w-full text-sm"
                  >
                    {route.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex gap-5 items-center">
          <div className="relative">
            <IoMdNotificationsOutline
              className="text-2xl cursor-pointer"
              onClick={() => setShowNotifications(!showNotifications)}
            />
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-base-100 border border-gray-300 rounded-lg shadow-lg z-50">
                <div className="p-4 border-b">
                  <h3 className="text-sm font-semibold">Notifications</h3>
                </div>
                <div className="p-4 max-h-60 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map(notification => (
                      <p key={notification.id} className="text-sm">{notification.message}</p>
                    ))
                  ) : (
                    <p className="text-sm">You have no new notifications.</p>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <div className="dropdown dropdown-end">
            <img
              src={user?.profilePic}
              tabIndex={0}
              role="button"
              alt="profile"
              className="w-10 h-10 rounded-full border-2 border-neutral-500"
            />
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 mt-2 shadow border border-gray-300">
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><button onClick={handleLogout} className="w-full text-left">Log out</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
