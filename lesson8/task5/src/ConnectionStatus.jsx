import React, { Component } from 'react';

import './status.scss';

export default class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.onConnectionChange);
    window.addEventListener('offline', this.onConnectionChange);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onConnectionChange);
    window.removeEventListener('offline', this.onConnectionChange);
  }

  onConnectionChange = event => {
    this.setState({ status: event.type });
  };

  render() {
    const statusClass = this.state.status === 'online' ? '' : 'status_offline';

    return <div className={`status ${statusClass}`}>{this.state.status}</div>;
  }
}
