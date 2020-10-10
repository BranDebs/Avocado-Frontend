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

function SignUp() {
  const [values, setValues] = React.useState({
    emailAddress: '',
    password: '',
    passwordConfirmation: '',
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

  const classes = makeStyles(AUTH_PAGE_STYLE)();

  return (
    <Grid container>
      <Grid item lg={UiConst.GRID_RATIO_AUTH_PAGE}></Grid>
      <Grid item lg={UiConst.GRID_RATIO_AUTH_PAGE}>
        <div className={classes.paperMargin}>
          <Paper className={classes.paper}>
            <Typography>
              <Box fontWeight="fontWeightBold" className={classes.title}>
                Sign Up
              </Box>
            </Typography>
            <FormControl fullWidth margin={classes.form.margin}>
              <InputLabel id="emailAddress" label="Email Address">
                Email Address
              </InputLabel>
              <Input
                value={values.emailAddress}
                error={values.errors.emailAddress}
                onChange={handleChange('emailAddress')}
              />
            </FormControl>
            <FormControl fullWidth margin={classes.form.margin}>
              <InputLabel id="password" label="Password">
                Password
              </InputLabel>
              <Input
                type="password"
                onChange={handleChange('password')}
                error={values.errors.password}
              />
            </FormControl>
            <FormControl fullWidth margin={classes.form.margin}>
              <InputLabel id="password" label="Password">
                Retype Password
              </InputLabel>
              <Input
                type="password"
                onChange={handleChange('passwordConfirmation')}
                error={values.errors.passwordConfirmation}
              />
            </FormControl>
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
  );
}

export default SignUp;
