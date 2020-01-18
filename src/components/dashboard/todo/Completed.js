import React from 'react';
import TaskCard from './TaskCard';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

const Completed = () => {
  return (
    <Card>
      <CardContent>
        <Grid item>
          <div className={'task-title'}>
            <Typography variant="h6">Completed</Typography>
          </div>
          <div>
            <List>
              <TaskCard />
            </List>
            <List>
              <TaskCard />
            </List>
            <List>
              <TaskCard />
            </List>
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Completed;
