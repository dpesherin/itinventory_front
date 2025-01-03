const initialAuthState = () => {
  const authStateFromLS = localStorage.getItem("authState");
  if (authStateFromLS) {
    return JSON.parse(authStateFromLS);
  }
  return {
    isAuthenticated: false,
    user: null
  };
};

export default function AuthReducer(state = initialAuthState(), action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem("authState", JSON.stringify({ isAuthenticated: true, user: action.payload.user }));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user
      };
    case 'LOGOUT':
      localStorage.removeItem("authState");
      return {
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
}
