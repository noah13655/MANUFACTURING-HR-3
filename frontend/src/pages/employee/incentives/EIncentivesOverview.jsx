import React, { useEffect, useState } from 'react';
import { useIncentiveStore } from '../../../store/incentiveStore';


const EIncentivesOverview = () => {

    const { fetchIncentive, incentive: incentives } = useIncentiveStore();

    useEffect(() => {
        fetchIncentive();
    }, [fetchIncentive]);

    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold text-center mb-4">Incentive Overview</h2>

            <table className="table table-zebra w-full border border-gray-300">
                <thead>
                    <tr>
                        <th>Incentives Name</th>
                        <th>Description</th>
                        <th>Incentives Type</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(incentives) && incentives.length > 0 ? (
                        incentives.map((incentive) => (
                            <tr key={`${incentive._id}-${incentive.incentivesName}`}>
                                <td>{incentive.incentivesName || 'N/A'}</td>
                                <td>{incentive.incentivesDescription || 'N/A'}</td>
                                <td>{incentive.incentivesType || 'N/A'}</td>
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

export default EIncentivesOverview;
