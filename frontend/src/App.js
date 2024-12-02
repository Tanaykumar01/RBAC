import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './components/login';
import { Register } from './components/register';
import { FrontPage } from './components/frontPage';
import { AdminRoute, ManagerRoute, UserRoute } from './components/rbacRoutes';
function App() {
  return (
    <div className='main'>
        <div className="routes">
          <Routes>
            <Route path="/" element={<FrontPage />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/user" element={<UserRoute />} />
            <Route path="/manager" element={<ManagerRoute />} />
            <Route path="/admin" element={<AdminRoute />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;