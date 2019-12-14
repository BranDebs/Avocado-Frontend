import React from 'react';

import Timer from './timer/Timer';
import Todo from './todo/Todo';
import Settings from './timer/Settings';
import Grid from '@material-ui/core/Grid';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <Grid container spacing={3}>
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
