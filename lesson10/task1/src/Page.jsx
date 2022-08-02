import React, { useState } from 'react';

import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

import './index.scss';

const Page = ({ userName }) => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = name => {
    fetch(`https://api.github.com/users/${name}`)
      .then(res => res.json())
      .then(data => {
        if (data.message === 'Not Found') {
          return null;
        }

        setUserData({ data });
      });
  };

  if (!userData) {
    fetchUserData(userName);
    return null;
  }

  return (
    <div className="page">
      <UserMenu userData={userData.data} />
      <UserProfile userData={userData.data} />
    </div>
  );
};

export default Page;
