import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return <div className="dimensions">{`${dimension.width}px - ${dimension.height}px`}</div>;
};

export default Dimensions;
