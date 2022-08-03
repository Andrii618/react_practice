import React, { Component } from 'react';
import Dialog from './Dialog';

import './dialog.scss';

export default class App extends Component {
  state = {
    isOpen: false,
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.handleOpen}>
          Show dialog
        </button>
        <Dialog title="Recommendation" isOpen={this.state.isOpen} onClose={this.handleClose}>
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    );
  }
}
