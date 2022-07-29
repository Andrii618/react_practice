import React from 'react';

import './login.scss';

const Logout = ({ onLogout }) => (
  <button className="logout btn" onClick={onLogout}>
    Logout
  </button>
);

export default Logout;
