import React from 'react';

import UsersList from './UsersList';

const users = [
  { age: 17, name: 'Boris', id: 1 },
  { age: 22, name: 'Jhon', id: 2 },
  { age: 15, name: 'Andrii', id: 3 },
  { age: 49, name: 'Ivan', id: 4 },
  { age: 16, name: 'Andrii', id: 5 },
  { age: 15, name: 'Masha', id: 6 },
  { age: 42, name: 'Vika', id: 7 },
  { age: 55, name: 'Sveta', id: 8 },
  { age: 20, name: 'Anton', id: 9 },
  { age: 25, name: 'Igor', id: 10 },
  { age: 75, name: 'Boris', id: 11 },
  { age: 30, name: 'Mariya', id: 12 },
  { age: 15, name: 'Slavik', id: 13 },
];

const App = () => <UsersList users={users} />;

export default App;
