import React, { Component } from 'react';

import Pagination from './Pagination';
import User from './User';

import './users.scss';

class UsersList extends Component {
  state = {
    currentPage: 1,
    itemsPerPage: 3,
    totalItems: 5,
    userPosition: 0,
  };

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

  users = this.props.users.map(user => <User key={user.id} {...user} />);

  render() {
    const startPoint = this.state.userPosition;
    const endPoint = this.state.userPosition + this.state.itemsPerPage;

    return (
      <div>
        <Pagination
          goNext={this.onNextPage}
          goPrev={this.onPrevPage}
          currentPage={this.state.currentPage}
          totalItems={this.state.totalItems}
          itemsPerPage={this.state.itemsPerPage}
        />
        <ul className="users">{this.users.slice(startPoint, endPoint)}</ul>
      </div>
    );
  }
}

export default UsersList;
