import React from 'react';
import {Routes,Route} from 'react-router-dom';
import LogIn from './pages/public/LogIn';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element="Home"/>
        <Route path="/login" element={<LogIn/>}/>
      </Routes>
    </div>
  )
}

export default App