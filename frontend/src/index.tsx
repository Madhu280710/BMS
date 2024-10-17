import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import  store  from './redux/store';
import keycloak from './keycloak';  // Import Keycloak instance

keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
  if (authenticated) {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  } else {
    console.warn('User is not authenticated');
  }
}).catch((error) => {
  console.error('Failed to initialize Keycloak', error);
});
