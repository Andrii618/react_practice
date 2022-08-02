import React, { Component } from 'react';

import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

import './index.scss';

export default class Page extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUserData(this.props.userName);
  }

  fetchUserData = name => {
    fetch(`https://api.github.com/users/${name}`)
      .then(res => res.json())
      .then(data => {
        if (data.message === 'Not Found') {
          return null;
        }

        this.setState({ userData: data });
      });
  };

  render() {
    const data = this.state.userData;

    if (!data) {
      return null;
    }

    return (
      <div className="page">
        <UserMenu userData={data} />
        <UserProfile userData={data} />
      </div>
    );
  }
}
