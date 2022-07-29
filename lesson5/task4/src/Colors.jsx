import React, { Component } from 'react';

import './colors.scss';

export default class Counter extends Component {
  paintBackground(color) {
    document.body.style.backgroundColor = color;
  }

  render() {
    return (
      <div className="colors">
        <button
          className="colors__button"
          style={{ backgroundColor: '#f00' }}
          onClick={this.paintBackground.bind(this, '#f00')}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: '#0f0' }}
          onClick={this.paintBackground.bind(this, '#0f0')}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: '#00f' }}
          onClick={this.paintBackground.bind(this, '#00f')}
        ></button>
      </div>
    );
  }
}
