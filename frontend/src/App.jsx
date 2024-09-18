import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/public/Home';
import LogIn from './pages/public/LogIn';

import ManagerDashboard from './pages/manager/ManagerDashboard';
import EmployeeDashboard from './pages/employee/EmployeeDashboard';

import ProtectedRoute from './components/ProtectedRoute';
import RedirectAuthenticatedUser from './components/RedirectAuthenticatedUser';

import ManagerSidebar from './pages/manager/ManagerSidebar';
import EmployeeSidebar from './pages/employee/EmployeeSidebar';

import Search from './pages/manager/Search';
import UserList from './pages/manager/user/UserList';

import { useAuthStore } from './store/authStore';

const App = () => {
  const { checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        {isAuthenticated ? (
          <>
            {user?.role === 'manager' ? <ManagerSidebar /> : user?.role === 'employee' ? <EmployeeSidebar /> : null}
            <main className="flex-1 p-4 flex flex-col">
              <Search />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<RedirectAuthenticatedUser> <Home /> </RedirectAuthenticatedUser>} />
                  <Route path="/login" element={<RedirectAuthenticatedUser> <LogIn /> </RedirectAuthenticatedUser>} />
                  
                  {user?.role === 'manager' && (
                    <>
                      <Route path="/dashboard" element={<ProtectedRoute> <ManagerDashboard /> </ProtectedRoute>} />
                      <Route path="/user-list" element={<ProtectedRoute> <UserList /> </ProtectedRoute>} />
                    </>
                  )}
                  {user?.role === 'employee' && (
                    <Route path="/dashboard" element={<ProtectedRoute> <EmployeeDashboard /> </ProtectedRoute>} />
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
