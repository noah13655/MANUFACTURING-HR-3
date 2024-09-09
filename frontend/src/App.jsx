import React, { useEffect } from 'react';
import {Routes,Route} from 'react-router-dom';

import LogIn from './pages/public/LogIn';
import Dashboard from './pages/private/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import RedirectAuthenticatedUser from './components/RedirectAuthenticatedUser';

import { useAuthStore } from './store/authStore';

const App = () => {

  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth(); 
  }, [checkAuth]);

  return (
    <div>
      <Routes>
        <Route path="/" element="Home"/>
        <Route path="/login" element={<RedirectAuthenticatedUser><LogIn/></RedirectAuthenticatedUser>}/>
        
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      </Routes>
    </div>
  )
}

export default App