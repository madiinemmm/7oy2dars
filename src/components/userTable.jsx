import React, { useState } from 'react';

const UserTable = ({ users, removeUser }) => {
  const [showTable, setShowTable] = useState(true); 
  return (
    <div>
       <button onClick={() => setShowTable(!showTable)} style={{marginLeft: '385px', padding: '10px', backgroundColor: '#7E22CE', width: '300px', fontWeight: '600',color: 'white', marginBottom: '20px', marginTop: '50px'}}>
        {showTable ? 'Hide the table' : 'Display table'}
      </button>
      {showTable && (
        <table style={{ borderCollapse: 'collapse', width: '60%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', color: '#5a189a', fontWeight: '700' }}>
          <thead>
            <tr style={{ backgroundColor: '#D6C1FD', fontSize: '19px' }}>
              <th style={{ padding: '8px', border: '2px solid #fff', color: '#240046'}}>ID</th>
              <th style={{ padding: '8px', border: '2px solid #fff', color: '#240046' }}>Ism</th>
              <th style={{ padding: '8px', border: '2px solid #fff', color: '#240046' }}>Email</th>
              <th style={{ padding: '8px', border: '2px solid #fff', color: '#240046' }}>Actions</th> {/* Ochirish tugmasi uchun ustun */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#D6C1FD', fontSize: '17px' }}>
                <td style={{ padding: '8px', border: '2px solid #ddd' }}>{index + 1}</td>
                <td style={{ padding: '8px', border: '2px solid #ddd' }}>{user.name}</td>
                <td style={{ padding: '8px', border: '2px solid #ddd' }}>{user.email}</td>
                <td style={{ padding: '8px', border: '2px solid #ddd',backgroundColor: '#fff' }}>
                  <button onClick={() => removeUser(index)} className='p-2 bg-red-600  text-white w-28 font-semibold hover:bg-red-500 transition duration-500'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;