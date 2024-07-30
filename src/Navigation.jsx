// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
const Navigation = () => {
  return (
    <div className="navigation-container">
      <h1>Welcome to Blood Bank</h1>
      <div>
        <Link to="/user-login" className="login-link">&nbsp;&nbsp;Login as User&nbsp;</Link>
      </div>
      <div>
        <br/>
        <Link to="/admin-login" className="login-link">Login as Admin</Link>
      </div>
    </div>
  );
};

export default Navigation;
