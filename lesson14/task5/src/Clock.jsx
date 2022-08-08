import React, { useEffect, useState } from 'react';
import getTimeWithOffset from './getTimeWithOffset';

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(getTimeWithOffset(offset));
  let intervalId = null;

  useEffect(() => {
    intervalId = setInterval(() => {
      setTime(getTimeWithOffset(offset));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};

export default Clock;
