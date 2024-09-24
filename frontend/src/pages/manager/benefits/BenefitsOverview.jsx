import React, { useEffect, useState } from 'react';
import { useBenefitStore } from '../../../store/benefitStore';

const BenefitsOverview = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [benefitsName, setBenefitsName] = useState("");
    const [benefitsDescription, setBenefitsDescription] = useState("");
    const [benefitsType, setBenefitsType] = useState("");
    const [error, setError] = useState("");

    const {createBenefit,fetchBenefit,benefit:benefits,deleteBenefit} = useBenefitStore()

    const handleCreateBenefits = async (e) => {
        e.preventDefault();
        try {
            if (!benefitsName || !benefitsDescription || !benefitsType) {
                setError("All fields required!");
                return;
            }
            const result = await createBenefit({ benefitsName, benefitsDescription, benefitsType });
            if (!result) {
                setError("Benefits already exist!");
                return;
            }
            setError("");
            console.log("Benefits created successfully!", true);
            await fetchBenefit();
        } catch (error) {
            console.log(error);
        }
    };
    
    const handleDeleteBenefit = async (id) => {
      console.log("Attempting to delete benefit with ID:", id);
      const result = await deleteBenefit(id);
      if (!result) {
          console.error("Failed to delete benefit:", result);
      } else {
          console.log("Benefit deleted successfully!", result);
      }
  };
  
    useEffect(() => {
        fetchBenefit();
    }, [fetchBenefit]);

    return (
        <div className="overflow-x-auto">
            <h2>Benefits Overview</h2>
            <div className="flex items-center mb-4">
                <button className='btn btn-primary mr-2' onClick={() => setIsCreating(!isCreating)}>
                    {isCreating ? "Cancel" : "Create Benefits"}
                </button>

                {isCreating && (
                    <form onSubmit={handleCreateBenefits} className="flex items-center">
                        <input
                            type="text"
                            id="benefitsName"
                            placeholder="Enter Benefit name"
                            value={benefitsName}
                            onChange={(e) => setBenefitsName(e.target.value)}
                            className="mr-2"
                        />
                        <input
                            type="text"
                            id="benefitsDescription"
                            placeholder="Enter Description"
                            value={benefitsDescription}
                            onChange={(e) => setBenefitsDescription(e.target.value)}
                            className="mr-2"
                        />
                        <select
                            id="benefitsType"
                            value={benefitsType}
                            onChange={(e) => setBenefitsType(e.target.value)}
                            className="mr-2"
                        >
                            <option value="">Select Type</option>
                            <option value="Compensation">Compensation</option>
                            <option value="Health">Health</option>
                            <option value="Retirement">Retirement</option>
                            <option value="Financial">Financial</option>
                            <option value="Worklife Balance">Worklife Balance</option>
                        </select>
                        <button type="submit" className='btn btn-success'>Create</button>
                    </form>
                )}
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            </div>

            <table className="table table-zebra w-full border border-gray-300">
                <thead>
                    <tr>
                        <th>Benefits Name</th>
                        <th>Description</th>
                        <th>Benefits Type</th>
                        <th colSpan={3} className='justify-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
    {Array.isArray(benefits) && benefits.length > 0 ? (
        benefits.map((benefit) => (
            <tr key={`${benefit._id}-${benefit.benefitsName}`}>
                <td>{benefit.benefitsName || 'N/A'}</td>
                <td>{benefit.benefitsDescription || 'N/A'}</td>
                <td>{benefit.benefitsType || 'N/A'}</td>
                <td>View</td>
                <td>Edit</td>
                <td>
                    <button onClick={() => handleDeleteBenefit(benefit._id)} className='btn btn-danger'>
                        Delete
                    </button>
                </td>
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan="6" className="text-center">No benefits found!</td>
        </tr>
    )}
            </tbody>
            </table>
        </div>
    );
};

export default BenefitsOverview;