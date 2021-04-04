import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { UiConst, AUTH_PAGE_STYLE } from 'const/ui';
import { makeStyles } from '@material-ui/core/styles';
import { register } from '../server/AuthService';
import { validateInput } from '../server/validations/ValidateLogin';
import GoogleLoginButton from '../server/google_auth/login';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function SignUp() {
  const [values, setValues] = React.useState({
    emailAddress: '',
    password: '',
    passwordConfirmation: '',
    showPassword: false,
    showPasswordConfirmation: false,
    identifier: '',
    errors: {},
    isLoading: false
  });

  function signUpUser() {
    var result = validateInput(values);
    if (result['isValid']) {
      register(values.emailAddress, values.password);
    } else {
      console.log(result['error']);
    }
  }

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowPasswordConfirmation = () => {
    setValues({
      ...values,
      showPasswordConfirmation: !values.showPasswordConfirmation
    });
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const classes = makeStyles(AUTH_PAGE_STYLE)();

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item lg={UiConst.GRID_RATIO_AUTH_PAGE}>
          <div className={classes.paperMargin}>
            <Paper className={classes.paper}>
                <Box fontWeight="fontWeightBold" className={classes.title}>
                  Sign Up
                </Box>
              <div>
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                >
                  <InputLabel id="emailAddress" label="Email Address">
                    Email Address
                  </InputLabel>
                  <Input
                    value={values.emailAddress}
                    error={values.errors.emailAddress}
                    onChange={handleChange('emailAddress')}
                    startAdornment={
                      <InputAdornment position="start">
                        <MailOutlineIcon fontSize="small" />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <div>
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                >
                  <InputLabel id="password" label="Password">
                    Password
                  </InputLabel>
                  <Input
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    error={values.errors.password}
                    startAdornment={
                      <InputAdornment position="start">
                        <LockOutlinedIcon fontSize="small" />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          size="small"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <div>
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                >
                  <InputLabel id="password" label="Password">
                    Retype Password
                  </InputLabel>
                  <Input
                    type={values.showPasswordConfirmation ? 'text' : 'password'}
                    value={values.passwordConfirmation}
                    onChange={handleChange('passwordConfirmation')}
                    error={values.errors.passwordConfirmation}
                    startAdornment={
                      <InputAdornment position="start">
                        <LockOutlinedIcon fontSize="small" />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPasswordConfirmation}
                          onMouseDown={handleMouseDownPassword}
                          size="small"
                        >
                          {values.showPasswordConfirmation ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <div className={classes.paper}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={values.isLoading}
                  onClick={signUpUser}
                >
                  Create Account
                </Button>
              </div>
              <Typography>or</Typography>
              <div className={classes.paper}>
                <GoogleLoginButton authType="register" />
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignUp;
