import React, { useState, useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

const RegisterUserForm = () => {
  const navigate = useNavigate();
  const { registerUser } = useAuthStore();
  const [message, setMessage] = useState({ type: '', content: '' });
  const [formData, setFormData] = useState({
    position: '',
    lastName: '',
    firstName: '',
    middleName: '',
    email: '',
    phoneNumber: '',
    address: {
      street: '',
      municipality: '',
      province: '',
      postalCode: '',
      country: '',
    },
    gender: '',
    bDate: '',
    role: ''
  });
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRoleDisabled, setIsRoleDisabled] = useState(false); // New state for disabling role

  useEffect(() => {
    document.title = "Register User";
        
    const storedMessage = localStorage.getItem('successMessage');
    if (storedMessage) {
      setMessage({ type: 'success', content: storedMessage });
      localStorage.removeItem('successMessage');
      setTimeout(() => setMessage({ type: '', content: '' }), 3000);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'position') {
      setFormData((prev) => ({
        ...prev,
        position: value,
        role: value === 'Manager' ? 'Manager' : prev.role,
      }));
      setIsRoleDisabled(value === 'Manager'); // Disable role dropdown if position is Manager
    } else if (name.includes('address')) {
      const addressField = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    let validationErrors = [];

    if (!['CEO', 'Secretary', 'Production Head', 'Resellers Sales Head', 'Reseller', 'Manager'].includes(formData.position)) {
      validationErrors.push("Invalid position value!");
    }
    if (!['Employee','Manager'].includes(formData.role)) {
      validationErrors.push("Invalid Role!");
    }
    if (!formData.lastName) validationErrors.push("Lastname is required!");
    if (!formData.firstName) validationErrors.push("Firstname is required!");
    if (!formData.middleName) validationErrors.push("Middle name is required!");
    if (!formData.email) {
      validationErrors.push("Email is required!");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.push("Invalid email address!");
    }
    if (!formData.phoneNumber) {
      validationErrors.push("Phone Number is required!");
    } else if (!/^(09|\+639)\d{9}$/.test(formData.phoneNumber)) {
      validationErrors.push("Invalid phone format!");
    }
    if (!formData.address.street) validationErrors.push("Street is required!");
    if (!formData.address.municipality) validationErrors.push("Municipality is required!");
    if (!formData.address.province) validationErrors.push("Province is required!");
    if (!formData.address.postalCode) validationErrors.push("Postal code is required!");
    if (!formData.address.country) validationErrors.push("Country is required!");
    if (!['Male', 'Female', 'Other'].includes(formData.gender)) {
      validationErrors.push("Invalid gender value!");
    }
    if (!formData.bDate) {
      validationErrors.push("Birth date is required!");
    } else if (isNaN(Date.parse(formData.bDate))) {
      validationErrors.push("Invalid birthdate format!");
    }

    return validationErrors;
  };

  const generatePassword = () => {
    const password = `#${formData.lastName.charAt(0).toUpperCase()}${formData.lastName.charAt(1).toLowerCase()}HR3`;
    setGeneratedPassword(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', content: '' });

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setMessage({ type: 'error', content: validationErrors.join(' ') });
      return;
    }

    generatePassword();

    const dataToSubmit = { ...formData, password: generatedPassword };
    setLoading(true);

    try {
      const result = await registerUser(dataToSubmit);
      if (result) {
          let successMessage;
  
          switch (formData.position) {
              case 'Manager':
                  successMessage = 'Manager registered successfully!';
                  break;
              case 'CEO':
                  successMessage = 'CEO registered successfully!';
                  break;
              case 'Secretary':
                  successMessage = 'Secretary registered successfully!';
                  break;
              case 'Production Head':
                  successMessage = 'Production Head registered successfully!';
                  break;
              case 'Resellers Sales Head':
                  successMessage = 'Resellers Sales Head registered successfully!';
                  break;
              case 'Reseller':
                  successMessage = 'Reseller registered successfully!';
                  break;
              default:
                  successMessage = 'Employee registered successfully!';
                  break;
          }
  
          setMessage({ type: 'success', content: successMessage });
          localStorage.setItem('successMessage', successMessage);
          navigate("/register-user");
          window.location.reload();
      } else {

      }
  } catch (error) {
      console.error(error);
      setMessage({ type: 'error', content: error.message || 'An unexpected error occurred. Please try again.' });
  } finally {
      setLoading(false);
  }
  
  };

  return (
    <div className="relative max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
      {message.content && (
        <div
          className={`fixed top-4 right-4 p-3 rounded-md text-white z-50 ${message.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
        >
          {message.content}
        </div>
      )}

      <h2 className="text-3xl font-bold mb-6 text-center">Register User</h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Positioning Fields */}
        <div className="form-control">
          <label className="label">Position</label>
          <select name="position" className="select select-bordered w-full" required onChange={handleInputChange}>
            <option value="">Select Position</option>
            <option value="CEO">CEO</option>
            <option value="Secretary">Secretary</option>
            <option value="Production Head">Production Head</option>
            <option value="Resellers Sales Head">Resellers Sales Head</option>
            <option value="Reseller">Reseller</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">Role</label>
          <select name="role" className="select select-bordered w-full" required onChange={handleInputChange} disabled={isRoleDisabled}>
            <option value="">Select Role</option>
            <option value="Employee">Employee</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        {/* Name Fields */}
        <div className="flex gap-6">
          <div className="form-control w-1/3">
            <label className="label">Last Name</label>
            <input name="lastName" type="text" className="input input-bordered w-full" required onChange={handleInputChange} />
          </div>
          <div className="form-control w-1/3">
            <label className="label">First Name</label>
            <input name="firstName" type="text" className="input input-bordered w-full" required onChange={handleInputChange} />
          </div>
          <div className="form-control w-1/3">
            <label className="label">Middle Name</label>
            <input name="middleName" type="text" className="input input-bordered w-full" required onChange={handleInputChange} />
          </div>
        </div>

        {/* Email and Phone Number */}
        <div className="flex gap-6">
          <div className="form-control w-1/2">
            <label className="label">Email</label>
            <input name="email" type="email" className="input input-bordered w-full" required onChange={handleInputChange} />
          </div>
          <div className="form-control w-1/2">
            <label className="label">Phone Number</label>
            <input name="phoneNumber" type="tel" className="input input-bordered w-full" required onChange={handleInputChange} />
          </div>
        </div>

        {/* Gender */}
        <div className="form-control">
          <label className="label">Gender</label>
          <select name="gender" className="select select-bordered w-full" required onChange={handleInputChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Birth Date */}
        <div className="form-control">
          <label className="label">Birth Date</label>
          <input name="bDate" type="date" className="input input-bordered w-full" required onChange={handleInputChange} />
        </div>

        {/* Address Fields */}
        <div className="flex gap-6">
          <div className="form-control w-1/2">
            <label className="label">Street</label>
            <input name="address.street" type="text" className="input input-bordered w-full" required onChange={handleInputChange} />
          </div>
          <div className="form-control w-1/2">
            <label className="label">Municipality</label>
            <input name="address.municipality" type="text" className="input input-bordered w-full" required onChange={handleInputChange} />
          </div>
        </div>

        <div className="flex gap-6">
          <div className="form-control w-1/2">
            <label className="label">Province</label>
            <input name="address.province" type="text" className="input input-bordered w-full" required onChange={handleInputChange} />
          </div>
          <div className="form-control w-1/2">
            <label className="label">Postal Code</label>
            <input name="address.postalCode" type="text" className="input input-bordered w-full" required onChange={handleInputChange} />
          </div>
        </div>

        <div className="form-control">
          <label className="label">Country</label>
          <input name="address.country" type="text" className="input input-bordered w-full" required onChange={handleInputChange} />
        </div>

        <button type="submit" className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}>Register</button>
      </form>
    </div>
  );
};

export default RegisterUserForm;
