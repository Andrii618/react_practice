import React, { Component } from 'react';

export default class User extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.userId}`).then(response =>
      response.json().then(userData => {
        this.setState({ userData });
      }),
    );
  }

  render() {
    if (!this.state.userData) {
      return null;
    }

    return (
      <div className="user">
        <img alt="User Avatar" src={this.state.userData.avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{this.state.userData.name}</span>
          <span className="user__location">{this.state.userData.location}</span>
        </div>
      </div>
    );
  }
}
