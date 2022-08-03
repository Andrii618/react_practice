import React, { Component } from 'react';

import Expand from './Expand';

export default class Info extends Component {
  state = {
    isVisible: false,
  };

  handleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div className="app">
        <Expand
          title="Some title"
          isVisible={this.state.isVisible}
          onButtonClick={this.handleVisibility}
        >
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}
