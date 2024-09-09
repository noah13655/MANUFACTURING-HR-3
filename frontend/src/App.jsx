import React, { useEffect } from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';

import LogIn from './pages/public/LogIn';
import Dashboard from './pages/private/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import RedirectAuthenticatedUser from './components/RedirectAuthenticatedUser';
import Home from './pages/public/Home';

import { useAuthStore } from './store/authStore';

const App = () => {

  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth(); 
  }, [checkAuth]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<RedirectAuthenticatedUser> <Home/> </RedirectAuthenticatedUser>}/>
        <Route path="/login" element={<RedirectAuthenticatedUser> <LogIn/> </RedirectAuthenticatedUser>}/>
        
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard/> </ProtectedRoute>}/>

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  )
}

export default App