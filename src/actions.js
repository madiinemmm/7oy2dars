
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';


export const addUser = (userData) => {
  return {
    type: ADD_USER,
    payload: userData
  };
};


export const removeUser = (userId) => {
  return {
    type: REMOVE_USER,
    payload: userId
  };
};