import React, { Component } from 'react';

import getDimensions from './getDimensions';

class Dimensions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: null,
      height: null,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.setState(getDimensions());
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
