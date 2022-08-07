import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userName } = useParams();
  const [userData, setUserData] = useState(null);

  const fetchUserData = () => {
    console.log(userName);
    fetch(`https://api.github.com/users/${userName}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load user data`);
        }

        return res.json();
      })
      .then(data => {
        const { avatar_url: avatar, name, location } = data;

        setUserData({ avatar, name, location, currentUser: userName });
      });
  };

  if (!userData) {
    fetchUserData();
    return null;
  }

  const { avatar, name, location, currentUser } = userData;

  if (currentUser !== userName) {
    setUserData(null);
  }

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
