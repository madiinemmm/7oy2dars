// userTable.jsx
import { MdOutlineModeEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import React from 'react';

const UserTable = ({ users, removeUser, setCurrentUser }) => {
  const handleEdit = (index) => {
    setCurrentUser(users[index]);
  };

  return (
    <div className="mt-16">
      <table
        style={{
          borderCollapse: 'collapse',
          width: '60%',
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          color: '#5a189a',
          fontWeight: '700',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#D6C1FD', fontSize: '19px' }}>
            <th style={{ padding: '8px', border: '2px solid #fff', color: '#240046' }}>ID</th>
            <th style={{ padding: '8px', border: '2px solid #fff', color: '#240046' }}>Name</th>
            <th style={{ padding: '8px', border: '2px solid #fff', color: '#240046' }}>Email</th>
            <th style={{ padding: '8px', border: '2px solid #fff', color: '#240046' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#D6C1FD', fontSize: '17px' }}
            >
              <td style={{ padding: '8px', border: '2px solid #ddd' }}>{index + 1}</td>
              <td style={{ padding: '8px', border: '2px solid #ddd' }}>{user.name}</td>
              <td style={{ padding: '8px', border: '2px solid #ddd' }}>{user.email}</td>
              <td style={{ padding: '8px', border: '2px solid #ddd', backgroundColor: '#fff' }}>
                <div>
                <button
                  onClick={() => removeUser(index)}
                  className='p-2 text-red-700  font-semibold hover:text-red-500 transition duration-500 text-3xl'
                >
                  <MdOutlineDeleteOutline />
                </button>
                <button
                  onClick={() => handleEdit(index)}
                  className=' text-green-700 font-semibold hover:text-green-500 transition duration-500 text-3xl '
                >
                  <MdOutlineModeEdit />
                </button>
                </div>
          
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
