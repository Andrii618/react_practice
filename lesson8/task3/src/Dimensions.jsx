import React, { Component } from 'react';

import getDimensions from './getDimensions';

export default class Dimensions extends Component {
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
    return <div className="dimensions">{`${this.state.width}px x ${this.state.height}px`}</div>;
  }
}
