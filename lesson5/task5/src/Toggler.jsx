import React, { Component } from 'react';

import './toggler.scss';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { active: false };
  }

  toggleStatus = () => {
    this.setState(({ active }) => ({ active: !active }));
  };

  render() {
    return (
      <div className="toggler" onClick={this.toggleStatus}>
        {this.state.active ? 'On' : 'Off'}
      </div>
    );
  }
}
