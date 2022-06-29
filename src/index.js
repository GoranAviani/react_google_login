import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.render(
  <React.StrictMode>
      <GoogleOAuthProvider clientId="683180046277-t176erjmqhhr48hm8ke339li26ijc7ev.apps.googleusercontent.com">
    <App />
          </GoogleOAuthProvider>;

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();