import React, { Component } from 'react';

import './status.scss';

export default class ConnectionStatus extends Component {
  state = {
    status: 'Online',
    className: 'status',
  };

  componentDidMount() {
    window.addEventListener('online', this.onResize);
    window.addEventListener('offline', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    window.addEventListener('offline', this.onResize);
  }

  onConnectionChange = () => {
    this.setState(({ status, className }) => ({
      status: status === 'Online' ? 'Offline' : 'Online',
      className: className === 'status' ? 'status status_offline' : 'status',
    }));
  };

  render() {
    return <div className={this.state.status}>{this.state.status}</div>;
  }
}
