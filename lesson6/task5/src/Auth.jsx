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

// const Auth = () => {
//   const [project, setProject] = useState({ isLogged: false, isSpinner: false });

//   const onLogin = () => {
//     setProject({ ...project, isSpinner: true });

//     setTimeout(() => {
//       setProject({ isSpinner: false, isLogged: true });
//     }, 2000);
//   };

//   const onLogout = () => {
//     setProject({ ...project, isLogged: false });
//   };

//   return (
//     <>
//       {!project.isSpinner && project.isLogged && <Logout onLogout={onLogout} />}
//       {!project.isSpinner && !project.isLogged && <Login onLogin={onLogin} />}
//       {project.isSpinner && <Spinner size="50px" />}
//     </>
//   );
// };

// export default Auth;
