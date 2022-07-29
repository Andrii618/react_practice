import React from 'react';

import './login.scss';

const Login = ({ onLogin }) => (
  <button className="login btn" onClick={onLogin}>
    Login
  </button>
);

export default Login;
