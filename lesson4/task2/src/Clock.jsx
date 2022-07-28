import React, { Component } from 'react';

import getTimeWithOffset from './getTimeWithOffset';

import './clock.scss';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: getTimeWithOffset(props.offset),
    };

    setInterval(() => {
      this.setState({ time: getTimeWithOffset(props.offset) });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}
