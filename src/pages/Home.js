import React from 'react';
import Timer from '../containers/Timer';
import TaskTracker from '../containers/TaskTracker';
import SettingsModal from '../containers/SettingsModal';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

function Home() {
  const HOME_STYLE = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    component: {
      paddingTop: theme.spacing(6)
    }
  }));
  const classes = HOME_STYLE();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <SettingsModal />
        <Grid item xs={4}>
          <div className={classes.component}>
            <Timer />
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className={classes.component}>
            <TaskTracker />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
