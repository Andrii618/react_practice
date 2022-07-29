import React from 'react';

import './buttons.scss';

const Login = ({ onLogin }) => (
  <button onClick={onLogin} className="btn login">
    Login
  </button>
);

export default Login;
