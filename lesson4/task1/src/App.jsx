import React from 'react';

import Counter from './Counter';

const App = () => (
  <>
    <Counter start={17} interval={50} />
    <Counter start={-56} interval={700} />
    <Counter start={618} interval={1000} />
  </>
);

export default App;
