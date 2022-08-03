import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import postsTypeReducer from "../features/postsTypeSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    postsType: postsTypeReducer,
  },
});
