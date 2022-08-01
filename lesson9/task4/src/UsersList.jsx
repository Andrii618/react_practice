import React, { Component } from 'react';

import Filter from './Filter';
import User from './User';
import getIncludeResult from './getIncludeResult';

import './users.scss';

export default class UsersList extends Component {
  state = {
    filterText: '',
  };

  handleFilterText = event => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    const users = this.props.users
      .filter(({ name }) => getIncludeResult(name, this.state.filterText))
      .map(({ id, name, age }) => <User key={id} name={name} age={age} />);

    return (
      <div>
        <Filter count={users.length} onChange={this.handleFilterText} />
        <ul className="users">{users}</ul>
      </div>
    );
  }
}
