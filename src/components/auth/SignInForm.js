import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './auth.css';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import validateInput from 'server/validations/ValidateLogin';
import Box from '@material-ui/core/Box';

function SignInForm() {
  const [values, setValues] = React.useState({
    username: '',
    password: '',
    showPassword: false,
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

  // onsubmit(e) {
  //   e.preventDefault();
  //
  // }
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item lg={4}></Grid>
      <Grid item lg={4}>
        <div className={classes.paper}>
          <Paper className="auth-paper">
            <Typography component="h3" className={classes.title}>
              <Box fontWeight="fontWeightBold">Login</Box>
            </Typography>
            <FormControl fullWidth className={classes.textfield}>
              <InputLabel id="username" label="Username/Email Address">
                Username/Email Address
              </InputLabel>
              <Input
                value={values.username}
                error={values.errors.username}
                onChange={handleChange('username')}
              />
            </FormControl>
            <FormControl fullWidth className={classes.textfield}>
              <InputLabel id="password" label="Password">
                Password
              </InputLabel>
              <Input
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                error={values.errors.password}
              />
            </FormControl>
            <div className={classes.paper}>
              <Button
                variant="contained"
                color="primary"
                disabled={values.isLoading}
              >
                Login
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
                Login with a Google Account
              </Button>
            </div>
            <Typography display={'inline'}>Don't have an account?</Typography>
            <Button color="primary">
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignInForm;
