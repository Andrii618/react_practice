import React from 'react';

import UsersList from './UsersList';

const users = [
  { age: 17, name: 'Boris', id: 1 },
  { age: 22, name: 'Jhon', id: 2 },
  { age: 15, name: 'Andrii', id: 3 },
  { age: 49, name: 'Ivan', id: 4 },
  { age: 16, name: 'Andrii', id: 5 },
];

const App = () => <UsersList users={users} />;

export default App;
