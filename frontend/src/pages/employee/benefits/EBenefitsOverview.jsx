import React, { useEffect} from 'react';
import { useBenefitStore } from '../../../store/benefitStore';

const EBenefitsOverview = () => {

    const { fetchBenefit, benefit: benefits } = useBenefitStore();

    useEffect(() => {
        fetchBenefit();
    }, [fetchBenefit]);
    

    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold text-center mb-4">Benefits Overview</h2>
            <table className="table table-zebra w-full border border-gray-300">
                <thead>
                    <tr>
                        <th>Benefits Name</th>
                        <th>Description</th>
                        <th>Benefits Type</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(benefits) && benefits.length > 0 ? (
                        benefits.map((benefit) => (
                            <tr key={`${benefit._id}-${benefit.benefitsName}`}>
                                <td>{benefit.benefitsName || 'N/A'}</td>
                                <td>{benefit.benefitsDescription || 'N/A'}</td>
                                <td>{benefit.benefitsType || 'N/A'}</td>
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

export default EBenefitsOverview;
