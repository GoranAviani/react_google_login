import './App.css';
        import { GoogleLogin } from '@react-oauth/google';
import googleLogin from "./GoogleLoginService";

function App() {
  return (
    <div className="App">
<h2>React Google Login Example</h2>


<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    googleLogin(credentialResponse)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;

    </div>


  );
}

export default App;
