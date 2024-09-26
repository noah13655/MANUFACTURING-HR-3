/* packages */
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/* store */
import { useAuthStore } from './store/authStore';

/* public */
import Home from './pages/public/Home';
import LogIn from './pages/public/LogIn';

/* components */
import Loading from './components/Loading';
import ProtectedRoute from './components/ProtectedRoute';
import RedirectAuthenticatedUser from './components/RedirectAuthenticatedUser';

/* manager */
import ManagerDashboard from './pages/manager/ManagerDashboard';
import EmployeeDashboard from './pages/employee/EmployeeDashboard';
import ManagerSidebar from './pages/manager/ManagerSidebar';
import Search from './pages/manager/Search';

/* userlist */
import UserList from './pages/manager/user/UserList';
import AttendanceInfo from './pages/manager/user/AttendanceInfo';

/* payroll processing */
import SalaryComputation from './pages/manager/payroll/SalaryComputation';
import DeductionsManagement from './pages/manager/payroll/DeductionsManagement';
import PayrollDistribution from './pages/manager/payroll/PayrollDistribution';
import ComplianceTracking from './pages/manager/payroll/ComplianceTracking';
import RequestBudget from './pages/manager/payroll/RequestBudget';

/* benefits administration */
import BenefitsOverview from './pages/manager/benefits/BenefitsOverview';
import EnrollmentSubmission from './pages/manager/benefits/EnrollmentSubmission';
import LeaveRequest from './pages/manager/benefits/LeaveRequest';
import Deductions from './pages/manager/benefits/Deductions';

/* incentives management */
import PerformanceBasedBonuses from './pages/manager/incentives/PerformanceBasedBonuses';
import RecognitionPrograms from './pages/manager/incentives/RecognitionPrograms';
import SalesCommissions from './pages/manager/incentives/SalesCommissions';
import ProfitSharing from './pages/manager/incentives/ProfitSharing';

/* compensation planning */
import SalaryPlanning from './pages/manager/compensation/SalaryPlanning';
import MarketAnalysis from './pages/manager/compensation/MarketAnalysis';
import EquityAdjustments from './pages/manager/compensation/EquityAdjustments';
import TotalRewards from './pages/manager/compensation/TotalRewards';

/* predictive analysis */
import EmployeeAnalytics from './pages/manager/predictive/EmployeeAnalytics';
import FinancialAnalytics from './pages/manager/predictive/FinancialAnalytics';
import OperationalAnalytics from './pages/manager/predictive/OperationAnalytics';

/* employee */
import EmployeeSidebar from './pages/employee/EmployeeSidebar';

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
      <div className="flex flex-1">
        {isAuthenticated ? (
          <>
            {user?.role === 'manager' ? <ManagerSidebar /> : <EmployeeSidebar />}
            <main className="flex-1 p-4 flex flex-col">
              <Search />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Navigate to={user?.role === 'manager' ? '/dashboard' : '/dashboard'} replace />} />
                  <Route path="/login" element={<RedirectAuthenticatedUser><LogIn /></RedirectAuthenticatedUser>} />

                  {user?.role === 'manager' && (
                    <>
                      <Route path="/dashboard" element={<ProtectedRoute><ManagerDashboard /></ProtectedRoute>} />
                      
                      {/* user list */}
                      <Route path="/user-list" element={<ProtectedRoute><UserList /></ProtectedRoute>} />
                      <Route path="/attendance-info" element={<ProtectedRoute><AttendanceInfo /></ProtectedRoute>} />
                      
                      {/* payroll processing */}
                      <Route path="/salary-computation" element={<ProtectedRoute><SalaryComputation /></ProtectedRoute>} />
                      <Route path="/deductions-management" element={<ProtectedRoute><DeductionsManagement /></ProtectedRoute>} />
                      <Route path="/payroll-distribution" element={<ProtectedRoute><PayrollDistribution /></ProtectedRoute>} />
                      <Route path="/request-budget" element={<ProtectedRoute><RequestBudget /></ProtectedRoute>} />
                      <Route path="/compliance-tracking" element={<ProtectedRoute><ComplianceTracking /></ProtectedRoute>} />
                      
                      {/* benefits administration */}
                      <Route path="/benefits-overview" element={<ProtectedRoute><BenefitsOverview /></ProtectedRoute>} />
                      <Route path="/enrollment-submission" element={<ProtectedRoute><EnrollmentSubmission /></ProtectedRoute>} />
                      <Route path="/leave-request" element={<ProtectedRoute><LeaveRequest /></ProtectedRoute>} />
                      <Route path="/deductions" element={<ProtectedRoute><Deductions /></ProtectedRoute>} />
                      
                      {/* incentives management */}
                      <Route path="/performance-based-bonuses" element={<ProtectedRoute><PerformanceBasedBonuses /></ProtectedRoute>} />
                      <Route path="/recognition-programs" element={<ProtectedRoute><RecognitionPrograms /></ProtectedRoute>} />
                      <Route path="/sales-commissions" element={<ProtectedRoute><SalesCommissions /></ProtectedRoute>} />
                      <Route path="/profit-sharing" element={<ProtectedRoute><ProfitSharing /></ProtectedRoute>} />
                      
                      {/* compensation */}
                      <Route path="/salary-planning" element={<ProtectedRoute><SalaryPlanning /></ProtectedRoute>} />
                      <Route path="/market-analysis" element={<ProtectedRoute><MarketAnalysis /></ProtectedRoute>} />
                      <Route path="/equity-adjustments" element={<ProtectedRoute><EquityAdjustments /></ProtectedRoute>} />
                      <Route path="/total-rewards" element={<ProtectedRoute><TotalRewards /></ProtectedRoute>} />
                      
                      {/* analytics */}
                      <Route path="/operational-analytics" element={<ProtectedRoute><OperationalAnalytics /></ProtectedRoute>} />
                      <Route path="/employee-analytics" element={<ProtectedRoute><EmployeeAnalytics /></ProtectedRoute>} />
                      <Route path="/financial-analytics" element={<ProtectedRoute><FinancialAnalytics /></ProtectedRoute>} />
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
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default App;
