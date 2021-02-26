import './App.css';
import FirebaseSignIn from './FiresBaseSignIn/FirebaseSignIn';
import ReactSocialLogin from './react-social-login/ReactSocialLogin';
import SignInWithLinkedIn from './LinkedInLogin/SignInWithLinkedIn';
import AppRouting from './Routing/AppRouting';

function App() {

  const handleSocialLogin = (user) => {
    console.log(user)
  }
   
  const handleSocialLoginFailure = (err) => {
    console.error(err)
  }
   

  return (
    <div className="App">
      {/* <FirebaseSignIn/> */}
      {/* <ReactSocialLogin
      provider='amazon'
      appId='amzn1.application-oa2-client.8f7078cea0ff48ca87ac807b8e60ae4e'
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      Login with Amazon
    </ReactSocialLogin> */}
    <AppRouting/>
    {/* <SignInWithLinkedIn/> */}
    </div>
  );
}

export default App;
