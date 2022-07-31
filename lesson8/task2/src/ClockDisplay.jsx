import React, { Component } from 'react';

import Clock from './Clock';

import './clock.scss';

class ClockDisplay extends Component {
  state = {
    visible: true,
  };

  onToggle = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <>
        <button className="btn" onClick={this.onToggle}>
          Toggle
        </button>
        <div className="display">
          {this.state.visible &&
            this.props.clocks.map(clock => <Clock key={clock.id} {...clock} />)}
        </div>
      </>
    );
  }
}

export default ClockDisplay;
