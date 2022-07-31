import React, { Component } from 'react';

import getDimensions from './getDimensions';

class Dimensions extends Component {
  state = getDimensions();

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.setState(getDimensions());
  };

  render() {
    return <div className="dimensions">{`${this.state.width} x ${this.state.height}`}</div>;
  }
}

export default Dimensions;
