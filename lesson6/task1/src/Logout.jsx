import React from 'react';

import './buttons.scss';

const Logout = ({ onLogout }) => (
  <button onClick={onLogout} className="btn logout">
    Logout
  </button>
);

export default Logout;
