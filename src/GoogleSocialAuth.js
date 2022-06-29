import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class GoogleSocialAuth extends Component {

  render() {
    const responseGoogleSuccess = (response) => {
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
          clientId="683180046277-t176erjmqhhr48hm8ke339li26ijc7ev.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleFailure}
        />
      </div>
    );
  }
}

export default GoogleSocialAuth;