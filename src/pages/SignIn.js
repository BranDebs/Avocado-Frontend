import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { UiConst, AUTH_PAGE_STYLE } from 'const/ui';
import { makeStyles } from '@material-ui/core/styles';
import GoogleLoginButton from '../server/google_auth/login';
import { validateInput } from '../server/validations/ValidateLogin';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import clsx from 'clsx';
import { login } from '../api/accounts';
import { AuthEnum } from '../const/auth';
import FormHelperText from '@material-ui/core/FormHelperText';

function SignIn() {
  const [values, setValues] = React.useState({
    emailAddress: '',
    password: '',
    showPassword: false,
    identifier: '',
    errors: {},
    isLoading: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const classes = makeStyles(AUTH_PAGE_STYLE)();

  function signInUser() {
    let result = validateInput(AuthEnum.Login, values);
    setValues({ ...values, errors: result['errors'] });

    if (result['isValid']) {
      login(values.emailAddress, values.password);
    } else {
      console.log(result['errors']);
    }
  }

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item lg={UiConst.GRID_RATIO_AUTH_PAGE}>
          <div className={classes.paperMargin}>
            <Paper className={classes.paper}>
              <Box fontWeight="fontWeightBold" className={classes.title}>
                Login
              </Box>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                error={'emailAddress' in values.errors}
              >
                <InputLabel id="emailAddress" label="Email Address">
                  Email Address
                </InputLabel>
                <Input
                  value={values.emailAddress}
                  onChange={handleChange('emailAddress')}
                  startAdornment={
                    <InputAdornment position="start">
                      <MailOutlineIcon fontSize="small" />
                    </InputAdornment>
                  }
                />
                <FormHelperText>{values.errors.emailAddress}</FormHelperText>
              </FormControl>
              <div>
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  error={'password' in values.errors}
                >
                  <InputLabel id="password" label="Password">
                    Password
                  </InputLabel>
                  <Input
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
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
                  <FormHelperText>{values.errors.password}</FormHelperText>
                </FormControl>
              </div>
              <div className={classes.paper}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={values.isLoading}
                  onClick={() => signInUser()}
                >
                  Login
                </Button>
              </div>
              <Typography>or</Typography>
              <div className={classes.paper}>
                <GoogleLoginButton authType={'login'} />
              </div>
              <Typography display={'inline'}>Don't have an account?</Typography>
              <Button color="primary">
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignIn;
