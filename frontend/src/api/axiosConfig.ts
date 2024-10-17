import axios from 'axios';
import keycloak from '../keycloak';  // Import Keycloak instance

const axiosInstance = axios.create({
  baseURL: 'https://your-api-url.com/api',
});

axiosInstance.interceptors.request.use(async (config) => {
  if (keycloak.authenticated) {
    // Refresh token if it's about to expire
    try {
      await keycloak.updateToken(30);  // Update token if it will expire in 30 seconds
    } catch (error) {
      console.error('Failed to refresh token', error);
      keycloak.logout();  // Log out if token cannot be refreshed
    }

    const token = keycloak.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
