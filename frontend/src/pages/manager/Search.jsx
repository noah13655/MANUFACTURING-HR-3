import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useAuthStore } from "../../store/authStore";
import { useEmployeeStore } from "../../store/employeeStore";
import io from 'socket.io-client';

const socket = io("http://localhost:7687", { withCredentials: true });

const Search = ({ onToggleSidebar }) => {
  const { logout } = useAuthStore();
  const { fetchData, user } = useEmployeeStore();
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadNotifications, setUnreadNotifications] = useState([]);
  const [readNotifications, setReadNotifications] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [viewMode, setViewMode] = useState('unread');

  const managerRoutes = [
    { path: '/dashboard', name: 'Dashboard' },
    { path: '/employee-list', name: 'Employee List' },
    // ... other routes
  ];

  const employeeRoutes = [
    { path: '/dashboard', name: 'Dashboard' },
    { path: '/benefits-overview', name: 'Benefits Overview' },
    // ... other routes
  ];

  const getRoutesByRole = (role) => {
    if (role === 'Manager') {
      return managerRoutes;
    } else if (role === 'Employee') {
      return employeeRoutes;
    } else {
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
    const storedUnreadNotifications = JSON.parse(localStorage.getItem('unreadNotifications')) || [];
    const storedReadNotifications = JSON.parse(localStorage.getItem('readNotifications')) || [];

    setUnreadNotifications(storedUnreadNotifications);
    setReadNotifications(storedReadNotifications);

    socket.on('connect', () => {
      console.log('Socket connected:', socket.id);
    });

    socket.on('requestSalaryCreated', (data) => {
      if (user?.role === 'Manager') {
        const newNotification = { id: Date.now(), message: data.message };
        setNotifications(prev => [...prev, newNotification]);
        setUnreadNotifications(prev => {
          const updatedUnread = [...prev, newNotification];
          localStorage.setItem('unreadNotifications', JSON.stringify(updatedUnread));
          return updatedUnread;
        });
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

  const markAsRead = (notificationId) => {
    const notificationToMark = unreadNotifications.find(n => n.id === notificationId);
    if (notificationToMark) {
      setUnreadNotifications(unreadNotifications.filter(n => n.id !== notificationId));
      const updatedReadNotifications = [...readNotifications, { ...notificationToMark, read: true }];
      setReadNotifications(updatedReadNotifications);

      localStorage.setItem('unreadNotifications', JSON.stringify(unreadNotifications.filter(n => n.id !== notificationId)));
      localStorage.setItem('readNotifications', JSON.stringify(updatedReadNotifications));
    }
  };

  const handleNotificationToggle = (mode) => {
    setViewMode(mode);
    setSelectedNotification(null);
  };

  const notificationsToDisplay = viewMode === 'unread' ? unreadNotifications : readNotifications;

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
            {unreadNotifications.length > 0 && (
              <span className="absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {unreadNotifications.length}
              </span>
            )}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-base-100 border border-gray-300 rounded-lg shadow-lg z-50 p-4">
                <div className="flex justify-between">
                  <h3 className="text-sm font-semibold cursor-pointer" onClick={() => handleNotificationToggle('unread')}>
                    Unread ({unreadNotifications.length})
                  </h3>
                  <h3 className="text-sm font-semibold cursor-pointer" onClick={() => handleNotificationToggle('read')}>
                    Read ({readNotifications.length})
                  </h3>
                </div>
                <div className="flex flex-col mt-2">
                  {notificationsToDisplay.length > 0 ? (
                    notificationsToDisplay.map(notification => (
                      <p
                        key={notification.id}
                        className={`text-sm cursor-pointer ${viewMode === 'unread' ? 'font-semibold' : 'text-gray-500'}`}
                        onClick={() => {
                          if (viewMode === 'unread') {
                            markAsRead(notification.id);
                          }
                          setSelectedNotification(notification);
                        }}
                      >
                        {notification.message}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No notifications</p>
                  )}
                </div>
                {selectedNotification && (
                  <div className="mt-4 p-2 border-t border-gray-200">
                    <h5 className="font-semibold">Notification Details</h5>
                    <p>{selectedNotification.message}</p>
                  </div>
                )}
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
