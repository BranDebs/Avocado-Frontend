import React from 'react';
import Timer from '../containers/Timer';
import TaskTracker from '../containers/TaskTracker';
import SettingsModal from '../containers/SettingsModal';
import Grid from '@material-ui/core/Grid';

import './Home.css';

function Home() {
  return (
    <Grid container spacing={3}>
      <SettingsModal />
      <Grid item xs={4}>
        <div className={'home-style'}>
          <Timer />
        </div>
      </Grid>
      <Grid item xs={8}>
        <div className={'home-style'}>
          <TaskTracker />
        </div>
      </Grid>
    </Grid>
  );
}

export default Home;
