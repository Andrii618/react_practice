import React from 'react';

import formatBirthDate from './formatBirthDate';

import './profile.scss';

const Profile = ({ userData }) => (
  <div className="profile">
    <div className="profile__name">
      {userData.firstName} {userData.lastName}
    </div>
    <div className="profile__birth">
      Was born {formatBirthDate(userData.birthDate)} in {userData.birthPlace}
    </div>
  </div>
);

export default Profile;
