import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { useKeycloak } from '@react-keycloak/web';

const Login: React.FC = () => {
  const { keycloak } = useKeycloak();

  const handleLogin = () => {
    keycloak.login();
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login with Keycloak
      </Button>
    </Container>
  );
};

export default Login;
