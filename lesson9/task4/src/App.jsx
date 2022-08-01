import React from 'react';

import UsersList from './UsersList';

const users = [
  { age: 18, name: 'Masha', id: 1 },
  { age: 12, name: 'Andriy', id: 2 },
  { age: 16, name: 'Anton', id: 3 },
  { age: 30, name: 'Valeriy', id: 4 },
  { age: 55, name: 'Zoya', id: 5 },
  { age: 25, name: 'Grisha', id: 6 },
];

const App = () => <UsersList users={users} />;

export default App;
