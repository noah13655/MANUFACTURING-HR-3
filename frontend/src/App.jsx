/* packages */
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/* store */
import { useAuthStore } from './store/authStore';

/* public */
import LogIn from './pages/public/LogIn';

/* components */
import Loading from './components/Loading';
import ProtectedRoute from './components/ProtectedRoute';
import RedirectAuthenticatedUser from './components/RedirectAuthenticatedUser';

/* manager */
import ManagerDashboard from './pages/manager/ManagerDashboard';
import EmployeeDashboard from './pages/employee/EmployeeDashboard';
import ManagerSidebar from './pages/manager/ManagerSidebar';
import EmployeeSidebar from './pages/employee/EmployeeSidebar';
import Search from './pages/manager/Search';

/* payroll processing */
import PayrollProcessing from './pages/manager/payroll/PayrollProcessing';
import SalaryComputation from './pages/manager/payroll/SalaryComputation';
import DeductionsManagement from './pages/manager/payroll/DeductionsManagement';
import ComplianceTracking from './pages/manager/payroll/ComplianceTracking';
import RequestBudget from './pages/manager/payroll/RequestBudget';
import PayrollDistribution from './pages/manager/payroll/PayrollDistribution';
import GenerateReports from './pages/manager/payroll/GenerateReports';
import PayrollHistory from './pages/manager/payroll/PayrollHistory';

/* compensation  */
import CompensationOverview from './pages/manager/compensation/CompensationOverview'; 
import CompensationPlanning from './pages/manager/compensation/CompensationPlanning';
import SalaryStructure from './pages/manager/compensation/SalaryStructure';
import MarketAnalysis from './pages/manager/compensation/MarketAnalysis';
import EquityAdjustments from './pages/manager/compensation/EquityAdjustments';
import TotalRewards from './pages/manager/compensation/TotalRewards';
import GrievanceRequest from './pages/manager/compensation/GrievanceRequest';

/* benefits administration */
import BenefitsOverview from './pages/manager/benefits/BenefitsOverview';
import EnrollmentSubmission from './pages/manager/benefits/EnrollmentSubmission';
import LeaveRequest from './pages/manager/benefits/LeaveRequest';
import Deductions from './pages/manager/benefits/Deductions';

/* incentives management */
import IncentivesOverview from './pages/manager/incentives/IncentivesOverview';
import IncentivesRequest from './pages/manager/incentives/IncentivesRequest';
import SalesCommissions from './pages/manager/incentives/SalesCommissions';
import RecognitionPrograms from './pages/manager/incentives/RecognitionPrograms';

/* predictive analysis */
import PredictiveAnalytics from './pages/manager/predictive/PredictiveAnalytics';

/* employee */
import EBenefitsOverview from './pages/employee/benefits/EBenefitsOverview';

const App = () => {
  const { checkAuth, isAuthenticated, user } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authenticate = async () => {
      await checkAuth();
      setLoading(false);
    };
    authenticate();
  }, [checkAuth]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 flex-row">
        {isAuthenticated ? (
          <>
            {/* Responsive Sidebar */}
            {user?.role === 'manager' ? <ManagerSidebar /> : <EmployeeSidebar />}
            <main className="flex-1 p-4 flex flex-col">
              <Search />
              <div className="flex-1 overflow-y-auto">
                <Routes>
                  <Route path="/" element={<Navigate to={user?.role === 'manager' ? '/dashboard' : '/dashboard'} replace />} />
                  <Route path="/login" element={<RedirectAuthenticatedUser><LogIn /></RedirectAuthenticatedUser>} />

                  {user?.role === 'manager' && (
                    <>
                      <Route path="/dashboard" element={<ProtectedRoute><ManagerDashboard /></ProtectedRoute>} />
                      
                      {/* Payroll Processing */}
                      <Route path="/payroll-management" element={<ProtectedRoute><PayrollProcessing /></ProtectedRoute>} />
                      <Route path="/attendance" element={<ProtectedRoute><Attendance /></ProtectedRoute>} />
                      <Route path="/salary-computation" element={<ProtectedRoute><SalaryComputation /></ProtectedRoute>} />
                      <Route path="/deductions-management" element={<ProtectedRoute><DeductionsManagement /></ProtectedRoute>} />
                      <Route path="/compliance-tracking" element={<ProtectedRoute><ComplianceTracking /></ProtectedRoute>} />
                      <Route path="/request-budget" element={<ProtectedRoute><RequestBudget /></ProtectedRoute>} />
                      <Route path="/payroll-distribution" element={<ProtectedRoute><PayrollDistribution /></ProtectedRoute>} />
                      <Route path="/generate-reports" element={<ProtectedRoute><GenerateReports /></ProtectedRoute>} />
                      <Route path="/payroll-history" element={<ProtectedRoute><PayrollHistory /></ProtectedRoute>} />
                      
                      {/* Compensation */}
                      <Route path="/compensation-overview" element={<ProtectedRoute><CompensationOverview /></ProtectedRoute>} />
                      <Route path="/compensation-planning" element={<ProtectedRoute><CompensationPlanning /></ProtectedRoute>} />
                      <Route path="/salary-structure" element={<ProtectedRoute><SalaryStructure /></ProtectedRoute>} />
                      <Route path="/market-analysis" element={<ProtectedRoute><MarketAnalysis /></ProtectedRoute>} />
                      <Route path="/equity-adjustments" element={<ProtectedRoute><EquityAdjustments /></ProtectedRoute>} />
                      <Route path="/total-rewards" element={<ProtectedRoute><TotalRewards /></ProtectedRoute>} />
                      <Route path="/grievance-request" element={<ProtectedRoute><GrievanceRequest /></ProtectedRoute>} />
                      

                      {/* Benefits Administration */}
                      <Route path="/benefits-overview" element={<ProtectedRoute><BenefitsOverview /></ProtectedRoute>} />
                      <Route path="/enrollment-submission" element={<ProtectedRoute><EnrollmentSubmission /></ProtectedRoute>} />
                      <Route path="/leave-request" element={<ProtectedRoute><LeaveRequest /></ProtectedRoute>} />
                      <Route path="/deductions" element={<ProtectedRoute><Deductions /></ProtectedRoute>} />
                      
                      {/* Incentives Management */}
                      <Route path="/incentives-overview" element={<ProtectedRoute><IncentivesOverview /></ProtectedRoute>} />
                      <Route path="/incentives-request" element={<ProtectedRoute><IncentivesRequest /></ProtectedRoute>} />
                      <Route path="/sales-commissions" element={<ProtectedRoute><SalesCommissions /></ProtectedRoute>} />
                      <Route path="/recognition-programs" element={<ProtectedRoute><RecognitionPrograms /></ProtectedRoute>} />

                      {/* Analytics */}
                      <Route path="/predictive-analytics" element={<ProtectedRoute><PredictiveAnalytics /></ProtectedRoute>} />
                    </>
                  )}
                  
                  {user?.role === 'employee' && (
                    <>
                      <Route path="/dashboard" element={<ProtectedRoute><EmployeeDashboard /></ProtectedRoute>} />                    
                      <Route path="/benefits-overview" element={<ProtectedRoute><EBenefitsOverview /></ProtectedRoute>} />                    
                    </>
                  )}

                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </div>
            </main>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default App;
