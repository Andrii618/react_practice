import React, { Component } from 'react';

import Pagination from './Pagination';
import User from './User';

import './users.scss';

class UsersList extends Component {
  state = {
    currentPage: 1,
    itemsPerPage: 3,
    totalItems: 8,
    userPosition: 0,
  };

  users = this.props.users.map(user => <User key={user.id} {...user} />);

  onPrevPage = () => {
    this.setState(({ currentPage, userPosition, itemsPerPage }) => ({
      currentPage: currentPage - 1,
      userPosition: userPosition - itemsPerPage,
    }));
  };

  onNextPage = () => {
    this.setState(({ currentPage, userPosition, itemsPerPage }) => ({
      currentPage: currentPage + 1,
      userPosition: userPosition + itemsPerPage,
    }));
  };

  render() {
    const startPoint = this.state.userPosition;
    const endPoint = this.state.currentPage * this.state.itemsPerPage;

    return (
      <div>
        <Pagination goNext={this.onNextPage} goPrev={this.onPrevPage} {...this.state} />
        <ul className="users">{this.users.slice(startPoint, endPoint)}</ul>
      </div>
    );
  }
}

export default UsersList;
