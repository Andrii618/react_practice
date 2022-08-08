import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        toggle visibility
      </button>
      {isVisible && (
        <>
          <Clock offset={-5} location="New York" />
          <Clock offset={2} location="Kyiv" />
          <Clock offset={0} location="London" />
        </>
      )}
    </>
  );
};

export default App;
