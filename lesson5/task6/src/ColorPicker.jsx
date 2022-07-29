import React, { Component } from 'react';

import './colorPicker.scss';

export default class Counter extends Component {
  changeColorName(colorName) {
    document.querySelector('.picker__title').textContent = colorName;
  }

  render() {
    return (
      <div className="picker" onMouseOut={this.changeColorName.bind(this, '')}>
        <div className="picker__title" onMouseOver={this.hideColorName}></div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={this.changeColorName.bind(this, 'Coral')}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={this.changeColorName.bind(this, 'Aqua')}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={this.changeColorName.bind(this, 'Bisque')}
          ></button>
        </div>
      </div>
    );
  }
}
