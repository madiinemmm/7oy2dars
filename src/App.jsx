// App.jsx

import React, { useState } from 'react';
import UserForm from './components/userForm';
import UserTable from './components/userTable';
import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  users: userReducer
});

const store = createStore(rootReducer);

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const removeUser = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  const editUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setCurrentUser(null);
  };

  return (
    <div>
      <h1 className='font-bold text-purple-800 text-center text-3xl mt-16 mb-3'>
        Users
      </h1>
      <UserForm addUser={addUser} editUser={editUser} currentUser={currentUser} />
      <UserTable users={users} removeUser={removeUser} setCurrentUser={setCurrentUser} />
    </div>
  );
};

export default App;
