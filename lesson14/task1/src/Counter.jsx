import React, { useState } from 'react';

const Counter = () => {
  const [countValue, setCountValue] = useState(0);

  return (
    <div className="counter">
      <button
        className="counter__button"
        onClick={() => {
          setCountValue(countValue - 1);
        }}
      >
        -
      </button>
      <span className="counter__value">{countValue}</span>
      <button
        className="counter__button"
        onClick={() => {
          setCountValue(countValue + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
