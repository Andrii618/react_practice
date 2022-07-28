import React from 'react';

import formatBirth from './formatBirth';

import './profile.scss';

const Profile = ({ userData }) => (
  <div className="profile">
    <div className="profile__name">
      {userData.firstName} {userData.lastName}
    </div>
    <div className="profile__birth">
      Was born {formatBirth(userData.birthDate)} in {userData.birthPlace}
    </div>
  </div>
);

export default Profile;
