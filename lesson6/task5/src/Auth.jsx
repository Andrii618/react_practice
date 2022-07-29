import React, { Component } from 'react';

import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  state = {
    isLoggedIn: false,
    showSpinner: false,
  };

  onLogin = () => {
    this.setState({ showSpinner: true });

    setTimeout(() => {
      this.setState({
        showSpinner: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (this.state.showSpinner) {
      return <Spinner size={'50px'} />;
    }

    return this.state.isLoggedIn ? (
      <Logout onLogout={this.onLogout} />
    ) : (
      <Login onLogin={this.onLogin} />
    );
  }
}
export default Auth;
