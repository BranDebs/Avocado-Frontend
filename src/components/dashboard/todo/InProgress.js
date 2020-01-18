import React from 'react';
import TaskCard from './TaskCard';
import './Todo.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import CardContent from '@material-ui/core/CardContent';

const InProgress = () => {
  return (
    <Card>
      <CardContent>
        <Grid item>
          <div className={'task-title'}>
            <Typography variant="h6">In Progress</Typography>
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

export default InProgress;
