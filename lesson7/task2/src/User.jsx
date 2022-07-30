import React from 'react';

import './users.scss';

const User = ({ name, age }) => (
  <li className="user">
    <span className="user__name">{name}</span>
    <span className="user__age">{age}</span>
  </li>
);

export default User;
