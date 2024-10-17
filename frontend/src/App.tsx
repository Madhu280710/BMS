import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import store from './redux/store';
import keycloak from './keycloak';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import theme from './themes/theme';

const App: React.FC = () =>
<Provider store={store}>
  <ReactKeycloakProvider authClient={keycloak}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  </ReactKeycloakProvider>
</Provider>

export default App;