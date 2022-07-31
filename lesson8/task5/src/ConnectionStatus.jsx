import React, { Component } from 'react';

import './status.scss';

export default class ConnectionStatus extends Component {
  state = {
    status: 'online',
    className: 'status',
  };

  componentDidMount() {
    window.addEventListener('online', this.onConnectionChange);
    window.addEventListener('offline', this.onConnectionChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onConnectionChange);
    window.removeEventListener('offline', this.onConnectionChange);
  }

  onConnectionChange = () => {
    this.setState(({ status, className }) => ({
      status: status === 'online' ? 'offline' : 'online',
      className: className === 'status' ? 'status status_offline' : 'status',
    }));
  };

  render() {
    return <div className={this.state.className}>{this.state.status}</div>;
  }
}
