const initialAuthState = {
    isAuthenticated: false,
    user: null
  };
  
  export default function AuthReducer(state = initialAuthState, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null
        };
      default:
        return state;
    }
  }