import React from 'react';

import './userProfile.scss';

const UserProfile = ({ userData }) => (
  <div className="user">
    <img alt="User Avatar" src={userData.avatar_url} className="user__avatar" />
    <div className="user__info">
      <span className="user__name">{userData.name}</span>
      <span className="user__location">{userData.location}</span>
    </div>
  </div>
);

export default UserProfile;
