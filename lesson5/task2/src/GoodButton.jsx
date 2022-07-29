import React, { Component } from 'react';

import './button.scss';

export default class GoodButton extends Component {
  alert = e => {
    alert(e.target.textContent);
  };

  render() {
    return (
      <button className="fancy-button" onClick={this.alert}>
        Fancy Button
      </button>
    );
  }
}
