import "./Login.css"
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from '../../auth/actions/AuthAction';
import { Navigate} from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(loginSuccess({ id: 1, login: "admin" }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      <Navigate to="/" replace />;
    }
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className='centered'>
      <div className='form'>
        <h2 className='form-header'>LOGIN</h2>
        <input type="text" placeholder='enter your login' />
        <input type="password" id="pass" placeholder='enter your password' />
        <button id='login' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}