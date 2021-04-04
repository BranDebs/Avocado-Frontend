import React from 'react';
import GoogleLogout from 'react-google-login';

const clientKey = '592079511520-eiihd9vi1lum71c3q00d7tp7tqf98j5q';
const clientId = clientKey + '.apps.googleusercontent.com';

const GoogleLogoutButton = props => {
  const onSuccess = res => {
    console.log('[Logged out] loggedOutUser:', res.profileObj);
  };

  return (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onSucess={onSuccess}
    />
  );
};

export default GoogleLogoutButton;
