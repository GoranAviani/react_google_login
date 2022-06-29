import axios from "axios";

const googleLogin = async (response) => {
    let res = await axios.post(
      "http://localhost:8000/api/v1/rest-auth/google_auth/",
      {
        access_token: response.credential,
          id_token: response.clientId,
      }
    );
    console.log(res);
    return await res.status;
  };

export default googleLogin;