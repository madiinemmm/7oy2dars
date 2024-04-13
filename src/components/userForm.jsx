// userForm.jsx

import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, editUser, currentUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      editUser({ id: currentUser.id, name, email });
    } else {
      addUser({ name, email });
    }
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='text-center'>
        <input
          className='p-3 border border-purple-700 outline-none w-80 placeholder:text-purple-600 font-semibold'
          type="text"
          placeholder="Enter Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='text-center'>
        <input
          className='p-3 border border-purple-700 outline-none w-80 mt-3  placeholder:text-purple-600 font-semibold'
          type="email"
          placeholder="Enter email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='text-center'>
        <button type="submit" className=' p-2 border border-gray-400 w-80 mt-3 bg-purple-700 text-white font-semibold hover:bg-purple-600  hover: transition transition-duration-500 '>
          {currentUser ? 'Edit' : 'Add'}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
