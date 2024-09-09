import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/public/Home';
import LogIn from './pages/public/LogIn';

import ManagerDashboard from './pages/manager/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import RedirectAuthenticatedUser from './components/RedirectAuthenticatedUser';

import ManagerSidebar from './pages/manager/ManagerSidebar';
import Search from './pages/manager/Search';

import { useAuthStore } from './store/authStore';

const App = () => {
  const { checkAuth, isAuthenticated } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">

          {/* Private Route */}
        {isAuthenticated && (
          <>
            <ManagerSidebar />
            <main className="flex-1 p-4 flex flex-col">
              <Search />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<RedirectAuthenticatedUser> <Home/> </RedirectAuthenticatedUser>} />
                  <Route path="/login" element={<RedirectAuthenticatedUser> <LogIn/> </RedirectAuthenticatedUser>} />

                  <Route path="/dashboard" element={<ProtectedRoute> <ManagerDashboard/> </ProtectedRoute>} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </div>
            </main>
          </>
        )}
            {/* Public route */}
        {!isAuthenticated && (
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<LogIn/>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
        
      </div>
    </div>
  );
};

export default App;
