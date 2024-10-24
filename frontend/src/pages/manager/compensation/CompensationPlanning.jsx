import { useEffect } from "react";
import { useCompensationStore } from "../../../store/compensationStore";


const CompensationPlanning = () => {

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  const {getCompensationPlans,compensationPlans} = useCompensationStore();

  useEffect(() =>{
    getCompensationPlans();
  },[getCompensationPlans])

 

  return (
    <div className="relative max-w-full mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
      <h1 className="text-3xl font-bold mb-4">Compensation Planning</h1>
      <div className="overflow-x-auto">
        <table className="table w-full text-left">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border px-4 py-2">Position</th>
              <th className="border px-4 py-2">Hourly Rate</th>
              <th className="border px-4 py-2">OT Rate</th>
              <th className="border px-4 py-2">Incentives</th>
              <th className="border px-4 py-2">Benefits</th>
              <th className="border px-4 py-2">Metrics</th>
              <th className="border px-4 py-2">Guidelines</th>
              <th className="border px-4 py-2">Effective Date</th>
              <th className="border px-4 py-2">Comments</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>   
          {Array.isArray(compensationPlans) && compensationPlans.length > 0 ? (
                    compensationPlans.map((plan) => (
                      <tr key={plan._id} className="hover:bg-neutral hover:text-white">
                        <td className="border px-4 py-2">{plan.position || 'N/A'}</td>
                        <td className="border px-4 py-2">{plan.hourlyRate || 'N/A'}</td>
                        <td className="border px-4 py-2">{plan.overTimeRate || 'N/A'}</td>
                        <td className="border px-4 py-2">{plan.incentives || 'N/A'}</td>
                <td className="border px-4 py-2">
                  {Array.isArray(plan.benefits) && plan.benefits.length > 0 ? (
                    <ul>
                      {plan.benefits.map((benefit) => (
                        <li key={benefit._id}>
                          {benefit.name}: {benefit.deduction}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    'N/A'
                  )}
                </td>                        
                <td className="border px-4 py-2">
                {Array.isArray(plan.performanceMetrics) && plan.performanceMetrics.length > 0 
                ? plan.performanceMetrics.join(', ') 
                : 'N/A'}
                </td>
                        <td className="border px-4 py-2">{plan.salaryAdjustmentGuidelines || 'N/A'}</td>
                        <td className="border px-4 py-2">{plan.effectiveDate ? formatDate(plan.effectiveDate) : 'N/A'}</td>
                        <td className="border px-4 py-2">{plan.comments || 'N/A'}</td>
                        <td className="border px-4 py-2">
                        <button className="bg-primary text-white px-4 py-2 rounded">Edit</button>
                        <button className="bg-error text-white px-4 py-2 rounded">Delete</button>
                       </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">No plans found!</td>
                    </tr>
                  )}                
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompensationPlanning;
