// reducer.js
const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  