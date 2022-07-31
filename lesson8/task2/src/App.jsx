import React from 'react';

import ClockDisplay from './ClockDisplay';

const clocks = [
  { location: 'New York', offset: -5, id: 1 },
  { location: 'Kyiv', offset: 2, id: 2 },
  { location: 'London', offset: 0, id: 3 },
];

const App = () => <ClockDisplay clocks={clocks} />;

export default App;
