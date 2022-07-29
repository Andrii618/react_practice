import React, { Component } from 'react';

import Message from './Message';

import './message.scss';

class Page extends Component {
  state = {
    text: null,
  };

  changeText = text => {
    this.setState({ text });
  };

  render() {
    return (
      <div className="page">
        <Message text={this.state.text} />
        <div className="actions">
          <button className="btn" onClick={() => this.changeText('Hello, world!')}>
            Text 1
          </button>
          <button className="btn" onClick={() => this.changeText('Another exciting text.')}>
            Text 2
          </button>
          <button className="btn" onClick={() => this.changeText('')}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
