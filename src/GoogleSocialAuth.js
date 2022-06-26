import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class GoogleSocialAuth extends Component {

  render() {
    const responseGoogleSuccess = (response) => {
      console.log(response);
      console.log("redirect to dashboard")
    }

        const responseGoogleFailure = (response) => {
      console.log(response);
      console.log("redirect to error message or login")
    }
    return (
      <div className="App">
        <h1>LOGIN WITH GOOGLE</h1>

        <GoogleLogin
          clientId="<Google Client ID>"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleFailure}
        />
      </div>
    );
  }
}

export default GoogleSocialAuth;