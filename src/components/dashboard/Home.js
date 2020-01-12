import React from 'react';

import Timer from './timer/Timer';
import Todo from './todo/Todo';
import Grid from '@material-ui/core/Grid';
import SettingsModal from 'containers/Settings';

import './Home.css';

class Home extends React.Component {
  render() {
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
            <Todo />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
