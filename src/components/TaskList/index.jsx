import React from 'react';

import TaskCard from 'containers/TaskCard';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import { UiConst } from 'const/ui';

export default function TaskList({ tasks, actions, listName }) {
  const useStyles = makeStyles(theme => ({
    buttonAlign: {
      float: 'right'
    },
    taskCard: {
      marginBottom: 100
    },
    root: {
      minWidth: UiConst.CARD_WIDTH,
      maxWidth: UiConst.CARD_WIDTH,
    }
  }));
  const classes = useStyles();

  const taskCards = tasks.map(task => (
    <TaskCard
      key={task.id}
      id={task.id}
      type={task.type}
      isEditing={task.editing}
      title={task.title}
      onTaskClick={actions.onClick}
    />
  ));
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid item>
          <div>
            <Typography variant="h6" display={'inline'} style={{ flex: 1 }}>
              {listName}
            </Typography>
            {actions.onAdd !== undefined ? (
              <Fab
                color="primary"
                aria-label="add"
                size={'small'}
                className={classes.buttonAlign}
              >
                <AddIcon onClick={() => actions.onAdd()} />
              </Fab>
            ) : null}
          </div>
          <div>
            <List>{taskCards}</List>
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
}
