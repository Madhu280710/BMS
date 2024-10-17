import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import movieReducer from './slices/movieSlice';
import userReducer from './slices/userSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: movieReducer,
    user: userReducer,
    // Add other reducers here
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
