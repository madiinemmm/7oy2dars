import React, { useState } from 'react';
import UserForm from './components/userForm';
import UserTable from './components/userTable';
import './App.css'

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const removeUser = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  return (
    <div>
      <h1 className='font-bold text-purple-800 text-center text-3xl mt-16 mb-3'>Users</h1>
      <UserForm addUser={addUser} />
      <UserTable users={users} removeUser={removeUser} />
    </div>
  );
};

export default App;