import React from 'react';

import './header.scss';

const UserMenu = ({ userData }) => (
  <header className="header">
    <div className="menu">
      <span className="menu__greeting">Hello, {userData.name}</span>
      <img alt="User Avatar" src={userData.avatar_url} className="menu__avatar" />
    </div>
  </header>
);

export default UserMenu;
