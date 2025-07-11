import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice';  // 👈 Import auth slice

const store = configureStore({
  reducer: {
    auth: authReducer,  // 👈 Register reducer here
  },
});

export default store;
