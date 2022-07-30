import React from 'react';

import ListItem from './ListItem';

const NumbersList = ({ numbers }) => (
  <ul>
    {numbers.map(num => (
      <ListItem key={String(num)} elem={num} />
    ))}
  </ul>
);

export default NumbersList;
