import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleLogin from 'react-google-login';
import {
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  Button,
  Spinner,
} from "reactstrap";

export class GoogleSignIn extends Component {

  responseGoogle = async (response) => {
    console.log(response.accessToken)
  }

  responseGoogle = async (response) => {
    console.log(response)
  }


  render() {
    return(
      <GoogleLogin
        clientId="<<Your Client ID>>"
        render={renderProps => (
          <Button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            color="google" size="lg"
            type="submit"
            className="mr-1 btn-block flex d-flex" >
            {this.state.loadeing?
              <Spinner color="secondary" />
              :
              <div>
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="align-middle float-left mr-3" />{" "}
                <div>Login in using <b> Google</b> </div>
              </div>
            }
          </Button>

        )}
        onSuccess={this.responseGoogleSuccess}
        onFailure={this.responseGoogleFail}
        cookiePolicy={'single_host_origin'}
      />
    )
  }
}

export default (GoogleSignIn);