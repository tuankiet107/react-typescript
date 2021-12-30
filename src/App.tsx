import React, { useState } from 'react';
import './App.scss';
import Form from './components/Form';
import ListUser from './components/ListUsers';

export interface IState {
  users: {
    name: string;
    age: number;
    desc: string;
  }[];
}

function App() {
  const [users, setUsers] = useState<IState['users']>([
    { name: 'Tuan Kiet', age: 22, desc: 'I am an IT' },
  ]);
  return (
    <div className="App">
      <Form users={users} setUsers={setUsers} />
      <ListUser users={users} />
    </div>
  );
}

export default App;
