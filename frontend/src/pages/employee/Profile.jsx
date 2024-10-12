import { useEffect, useState } from "react";
import { useEmployeeStore } from "../../store/employeeStore";
import { toast, ToastContainer } from 'react-toastify';

import bcrypt from "bcryptjs";
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const {fetchData,user,changePassword,lastPasswordChange} = useEmployeeStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@#$!%*?&]{8,}$/;

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        await fetchData();
      } catch (error) {
        console.error("Error fetching user data:",error);
        toast.error('Failed to load user data. Please try again.');
      }
    };
    fetchUserData();
  }, [fetchData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({currentPassword,newPassword,confirmPassword});

    if (newPassword.trim() !== confirmPassword.trim()) {
      toast.error('Passwords do not match. Please try again.'); 
      return;
  }
    
  const minLengthRegex = /^.{8,}$/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /\d/;
  const specialCharRegex = /[$@#&!%*?]/; 

      if(!minLengthRegex.test(newPassword)){
        toast.error('New password must be at least 8 characters long.');
      return;
      }
    
      if(!uppercaseRegex.test(newPassword)){
      toast.error('New password must contain at least 1 uppercase letter.');
      return;
      }

      if(!lowercaseRegex.test(newPassword)){
      toast.error('New password must contain at least 1 lowercase letter.');
      return;
      }     
      if(!numberRegex.test(newPassword)){
      toast.error('New password must contain at least 1 number.');
      return;
      } 
      if(!specialCharRegex.test(newPassword)){
      toast.error('New password must contain at least 1 special character (e.g., @, $, #, &, !, %).');
      return;
      }
  
    setIsLoading(true);
    
    try {
      if(!user || !user.password ||lastPasswordChange){
        toast.error('User data is not available. Please refresh and try again.'); 
        return;
      }
  
      const currentTime = new Date();
      const lastChangeTime = new Date(user.lastPasswordChange);
      const timeDifference = (currentTime - lastChangeTime) / (1000 * 60);
  
      if (timeDifference < 5) {
        toast.error(`You can change your password only after ${Math.ceil(5 - timeDifference)} minute(s).`);
        return;
      }

      const isCurrentPasswordValid = await bcrypt.compare(currentPassword,user.password);
      if(!isCurrentPasswordValid){
        toast.error('Current password is incorrect. Please try again.');
        return;
      }
  
      const success = await changePassword(currentPassword,newPassword,confirmPassword);
      if(success) {
        toast.success('Password changed successfully!');

        await lastPasswordChange(currentTime);

        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setIsModalOpen(false);
      }else{
        toast.error('Error changing password. Please try again.');
      }
    } catch (error) {
      console.error("Error during password change:",error);
      toast.error(error.response?.data?.message || 'Error changing password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  
  return (
    <div className="container mx-auto mt-10 p-8 max-w-3xl bg-white shadow-lg border-2 rounded-lg">
      <ToastContainer />
      {/* Header with profile picture and Edit button */}
      <div className="flex flex-col items-center mb-6">
        <button className="relative group">
          <img
            src={user?.profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
          />
          <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-full transition duration-200 flex items-center justify-center">
            <span className="text-white font-medium">Edit</span>
          </span>
        </button>
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 flex justify-center space-x-2">
            <abbr title="Last name" className="hover:text-blue-600 transition-colors no-underline">
              {user?.lastName || 'N/A'}
            </abbr>
            <abbr title="First name" className="hover:text-blue-600 transition-colors no-underline">
              {user?.firstName || 'N/A'}
            </abbr>
            <abbr title="Middle name" className="hover:text-blue-600 transition-colors no-underline">
              {user?.middleName || 'N/A'}
            </abbr>
          </h2>
          <p className="text-gray-600 mt-1">Position: {user?.position || 'N/A'}</p>
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="mt-8">
        <h3 className="text-xl font-medium text-gray-700 mb-4">Personal Information</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg text-gray-700 font-medium">{user?.email || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="text-lg text-gray-700 font-medium">{user?.phoneNumber || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="text-lg text-gray-700 font-medium">{user?.gender || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Birthday</p>
            <p className="text-lg text-gray-700 font-medium">{formatDate(user?.bDate) || "N/A"}</p>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-6 w-full mx-auto" />

      {/* Address Section */}
      <div className="mt-8">
        <h3 className="text-xl font-medium text-gray-700 mb-4">Address</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">Province</p>
            <p className="text-lg text-gray-700 font-medium">{user?.address?.province || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Municipality</p>
            <p className="text-lg text-gray-700 font-medium">{user?.address?.municipality || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Postal Code</p>
            <p className="text-lg text-gray-700 font-medium">{user?.address?.postalCode || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Country</p>
            <p className="text-lg text-gray-700 font-medium">{user?.address?.country || "N/A"}</p>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-6 w-full mx-auto" />

      {/* Security Section */}
      <div className="mt-8">
        <h3 className="text-xl font-medium text-gray-700 mb-4">Security</h3>
        <p className="text-lg text-gray-700 font-medium">Password: ********</p>
        <button onClick={() => setIsModalOpen(true)} className="mt-4 text-blue-600 hover:underline">
          Change Password
        </button>
      </div>

      {/* Change Password Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
            <h2 className="text-lg font-semibold mb-4">Change Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="text-gray-500 hover:underline"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-4 py-2 rounded-md text-white ${isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  {isLoading ? 'Changing...' : 'Change Password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
