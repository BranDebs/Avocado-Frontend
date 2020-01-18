import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './auth.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import validateInput from 'server/validations/ValidateLogin';
import Box from '@material-ui/core/Box';

function SignUpForm() {
  const [values, setValues] = React.useState({
    username: '',
    emailAddress: '',
    password: '',
    retypePassword: '',
    identifier: '',
    errors: {},
    isLoading: false
  });
  const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2)
    },
    paper: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    textfield: {
      paddingTop: 10,
      paddingBottom: 10
    },
    title: {
      fontSize: 32,
      paddingTop: 10,
      paddingBottom: 10
    }
  }));

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const isValid = () => {
    const { errors, isValid } = validateInput(values);
    if (!isValid) {
      setValues({ ...values, errors: errors });
    }
    return isValid;
  };

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <div className={classes.paper}>
          <Paper className="auth-paper">
            <Typography component="h3" className={classes.title}>
              <Box fontWeight="fontWeightBold">Sign Up</Box>
            </Typography>
            <FormControl fullWidth className={classes.textfield}>
              <InputLabel id="username" label="Username">
                Username
              </InputLabel>
              <Input
                value={values.username}
                error={values.errors.username}
                onChange={handleChange('username')}
              />
            </FormControl>
            <FormControl fullWidth className={classes.textfield}>
              <InputLabel id="emailAddress" label="Email Address">
                Email Address
              </InputLabel>
              <Input
                value={values.emailAddress}
                error={values.errors.emailAddress}
                onChange={handleChange('emailAddress')}
              />
            </FormControl>
            <FormControl fullWidth className={classes.textfield}>
              <InputLabel id="password" label="Password">
                Password
              </InputLabel>
              <Input
                type={'password'}
                value={values.password}
                onChange={handleChange('password')}
                error={values.errors.password}
              />
            </FormControl>
            <FormControl fullWidth className={classes.textfield}>
              <InputLabel id="password" label="Password">
                Retype Password
              </InputLabel>
              <Input
                type={'password'}
                value={values.retypePassword}
                onChange={handleChange('retypePassword')}
                error={values.errors.retypePassword}
              />
            </FormControl>
            <div className={classes.paper}>
              <Button
                variant="contained"
                color="primary"
                disabled={values.isLoading}
              >
                Create Account
              </Button>
            </div>
            <Typography>or</Typography>
            <div className={classes.paper}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
              >
                Sign Up with a Google Account
              </Button>
            </div>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignUpForm;
