import React from 'react';

const NumbersList = ({ numbers }) => (
  <ul>
    {numbers.map(num => (
      <li key={String(num)}>{num}</li>
    ))}
  </ul>
);

export default NumbersList;
