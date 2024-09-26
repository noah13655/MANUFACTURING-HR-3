import React, { useEffect, useState } from 'react';
import { useIncentiveStore } from '../../../store/incentiveStore';

const IncentivedsOverview = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [incentivesName, setincentivesName] = useState("");
    const [incentivesDescription, setincentivesDescription] = useState("");
    const [incentivesType, setincentivesType] = useState("");
    const [error, setError] = useState("");

    const [editingIncentiveId, setEditingIncentiveId] = useState(null); 

    const { createIncentive, fetchIncentive, incentive: incentives, deleteIncentive, updateIncentive } = useIncentiveStore();

    const handleCreateIncentives= async (e) => {
        e.preventDefault();
        try {
            if (!incentivesName || !incentivesDescription || !incentivesType) {
                setError("All fields required!");
                return;
            }
            const result = await createIncentive({ incentivesName, incentivesDescription, incentivesType, });
            if (!result) {
                setError("Incentives already exist!");
                return;
            }
            setError("");
            console.log("Incentives created successfully!", true);
            await fetchIncentive();
            resetForm();
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteIncentive = async (id) => {
        console.log("Attempting to delete incentive with ID:", id);
        const result = await deleteIncentive(id);
        if (!result) {
            console.error("Failed to delete incentive:", result);
        } else {
            console.log("Incentive deleted successfully!", result);
        }
    };

    const handleEditIncentive = (incentive) => {
        setincentivesName(incentive.incentivesName);
        setincentivesDescription(incentive.incentivesDescription);
        setincentivesType(incentive.incentivesType);
        setEditingIncentiveId(incentive._id); 
        setIsCreating(true); 
    };

    const handleUpdateIncentive = async (e) => {
        e.preventDefault();
        try {
            if (!incentivesName || !incentivesDescription || !incentivesType) {
                setError("All fields required!");
                return;
            } 
            const result = await updateIncentive(editingIncentiveId, { incentivesName, incentivesDescription, incentivesType});
            if (!result) {
                setError("Failed to update incentive!");
                return;
            }
            console.log("Incentive updated successfully!", result);
            await fetchIncentive();
            resetForm();
        } catch (error) {
            console.log(error);
        }
    };

    const resetForm = () => {
        setincentivesName("");
        setincentivesDescription("");
        setincentivesType("");
        setEditingIncentiveId(null);
        setError("");
    };

    const toggleCreateForm = () => {
        resetForm(); 
        setIsCreating((prev) => !prev); 
    };

    useEffect(() => {
        fetchIncentive();
    }, [fetchIncentive]);

    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold text-center mb-4">Incentive Overview</h2>
            <div className="flex items-center mb-4">
                <button className='btn btn-primary mr-2' onClick={toggleCreateForm}>
                    {isCreating ? "Cancel" : "Create Incentive"}
                </button>

                {isCreating && (
                    <form onSubmit={editingIncentiveId ? handleUpdateIncentive : handleCreateIncentives} className="flex items-center">
                        <input
                            type="text"
                            id="incentivesName"
                            placeholder="Enter Incentive name"
                            value={incentivesName}
                            onChange={(e) => setincentivesName(e.target.value)}
                            className="mr-2"
                        />
                        <input
                            type="text"
                            id="incentivesDescription"
                            placeholder="Enter Description"
                            value={incentivesDescription}
                            onChange={(e) => setincentivesDescription(e.target.value)}
                            className="mr-2"
                        />
                        <input
                            type="text"
                            id="incentivesType"
                            placeholder="Enter Type"
                            value={incentivesType}
                            onChange={(e) => setincentivesType(e.target.value)}
                            className="mr-2"
                        />
                       
                        

                        <button type="submit" className='btn btn-success'>
                            {editingIncentiveId ? "Update" : "Create"}
                        </button>
                    </form>
                )}
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            </div>

            <table className="table table-zebra w-full border border-gray-300">
                <thead>
                    <tr>
                        <th>Incentives Name</th>
                        <th>Description</th>
                        <th>Incentives Type</th>
                        <th colSpan={3} className='justify-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(incentives) && incentives.length > 0 ? (
                        incentives.map((incentive) => (
                            <tr key={`${incentive._id}-${incentive.incentivesName}`}>
                                <td>{incentive.incentivesName || 'N/A'}</td>
                                <td>{incentive.incentivesDescription || 'N/A'}</td>
                                <td>{incentive.incentivesType || 'N/A'}</td>
                                <td><button onClick={() => handleEditIncentive(incentive)} className='btn btn-edit'>Edit</button></td>
                                <td>
                                    <button onClick={() => handleDeleteIncentive(incentive._id)} className='btn btn-danger'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">No incentive found!</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default IncentivedsOverview;
