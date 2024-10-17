import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserProfile {
  id: number;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN';
}

interface UserState {
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  profile: null,
  loading: false,
  error: null,
};

export const fetchUserProfile = createAsyncThunk('user/fetchUserProfile', async (userId: number) => {
  const response = await axios.get<UserProfile>(`/api/users/${userId}`);
  return response.data;
});

export const updateUserProfile = createAsyncThunk('user/updateUserProfile', async (updatedProfile: UserProfile) => {
  const response = await axios.put(`/api/users/${updatedProfile.id}`, updatedProfile);
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to fetch user profile';
        state.loading = false;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      });
  },
});

export default userSlice.reducer;
