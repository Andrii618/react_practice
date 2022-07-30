import React, { Component } from 'react';

import User from './User';

import './users.scss';

class UsersList extends Component {
  state = {
    sortDir: null,
  };

  onSortUsers = () => {
    this.setState(({ sortDir }) => ({ sortDir: sortDir === 'asc' ? 'desc' : 'asc' }));
  };

  render() {
    const usersList = this.state.sortDir
      ? this.props.users
          .slice()
          .sort((a, b) => (this.state.sortDir === 'asc' ? a.age - b.age : b.age - a.age))
      : this.props.users;

    return (
      <div>
        <button className="btn" onClick={this.onSortUsers}>
          {this.state.sortDir || '-'}
        </button>
        <ul className="users">
          {usersList.map(({ age, name, id }) => (
            <User key={id} age={age} name={name} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
