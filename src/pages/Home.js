import React from 'react';
import Timer from '../containers/Timer';
import TaskTracker from '../containers/TaskTracker';
import SettingsModal from '../containers/SettingsModal';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

function Home() {
  const HOME_STYLE = makeStyles(theme => ({
    root: {
      paddingTop: theme.spacing(6)
    }
  }));
  const classes = HOME_STYLE();

  return (
    <Grid container spacing={3}>
      <SettingsModal />
      <Grid item xs={4}>
        <div className={classes.root}>
          <Timer />
        </div>
      </Grid>
      <Grid item xs={8}>
        <div className={classes.root}>
          <TaskTracker />
        </div>
      </Grid>
    </Grid>
  );
}

export default Home;
