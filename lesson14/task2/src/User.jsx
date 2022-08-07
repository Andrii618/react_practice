import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to fetch user data`);
        }

        return res.json();
      })
      .then(data => {
        const { name, avatar_url: avatarUrl, location } = data;

        setUserData({ name, avatarUrl, location });
      });
  }, [userId]);

  if (!userData) {
    return null;
  }

  const { name, avatarUrl, location } = userData;

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
