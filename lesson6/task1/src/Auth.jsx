import React, { Component } from 'react';

import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

import './auth.scss';

class Auth extends Component {
  state = {
    isLoggedIn: false,
  };

  toggleLogin = () => {
    this.setState(({ isLoggedIn }) => ({
      isLoggedIn: !isLoggedIn,
    }));
  };

  render() {
    return (
      <div className="auth-panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout onLogout={this.toggleLogin} />
        ) : (
          <Login onLogin={this.toggleLogin} />
        )}
      </div>
    );
  }
}

export default Auth;
