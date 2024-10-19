import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useEmployeeStore } from "../../store/employeeStore";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from 'react-router-dom';

const Search = ({ onToggleSidebar }) => {
  const { logout } = useAuthStore();
  const { fetchData, user } = useEmployeeStore();
  const navigate = useNavigate();
  
  const [showNotifications, setShowNotifications] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      await fetchData();
    };
    fetchUserData();
  }, [fetchData]);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
    onToggleSidebar();
  };
  
  return (
    <div className="w-full p-5 bg-white text-black/70 h-[85px] rounded-l-sm sticky top-0 z-50">
      <div className="search-container">
        <button onClick={handleToggleSidebar} className="toggle-sidebar-button">
          {isSidebarOpen ? (
            <HiOutlineX className="size-6" />
          ) : (
            <HiOutlineMenu className="size-6" />
          )}
        </button>
      </div>
      <div className="flex justify-between max-md:flex max-md:justify-end">
        <div className="flex gap-5 items-center w-[600px] max-md:hidden">
        </div>

        <div className="flex gap-3 items-center">
          <div className="relative">
            <IoMdNotificationsOutline
              className="size-6 cursor-pointer"
              onClick={() => setShowNotifications(!showNotifications)}
            />
            
            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50">
                <div className="p-4 border-b">
                  <h3 className="text-sm font-semibold">Notifications</h3>
                </div>
                <div className="p-4 max-h-60 overflow-y-auto backdrop:out-of-range:">
                  <p className="text-sm">You have no new notifications.</p>
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
              className="size-10 rounded-full border-2 border-neutral-500"
            />
            <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 mt-2 shadow">
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><button onClick={handleLogout}>Log out</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
