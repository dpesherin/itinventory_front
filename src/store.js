import { configureStore } from '@reduxjs/toolkit';
import  AuthReducer  from './auth/reducers/AuthReducer';

const rootReducer = {
  auth: AuthReducer
};

const store = configureStore({
  reducer: rootReducer
});

export default store;