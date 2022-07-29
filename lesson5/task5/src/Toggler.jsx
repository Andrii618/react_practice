import React, { Component } from 'react';

import './toggler.scss';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { toggled: false, status: 'OFF' };
  }

  toggleStatus = () => {
    this.setState(({ toggled }) => ({ toggled: !toggled, status: toggled ? 'ON' : 'OFF' }));
  };

  render() {
    return (
      <div className="toggler" onClick={this.toggleStatus}>
        {this.state.status}
      </div>
    );
  }
}
