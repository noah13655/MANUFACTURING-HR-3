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
import RequestBudget from './pages/manager/payroll/RequestBudget';
import PayrollDistribution from './pages/manager/payroll/PayrollDistribution';
import GenerateReports from './pages/manager/payroll/GenerateReports';
import PayrollHistory from './pages/manager/payroll/PayrollHistory';

/* compensation  */
import CompensationOverview from './pages/manager/compensation/CompensationOverview'; 
import CompensationPlanning from './pages/manager/compensation/CompensationPlanning';
import SalaryStructure from './pages/manager/compensation/SalaryStructure';
import MarketAnalysis from './pages/manager/compensation/MarketAnalysis';
import GrievanceRequest from './pages/manager/compensation/GrievanceRequest';

/* benefits administration */
import BenefitsAdministration from './pages/manager/benefits/BenefitsAdministration';
import EnrollmentSubmission from './pages/manager/benefits/EnrollmentSubmission';
import Deductions from './pages/manager/benefits/Deductions';

/* incentives management */
import IncentivesManagements from './pages/manager/Incentives/IncentivesManagements';
import IncentivesRequest from './pages/manager/Incentives/IncentivesRequest';
import SalesCommissions from './pages/manager/Incentives/SalesCommissions';
import PerformanceMetrics from './pages/manager/Incentives/PerformanceMetrics';
import RecognitionPrograms from './pages/manager/Incentives/RecognitionPrograms';

/* predictive analysis */
import PredictiveAnalytics from './pages/manager/predictive/PredictiveAnalytics';
import BehavioralAnalytics from './pages/manager/predictive/BehaviouralAnalytics';

/* employee */
import EmployeeList from './pages/EmployeeList';

import Profile from './pages/employee/Profile';

import EBenefitsOverview from './pages/employee/benefits/EBenefitsOverview';
import BenefitsEnrollment from "./pages/employee/benefitsManagement/BenefitsEnrollment";
import MyDeductions from './pages/employee/benefitsManagement/MyDeductions';

import EIncentivesOverview from './pages/employee/incentives/EIncentivesOverview';
import MyCommissions from './pages/employee/incentives/MyCommissions';
import IncentiveRequest from './pages/employee/incentives/IncentiveRequest';
import IncentiveHistory from './pages/employee/incentives/IncentiveHistory';

import MySalaryInfo from './pages/employee/payroll/MySalaryInfo';
import SalaryRequest from './pages/employee/payroll/SalaryRequest';
import MyPaySlip from './pages/employee/payroll/MyPaySlip';
import MyOvertimeBonuses from './pages/employee/payroll/MyOvertimeBonuses';

import VerifyAccount from './components/VerifyAccount';
import ResendVerification from './components/ResendVerification';
import SettingsPage from './components/SettingsPage';
import Security from './components/Security';

