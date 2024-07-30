import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import AdminLogin from './AdminLogin';
import UserLogin from './UserLogin';

const App = () => {
  return (
    <>
    <h1 style={{color: '#111010',paddingLeft:370,paddingBottom:50}}>Blood Bank Management System</h1>
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </Router></>
  );
};

export default App;
