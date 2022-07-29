import React, { Component } from 'react';

import './button.scss';

export default class GoodButton extends Component {
  alert = () => {
    alert('Good job!');
  };

  render() {
    return (
      <button className="fancy-button" onClick={this.alert}>
        Fancy Button
      </button>
    );
  }
}

// export function GoodButton1() {
//   function showMessage() {
//     alert('Good work!');
//   }

//   return (
//     <button className="fancy-button" onClick={showMessage}>
//       Fancy Button
//     </button>
//   );
// }
