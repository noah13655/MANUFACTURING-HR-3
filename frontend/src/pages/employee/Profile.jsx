import { useEffect } from "react";
import { useEmployeeStore } from "../../store/employeeStore";

const Profile = () => {
  const {fetchData,user} = useEmployeeStore();

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const fetchUserData = async () => {
      await fetchData();
    };
    fetchUserData();
  }, [fetchData]);

  return (
    <div className="container mx-auto mt-10 p-8 max-w-3xl bg-white shadow-lg rounded-lg">
      {/* Header with profile picture and Edit button */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button className="relative group">
            <img
              src={user?.profilePic}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
            />
            <p>
              dada
            </p>
            <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-full transition duration-200 flex items-center justify-center">
              <span className="text-white font-medium">Edit</span>
            </span>
          </button>
          <div className="ml-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {user?.firstName || 'N/A'} {user?.lastName || 'N/A'} {user?.middleName || 'N/A'}
            </h2>
            <p className="text-gray-600 mt-1">Position: {user?.position || 'N/A'}</p>
          </div>
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
      </div>
    </div>
  );
};

export default Profile;
