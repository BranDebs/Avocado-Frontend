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
import {makeStyles} from "@material-ui/core/styles";

function SignUp() {
  const [values, setValues] = React.useState({
    username: '',
    emailAddress: '',
    password: '',
    retypePassword: '',
    identifier: '',
    errors: {},
    isLoading: false
  });

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
              <Box fontWeight="fontWeightBold" className={classes.title}>Sign Up</Box>
            </Typography>
            <FormControl fullWidth margin={"normal"}>
              <InputLabel id="username" label="Username">
                Username
              </InputLabel>
              <Input
                value={values.username}
                error={values.errors.username}
                onChange={handleChange('username')}
              />
            </FormControl>
            <FormControl fullWidth margin={"normal"}>
              <InputLabel id="emailAddress" label="Email Address">
                Email Address
              </InputLabel>
              <Input
                value={values.emailAddress}
                error={values.errors.emailAddress}
                onChange={handleChange('emailAddress')}
              />
            </FormControl>
            <FormControl fullWidth margin={"normal"}>
              <InputLabel id="password" label="Password">
                Password
              </InputLabel>
              <Input
                type="password"
                onChange={handleChange('password')}
                error={values.errors.password}
              />
            </FormControl>
            <FormControl fullWidth margin={"normal"}>
              <InputLabel id="password" label="Password">
                Retype Password
              </InputLabel>
              <Input
                type="password"
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

export default SignUp;
