import React, { Component } from 'react';

import getDimensions from './getDimensions';

class Dimension extends Component {
  constructor(props) {
    super(props);

    this.state = getDimensions();
  }

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
    return <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>;
  }
}

export default Dimension;
