import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BenefitsEnrollment = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    dateOfBirth: '',
    address: {
      street: '',
      municipality: '',
      province: '',
      postalCode: '',
      country: '',
    },
    phoneNumber: '',
    email: '',
    sssNumber: '',
    benefitType: '',
    coverageType: '',
    benefitDetails: '',
    pagIbigId: '',
    philHealthId: '',
    uploadedDocuments: {
      frontIdFile: null,
      backIdFile: null,
    },
    beneficiaryName: '', // Added to store beneficiary name
  });

  const benefitOptions = [
    { id: 'philhealth', label: 'PhilHealth' },
    { id: 'pagibig', label: 'Pag-IBIG' },
    { id: 'sss', label: 'SSS' },
  ];

  const coverageOptions = [
    { value: 'Myself', label: 'Myself Only' },
    { value: 'Children', label: 'Children' },
    { value: 'Spouse', label: 'Spouse' },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name.includes('address')) {
      const addressField = name.split('.')[1];
      setFormData({
        ...formData,
        address: { ...formData.address, [addressField]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    setFormData({ ...formData, [type]: file });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(formData);
      toast.success("Enrollment submitted successfully!");
    } catch (error) {
      console.error("Error submitting enrollment:", error);
      toast.error("Error submitting enrollment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Benefits Enrollment";
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
      <h1 className="text-3xl text-center font-bold mb-4">Benefits Enrollment</h1>

      <form onSubmit={handleSubmit}>
        <h2 className="text-1xl font-bold mb-4 mt-6">Employee Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="form-control">
            <label className="label" htmlFor="last-name">Last Name</label>
            <input 
              type="text" 
              id="last-name" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange}
              className="input input-bordered" 
              required 
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="first-name">First Name</label>
            <input 
              type="text" 
              id="first-name" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange}
              className="input input-bordered" 
              required 
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="middle-name">Middle Name</label>
            <input 
              type="text" 
              id="middle-name" 
              name="middleName" 
              value={formData.middleName} 
              onChange={handleChange}
              className="input input-bordered" 
            />
          </div>
        </div>

        <div className='flex gap-6'>
          <div className="form-control w-1/2">
            <label className="label" htmlFor="date-of-birth">Date of Birth</label>
            <input 
              type="date" 
              id="date-of-birth" 
              name="dateOfBirth" 
              value={formData.dateOfBirth} 
              onChange={handleChange}
              className="input input-bordered" 
              required 
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">Gender</label>
            <select 
              name="gender" 
              className="select select-bordered w-full" 
              required 
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <h2 className="text-1xl font-bold mb-4 mt-6">Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label" htmlFor="street">Street</label>
            <input 
              type="text" 
              id="street" 
              name="address.street" 
              value={formData.address.street} 
              onChange={handleChange}
              className="input input-bordered" 
              required 
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="municipality">Municipality</label>
            <input 
              type="text" 
              id="municipality" 
              name="address.municipality" 
              value={formData.address.municipality} 
              onChange={handleChange}
              className="input input-bordered" 
              required 
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="province">Province</label>
            <input 
              type="text" 
              id="province" 
              name="address.province" 
              value={formData.address.province} 
              onChange={handleChange}
              className="input input-bordered" 
              required 
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="postal-code">Postal Code</label>
            <input 
              type="text" 
              id="postal-code" 
              name="address.postalCode" 
              value={formData.address.postalCode} 
              onChange={handleChange}
              className="input input-bordered" 
              required 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label" htmlFor="phone-number">Phone Number</label>
            <input 
              type="tel" 
              id="phone-number" 
              name="phoneNumber" 
              value={formData.phoneNumber} 
              onChange={handleChange}
              className="input input-bordered" 
              required 
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              className="input input-bordered" 
              required 
            />
          </div>
        </div>

        <h2 className="text-1xl font-bold mb-4 mt-6">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label" htmlFor="selected-benefit">Select Benefit</label>
            <select 
              id="selected-benefit" 
              name="benefitDetails" 
              value={formData.benefitDetails} 
              onChange={handleChange}
              className="select select-bordered w-full"
              required
            >
              <option value="">Select a benefit</option>
              {benefitOptions.map((benefit) => (
                <option key={benefit.id} value={benefit.id}>{benefit.label}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label className="label" htmlFor="coverage-type">Select Beneficiary</label>
            <select 
              id="coverage-type" 
              name="coverageType" 
              value={formData.coverageType} 
              onChange={handleChange}
              className="select select-bordered w-full" 
              required
            >
              <option value="">Select an option</option>
              {coverageOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        {formData.benefitDetails === 'sss' && (
          <div className="form-control mb-4">
            <label className="label" htmlFor="sss-number">SSS Number</label>
            <input 
              type="text" 
              id="sss-number" 
              name="sssNumber" 
              value={formData.sssNumber} 
              onChange={handleChange}
              className="input input-bordered" 
              required 
            />
          </div>
        )}

        {formData.benefitDetails === 'pagibig' && (
          <div className="form-control mb-4">
            <label className="label" htmlFor="pag-ibig-id">Pag-IBIG ID</label>
            <input 
              type="text" 
              id="pag-ibig-id" 
              name="pagIbigId" 
              value={formData.pagIbigId} 
              onChange={handleChange}
              className="input input-bordered" 
              required 
            />
          </div>
        )}

        {formData.benefitDetails === 'philhealth' && (
          <div className="form-control mb-4">
            <label className="label" htmlFor="philhealth-id">PhilHealth ID</label>
            <input 
              type="text" 
              id="philhealth-id" 
              name="philHealthId" 
              value={formData.philHealthId} 
              onChange={handleChange}
              className="input input-bordered" 
              required 
            />
          </div>
        )}

        {/* Conditional rendering for beneficiary input */}
        {(formData.coverageType === 'Spouse' || formData.coverageType === 'Children') && (
          <div className="form-control mb-4">
            <label className="label" htmlFor="beneficiary-name">Beneficiary Name(s)</label>
            <input 
              type="text" 
              id="beneficiary-name" 
              name="beneficiaryName" 
              value={formData.beneficiaryName} 
              onChange={handleChange}
              className="input input-bordered" 
              required 
              placeholder={formData.coverageType === 'Spouse' ? 'Enter Spouse Name' : 'Enter Children Names (comma-separated)'}
            />
          </div>
        )}

<h2 className="text-1xl font-bold mb-4 mt-6">Upload IDs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label" htmlFor="front-id-file">Upload Front ID</label>
            <input 
              type="file" 
              id="front-id-file" 
              onChange={(e) => handleFileChange(e, 'frontIdFile')}
              className="file-input file-input-bordered" 
              accept="image/*"
              required 
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="back-id-file">Upload Back ID</label>
            <input 
              type="file" 
              id="back-id-file" 
              onChange={(e) => handleFileChange(e, 'backIdFile')}
              className="file-input file-input-bordered" 
              accept="image/*"
              required 
            />
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <button 
            type="submit" 
            className={`btn btn-primary ${loading ? 'loading' : ''}`} 
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Enrollment'}
          </button>
        </div>
      </form>
      
      <ToastContainer />
    </div>
  );
};

export default BenefitsEnrollment;
