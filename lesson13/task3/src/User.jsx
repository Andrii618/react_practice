import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  const fetchUserData = () => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load user data`);
        }

        return res.json();
      })
      .then(data => {
        const { avatar_url: avatarUrl, name, location } = data;

        setUserData({ avatarUrl, name, location, userId });
      });
  };

  if (!userData || userData.userId !== userId) {
    fetchUserData();

    return null;
  }

  const { avatarUrl, name, location } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
