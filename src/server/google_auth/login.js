import React from 'react';
import GoogleLogin from 'react-google-login';

const clientKey = '592079511520-eiihd9vi1lum71c3q00d7tp7tqf98j5q';
const clientId = clientKey + '.apps.googleusercontent.com';

const GoogleLoginButton = props => {
  const onSuccess = res => {
    console.log('[Login Success] currentUser:', res.profileObj);
  };

  const onFailure = res => {
    console.log('[Login Failure] res:', res);
  };

  const responseGoogle = (response) => {
    console.log(response);
  }

  const getButtonText = () => {
    if (props.authType === 'login') {
      return 'Login with Google';
    } else {
      return 'Sign up with Google';
    }
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText={getButtonText()}
      onSucess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;
