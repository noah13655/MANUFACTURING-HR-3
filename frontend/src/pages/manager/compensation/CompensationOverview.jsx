import { Link } from 'react-router-dom';
import { FaChartLine, FaBalanceScale, FaUsers } from 'react-icons/fa';
import { AiOutlineStock, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { useEffect } from 'react';

const CompensationOverview = () => {
  useEffect(() => {
    document.title = 'Compensation Overview';
  }, []); 
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Compensation Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <FaChartLine className="text-3xl text-green-600 mr-3" />
            <h2 className="text-xl font-semibold">Salary Planning</h2>
          </div>
          <p className="mt-2 text-gray-600">
            Plan and adjust employee salaries based on performance, market trends, and company policies.
          </p>
          <Link to="/compensation-planning" className="mt-4 inline-block text-blue-500 hover:underline">
            Manage Salary Planning
          </Link>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <FaBalanceScale className="text-3xl text-green-600 mr-3" />
            <h2 className="text-xl font-semibold">Salary Structure</h2>
          </div>
          <p className="mt-2 text-gray-600">
            Define and implement a structured salary system for all positions within the organization.
          </p>
          <Link to="/salary-structure" className="mt-4 inline-block text-blue-500 hover:underline">
            View Salary Structure
          </Link>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <AiOutlineFundProjectionScreen className="text-3xl text-teal-600 mr-3" />
            <h2 className="text-xl font-semibold">Total Rewards Overview</h2>
          </div>
          <p className="mt-2 text-gray-600">
            View the complete rewards package including base salary, bonuses, benefits, and more.
          </p>
          <Link to="/total-rewards" className="mt-4 inline-block text-blue-500 hover:underline">
            View Total Rewards
          </Link>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <FaUsers className="text-3xl text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold">Equity Adjustments</h2>
          </div>
          <p className="mt-2 text-gray-600">
            Manage employee equity compensation to ensure fairness and compliance with corporate policies.
          </p>
          <Link to="/equity-adjustments" className="mt-4 inline-block text-blue-500 hover:underline">
            Handle Equity Adjustments
          </Link>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <AiOutlineStock className="text-3xl text-purple-600 mr-3" />
            <h2 className="text-xl font-semibold">Market Analysis</h2>
          </div>
          <p className="mt-2 text-gray-600">
            Compare salaries against market benchmarks to ensure competitive compensation packages.
          </p>
          <Link to="/market-analysis" className="mt-4 inline-block text-blue-500 hover:underline">
            Perform Market Analysis
          </Link>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <FaUsers className="text-3xl text-orange-600 mr-3" />
            <h2 className="text-xl font-semibold">Grievance Request</h2>
          </div>
          <p className="mt-2 text-gray-600">
            Submit a request for compensation regarding grievances within the organization.
          </p>
          <Link to="/grievance-request" className="mt-4 inline-block text-blue-500 hover:underline">
            Manage Grievance Requests
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CompensationOverview;
