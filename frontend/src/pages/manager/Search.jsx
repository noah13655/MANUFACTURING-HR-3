import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useEmployeeStore } from "../../store/employeeStore";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const { logout } = useAuthStore();
  const {fetchData,user} = useEmployeeStore();
  const navigate = useNavigate();

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

  return (
    <div className="w-full p-5 bg-white text-black/70 h-[85px] rounded-l-sm sticky top-0 z-50">
      <div className="flex justify-between max-md:flex max-md:justify-end">
        <div className="flex gap-5 items-center w-[600px] max-md:hidden">
          <form className="flex items-center max-w-lg w-full">
            <label htmlFor="voice-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              </div>
              <input
                type="text"
                id="voice-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="Search Stocks, Prices, Sell..."
                required
              />
              <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
              </button>
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Search
            </button>
          </form>
        </div>

        <div className="flex gap-3 items-center">
          <MdOutlineDarkMode className="size-6 cursor-pointer" />
          <IoMdNotificationsOutline className="size-6 cursor-pointer" />
          <div className="dropdown dropdown-end">
            <img
              src={user?.profilePic}
              tabIndex={0}
              role="button"
              alt="/"
              className="size-10 rounded-full border-2 border-neutral-500"
            />
            <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 mt-2 shadow">
              <li><Link to="/profile">Profile</Link></li>
              <li><a>Settings</a></li>
              <li><button onClick={handleLogout}>Log out</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
