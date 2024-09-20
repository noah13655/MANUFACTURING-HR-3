import React, { useState } from 'react';

const defaultBenefitsUtilization = [
  { id: 1, benefit: 'Health Insurance', utilizationRate: 80, cost: 1000 },
  { id: 2, benefit: 'Dental Insurance', utilizationRate: 70, cost: 500 },
  { id: 3, benefit: 'Vision Insurance', utilizationRate: 60, cost: 300 },
  { id: 4, benefit: 'Life Insurance', utilizationRate: 50, cost: 200 },
  { id: 5, benefit: 'Disability Insurance', utilizationRate: 40, cost: 150 },
];

const BenefitsUtilizationAnalysis = () => {
  const [benefitsUtilization, setBenefitsUtilization] = useState(defaultBenefitsUtilization);
  const [newBenefit, setNewBenefit] = useState('');
  const [newUtilizationRate, setNewUtilizationRate] = useState(0);
  const [newCost, setNewCost] = useState(0);

  const handleAddBenefit = () => {
    const newBenefitsUtilization = {
      id: benefitsUtilization.length + 1,
      benefit: newBenefit,
      utilizationRate: newUtilizationRate,
      cost: newCost,
    };
    setBenefitsUtilization([...benefitsUtilization, newBenefitsUtilization]);
    setNewBenefit('');
    setNewUtilizationRate(0);
    setNewCost(0);
  };

  const handleRemoveBenefit = (id) => {
    setBenefitsUtilization(benefitsUtilization.filter((benefit) => benefit.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold text-white-900">Benefits Utilization Analysis</h1>
      <div className="flex flex-col mt-4">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Benefit</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilization Rate (%)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {benefitsUtilization.map((benefit) => (
                    <tr key={benefit.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{benefit.benefit}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{benefit.utilizationRate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{benefit.cost}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          className="text-red-600 hover:text-red-900"
                          onClick={() => handleRemoveBenefit(benefit.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h2 className="text-xl font-bold text-white-900">Add New Benefit</h2>
        <div className="flex flex-col mt-2">
          <label className="text-sm text-gray-500">Benefit</label>
          <input
            type="text"
            value={newBenefit}
            onChange={(e) => setNewBenefit(e.target.value)}
            className="mt-1 input input-bordered w-full"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-sm text-gray-500">Utilization Rate (%)</label>
          <input
            type="number"
            value={newUtilizationRate}
            onChange={(e) => setNewUtilizationRate(Number(e.target.value))}
            className="mt-1 input input-bordered w-full"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-sm text-gray-500">Cost</label>
          <input
            type="number"
            value={newCost}
            onChange={(e) => setNewCost(Number(e.target.value))}
            className="mt-1 input input-bordered w-full"
          />
        </div>
        <button
          className="mt-2 btn btn-primary"
          onClick={handleAddBenefit}
        >
          Add Benefit
        </button>
      </div>
    </div>
  );
};

export default BenefitsUtilizationAnalysis;
