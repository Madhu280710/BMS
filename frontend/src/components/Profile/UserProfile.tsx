import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchUserProfile, updateUserProfile } from '../../redux/slices/userSlice';
import { TextField, Button, Box, CircularProgress, Typography } from '@mui/material';

const Profile: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { profile, loading, error } = useSelector((state: RootState) => state.user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    dispatch(fetchUserProfile(1)); // Fetch user profile with userId = 1 (replace with actual logic)
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setEmail(profile.email);
      setRole(profile.role);
    }
  }, [profile]);

  const handleSave = () => {
    if (profile) {
      const updatedProfile = { ...profile, name, email };
      dispatch(updateUserProfile(updatedProfile));
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Failed to load profile: {error}</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Role"
        value={role}
        disabled
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save Changes
      </Button>
    </Box>
  );
};

export default Profile;
