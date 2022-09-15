import React, { useState } from 'react';

import Pagination from './Pagination';
import User from './User';

import './users.scss';

const UsersList = ({ users }) => {
  const [state, setState] = useState({ totalItems: users.length, currentPage: 1, userPosition: 0 });

  const { currentPage, userPosition } = state;

  const onPrevPage = () => {
    setState({ ...state, currentPage: currentPage - 1, userPosition: userPosition - 3 });
  };

  const onNextPage = () => {
    setState({ ...state, currentPage: currentPage + 1, userPosition: userPosition + 3 });
  };

  const startPoint = userPosition;
  const endPoint = currentPage * 3;

  return (
    <div>
      <Pagination goNext={onNextPage} goPrev={onPrevPage} {...state} />
      <ul className="users">
        {users.slice(startPoint, endPoint).map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
