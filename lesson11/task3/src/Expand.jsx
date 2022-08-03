import React, { Component } from 'react';

import './expand.scss';

export default class Expand extends Component {
  state = {
    isVisible: false,
  };

  handleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.handleVisibility}>
            {this.state.isVisible ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </button>
        </div>
        {this.state.isVisible && <div className="expand__content">{this.props.children}</div>}
      </div>
    );
  }
}
