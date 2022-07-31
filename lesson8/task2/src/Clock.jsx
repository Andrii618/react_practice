import React, { Component } from 'react';

import getOffsettedTime from './getOffsettedTime';

import './clock.scss';

class Clock extends Component {
  state = {
    time: getOffsettedTime(this.props.offset),
  };

  interval = null;

  componentDidMount() {
    this.getTime();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTime() {
    this.interval = setInterval(() => {
      this.setState({ time: getOffsettedTime(this.props.offset) });
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

export default Clock;
