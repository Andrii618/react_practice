import React, { useState } from 'react';

import Pagination from './Pagination';
import User from './User';

import './users.scss';

const UsersList = ({ users }) => {
  const [state, setState] = useState({ currentPage: 1, userPosition: 0 });

  const { currentPage, userPosition } = state;

  const itemsPerPage = 3;

  const onPrevPage = () => {
    setState({ ...state, currentPage: currentPage - 1, userPosition: userPosition - itemsPerPage });
  };

  const onNextPage = () => {
    setState({ ...state, currentPage: currentPage + 1, userPosition: userPosition + itemsPerPage });
  };

  const startPoint = userPosition;
  const endPoint = currentPage * itemsPerPage;

  return (
    <div>
      <Pagination
        goNext={onNextPage}
        goPrev={onPrevPage}
        {...state}
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
      />
      <ul className="users">
        {users.slice(startPoint, endPoint).map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
