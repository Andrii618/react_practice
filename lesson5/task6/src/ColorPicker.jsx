import React, { Component } from 'react';

import './colorPicker.scss';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { color: '' };
  }

  changeColor(color) {
    this.setState({ color });
  }

  render() {
    return (
      <div
        className="picker"
        onMouseOut={() => {
          this.changeColor('');
        }}
      >
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => {
              this.changeColor('Coral');
            }}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => {
              this.changeColor('Aqua');
            }}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => {
              this.changeColor('Bisque');
            }}
          ></button>
        </div>
      </div>
    );
  }
}
