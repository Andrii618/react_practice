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
        const { avatar_url: avatar, name, location } = data;

        setUserData({ avatar, name, location, currentUser: userId });
      });
  };

  if (!userData || userData.currentUser !== userId) {
    fetchUserData();

    return null;
  }

  const { avatar, name, location } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
