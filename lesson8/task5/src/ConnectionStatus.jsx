import React, { Component } from 'react';

import Offline from './Offline';
import Online from './Online';

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
    if (this.state.status === 'online') {
      return <Online />;
    }

    return <Offline />;
  }
}
