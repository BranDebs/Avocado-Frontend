import React from 'react';
import GoogleLogin from 'react-google-login';

const clientKey = '';
const clientId = clientKey + '.apps.googleusercontent.com';

const GoogleLoginButton = props => {
  const onSuccess = res => {
    console.log('[Login Success] currentUser:', res.profileObj);
  };

  const onFailure = res => {
    console.log('[Login Failure] res:', res);
  };

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
      onSucess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
  );
};

export default GoogleLoginButton;
