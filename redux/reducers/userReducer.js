const userReducer = (state = null, { type, payload }) => {
    switch (type) {
      case 'LOGIN':
        return payload;
      case 'LOGOUT':
        return null;
      default:
        return state;
    }
  };
  
  export default userReducer;
  