const App = () => {
  const { checkAuth, isAuthenticated, user } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarVisible((prev) => {
      console.log("Sidebar visible:", !prev);
      return !prev;
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

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

  // {condition ? (trueCase) : (falseCase)}
  // {condition1 ? (
  //   // Case for condition1 being true
  //   <ComponentForCondition1 />
  // ) : condition2 ? (
  //   // Case for condition2 being true
  //   <ComponentForCondition2 />
  // ) : condition3 ? (
  //   // Case for condition3 being true
  //   <ComponentForCondition3 />
  // ) : (
  //   // Default case if none of the conditions are true
  //   <DefaultComponent />
  // )}

  // {user?.role === 'Manager' ? (
  //   <ProtectedRoute>
  //     <ManagerDashboard />
  //   </ProtectedRoute>
  // ) : user?.role === 'Employee' ? (
  //   <ProtectedRoute>
  //     <EmployeeDashboard />
  //   </ProtectedRoute>
  // ) : (
  //   <GuestDashboard />
  // )}
  

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'dark' : ''}`}>      <div className="flex flex-1 flex-row">
        {isAuthenticated ? (
          <>
            {/* Responsive Sidebar */}
            {isSidebarVisible && (user?.role === 'Manager' ? <ManagerSidebar /> : <EmployeeSidebar />)}            
            <main className="flex-1 p-4 flex flex-col">
            <Search onToggleSidebar={handleToggleSidebar} />
              <div className="flex-1 max-h-screen md:max-h-auto overflow-y-auto">
                <Routes>
                  <Route path="/" element={<Navigate to={user?.role === 'Manager' ? '/dashboard' : '/dashboard'} replace />} />
                  <Route path="/login" element={<RedirectAuthenticatedUser><LogIn /></RedirectAuthenticatedUser>} />

                  {user?.role === 'Manager' && (
                    <>
                    
                      <Route path="/dashboard" element={<ProtectedRoute><ManagerDashboard /></ProtectedRoute>} />
                      <Route path="/settings" element={<ProtectedRoute><SettingsPage/></ProtectedRoute>} />  
                      <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />  
                      <Route path="/security" element={<ProtectedRoute><Security/></ProtectedRoute>} />  
                      
                      <Route path="/employee-list" element={<ProtectedRoute><EmployeeList /></ProtectedRoute>} />                    

                      {/* Payroll Processing */}
                      <Route path="/payroll-management" element={<ProtectedRoute><PayrollProcessing /></ProtectedRoute>} />
                      <Route path="/salary-computation" element={<ProtectedRoute><SalaryComputation /></ProtectedRoute>} />
                      <Route path="/deductions-management" element={<ProtectedRoute><DeductionsManagement /></ProtectedRoute>} />
                      <Route path="/request-budget" element={<ProtectedRoute><RequestBudget /></ProtectedRoute>} />
                      <Route path="/payroll-distribution" element={<ProtectedRoute><PayrollDistribution /></ProtectedRoute>} />
                      <Route path="/generate-reports" element={<ProtectedRoute><GenerateReports /></ProtectedRoute>} />
                      <Route path="/payroll-history" element={<ProtectedRoute><PayrollHistory /></ProtectedRoute>} />
                      
                      {/* Compensation */}
                      <Route path="/compensation-overview" element={<ProtectedRoute><CompensationOverview /></ProtectedRoute>} />
                      <Route path="/compensation-planning" element={<ProtectedRoute><CompensationPlanning /></ProtectedRoute>} />
                      <Route path="/salary-structure" element={<ProtectedRoute><SalaryStructure /></ProtectedRoute>} />
                      <Route path="/market-analysis" element={<ProtectedRoute><MarketAnalysis /></ProtectedRoute>} />
                      <Route path="/grievance-request" element={<ProtectedRoute><GrievanceRequest /></ProtectedRoute>} />
                      

                      {/* Benefits Administration */}
                      <Route path="/benefits-administration" element={<ProtectedRoute><BenefitsAdministration/></ProtectedRoute>} />
                      <Route path="/enrollment-submission" element={<ProtectedRoute><EnrollmentSubmission /></ProtectedRoute>} />
                      <Route path="/deductions" element={<ProtectedRoute><Deductions /></ProtectedRoute>} />
                      
                      {/* Incentives Management */}
                      <Route path="/incentives-management" element={<ProtectedRoute><IncentivesManagements /></ProtectedRoute>} />
                      <Route path="/incentives-request" element={<ProtectedRoute><IncentivesRequest /></ProtectedRoute>} />
                      <Route path="/sales-commissions" element={<ProtectedRoute><SalesCommissions /></ProtectedRoute>} />
                      <Route path="/performance-metrics" element={<ProtectedRoute><PerformanceMetrics /></ProtectedRoute>} />
                      <Route path="/recognition-programs" element={<ProtectedRoute><RecognitionPrograms /></ProtectedRoute>} />

                      {/* Analytics */}
                      <Route path="/predictive-analytics" element={<ProtectedRoute><PredictiveAnalytics /></ProtectedRoute>} />
                      <Route path="/behavioral-analytics" element={<ProtectedRoute><BehavioralAnalytics /></ProtectedRoute>} />
                    </>
                  )}
                  
                  {user?.role === 'Employee' && (
                    <>
                      <Route path="/dashboard" element={<ProtectedRoute><EmployeeDashboard /></ProtectedRoute>} />                    

                      <Route path="/settings" element={<ProtectedRoute><SettingsPage/></ProtectedRoute>} />  
                      <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />  
                      <Route path="/security" element={<ProtectedRoute><Security/></ProtectedRoute>} />  
                      
                      <Route path="/benefits-overview" element={<ProtectedRoute><EBenefitsOverview /></ProtectedRoute>} />                    
                      <Route path='/benefits-enrollment' element={<ProtectedRoute><BenefitsEnrollment/></ProtectedRoute>}/>
                      <Route path='/my-deductions' element={<ProtectedRoute><MyDeductions/></ProtectedRoute>}/>

                      <Route path='/my-salary-info' element={<ProtectedRoute><MySalaryInfo/></ProtectedRoute>}/>
                      <Route path='/salary-request' element={<ProtectedRoute><SalaryRequest/></ProtectedRoute>}/>
                      <Route path='/my-pay-slip' element={<ProtectedRoute><MyPaySlip/></ProtectedRoute>}/>
                      <Route path='/my-overtime-bonuses' element={<ProtectedRoute><MyOvertimeBonuses/></ProtectedRoute>}/>

                      <Route path="/incentives-overview" element={<ProtectedRoute><EIncentivesOverview /></ProtectedRoute>} />                    
                      <Route path="/incentive-request" element={<ProtectedRoute><IncentiveRequest /></ProtectedRoute>} />                    
                      <Route path="/incentive-history" element={<ProtectedRoute><IncentiveHistory /></ProtectedRoute>} />                    
                      <Route path="/my-commissions" element={<ProtectedRoute><MyCommissions /></ProtectedRoute>} />                    
                      
                    </>
                  )}

                  <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
              </div>
            </main>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center">
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/verify-account/:token" element={<VerifyAccount />} />
            <Route path="/resend-verification" element={<ResendVerification />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
