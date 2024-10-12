import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useIncentiveStore } from '../../../store/incentiveStore';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IncentivesManagement = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [incentivesName, setincentivesName] = useState("");
    const [incentivesDescription, setincentivesDescription] = useState("");
    const [incentivesType, setincentivesType] = useState("");
    const [editingIncentiveId, setEditingIncentiveId] = useState(null); 
    const { createIncentive, fetchIncentive, incentive: incentives, deleteIncentive, updateIncentive } = useIncentiveStore();

    const handleCreateIncentives = async (e) => {
        e.preventDefault();
        try {
            if (!incentivesName || !incentivesDescription || !incentivesType) {
                toast.error("All fields required!");
                return;
            }
            const result = await createIncentive({ incentivesName, incentivesDescription, incentivesType });
            if (!result) {
                toast.error("Incentives already exist!");
                return;
            }
            toast.success("Incentives created successfully!");
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
            toast.error("Failed to delete incentive");
            console.error("Failed to delete incentive:", result);
        } else {
            toast.error("Incentive deleted successfully!");
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
                toast.error("All fields required!");
                return;
            } 
            const result = await updateIncentive(editingIncentiveId, { incentivesName, incentivesDescription, incentivesType });
            if (!result) {
                toast.error("Failed to update incentive!");
                return;
            }
            toast.success("Incentive updated successfully!");
            console.log("Incentive updated successfully!", result);
            await fetchIncentive();
            resetForm();
        } catch (error) {
            toast.error(error);
            console.log(error);
        }
    };

    const resetForm = () => {
        setincentivesName("");
        setincentivesDescription("");
        setincentivesType("");
        setEditingIncentiveId(null)
    };

    const toggleCreateForm = () => {
        resetForm(); 
        setIsCreating((prev) => !prev); 
    };

    useEffect(() => {
        fetchIncentive();
    }, [fetchIncentive]);

    useEffect(() => {
        document.title = 'Incentives Management';
    }, []); 

    return (
        <div className="container mx-auto p-8">
            <ToastContainer/>
            <h1 className="text-3xl font-bold mb-6 text-center">Incentives Management</h1>

            {/* Incentives Overview */}
            <div className="overflow-x-auto">
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
                </div>

                <table className="table w-full">
                    <thead>
                        <tr className='bg-primary text-white'>
                            <th className="border px-4 py-2">Incentives Name</th>
                            <th className="border px-4 py-2">Description</th>
                            <th className="border px-4 py-2">Incentives Type</th>
                            <th colSpan={3} className='justify-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(incentives) && incentives.length > 0 ? (
                            incentives.map((incentive) => (
                                <tr key={`${incentive._id}-${incentive.incentivesName}`} className='hover:bg-neutral hover:text-white'>
                                    <td className="border px-4 py-2">{incentive.incentivesName || 'N/A'}</td>
                                    <td className="border px-4 py-2">{incentive.incentivesDescription || 'N/A'}</td>
                                    <td className="border px-4 py-2">{incentive.incentivesType || 'N/A'}</td>
                                    <td className="border px-4 py-2"><button onClick={() => handleEditIncentive(incentive)} className='btn btn-edit bg-primary text-white'>Edit</button></td>
                                    <td className="border px-4 py-2">
                                        <button onClick={() => handleDeleteIncentive(incentive._id)} className='btn btn-error'>
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

            {/* Management Buttons Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {/* Incentive Request Card */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Incentive Request</h2>
                        <p>
                            Submit and manage your incentive requests through this portal.
                        </p>
                        <Link to="/incentives-request" className="btn btn-primary">
                            <button>Manage Incentive Request</button>
                        </Link>
                    </div>
                </div>

                {/* Recognition Programs Card */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Recognition Programs</h2>
                        <p>
                            Explore and participate in various employee recognition programs.
                        </p>
                        <Link to="/recognition-programs" className="btn btn-primary">
                            <button>View Recognition Programs</button>
                        </Link>
                    </div>
                </div>

                {/* Sales Commissions Card */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Sales Commissions</h2>
                        <p>
                            Manage and review sales commission structures for your team.
                        </p>
                        <Link to="/sales-commissions" className="btn btn-primary">
                            <button>Manage Sales Commissions</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncentivesManagement;
