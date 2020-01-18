import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { TimeConst } from 'const/TimerConst';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { secondsToMinutes } from 'utils/timerUtil';

const useStyles = makeStyles(theme => ({
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  button: {
    float: 'right'
  },
  settings: {
    fontSize: 32,
    display: 'inline'
  },
  textfield: {
    paddingTop: 10,
    paddingBottom: 10
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180
  }
}));

const Settings = props => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    avocadoDur: secondsToMinutes(TimeConst.AVOCADORO_TIME),
    shortBreakDur: secondsToMinutes(TimeConst.SHORT_BREAK_TIME),
    longBreakDur: secondsToMinutes(TimeConst.LONG_BREAK_TIME),
    autoStartBreak: true,
    autoStartAvocadoro: true,
    audio: true,
    notification: true,
    goal: 3
  });

  const handleChangeCheck = name => event => {
    setValues({ ...values, [name]: event.target.checked });
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function GenerateGoals() {
    const numList = [];
    for (let num = 1; num <= 10; num++) {
      numList.push(
        <MenuItem key={num} value={num}>
          {num}
        </MenuItem>
      );
    }
    return numList;
  }
  return (
    <div>
      <Typography className={classes.settings}>
        <Box fontWeight="fontWeightBold" className={classes.settings}>
          Settings
        </Box>
      </Typography>
      <IconButton component={'span'} className={classes.button}>
        <CloseIcon />
      </IconButton>
      <Divider />
      <FormGroup row className={classes.textfield}>
        <form className={classes.textfield} noValidate>
          <TextField
            value={values.avocadoDur}
            onChange={handleChange('avocadoDur')}
            label="Avocado Duration"
            id="custom-avocadoro-duration"
            type="number"
            className={classes.formControl}
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{ min: '5', max: '59' }}
          ></TextField>
        </form>
        <form className={classes.textfield} noValidate>
          <TextField
            value={values.shortBreakDur}
            onChange={handleChange('shortBreakDur')}
            label="Short Break Duration"
            id="custom-short-break-duration"
            type="number"
            className={classes.formControl}
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{ min: '1', max: '59' }}
          ></TextField>
        </form>
        <form className={classes.textfield} noValidate>
          <TextField
            value={values.longBreakDur}
            onChange={handleChange('longBreakDur')}
            label="Long Break Duration"
            id="custom-long-break-duration"
            type="number"
            className={classes.formControl}
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{ min: '1', max: '59' }}
          ></TextField>
        </form>
      </FormGroup>
      <FormControl className={classes.formControl}>
        <InputLabel id="daily-avocadoro-goal">Daily Avocadoro Goal</InputLabel>
        <Select
          labelId="daily-avocadoro-goal"
          value={values.goal}
          onChange={handleChange('goal')}
        >
          {GenerateGoals()}
        </Select>
      </FormControl>
      <FormGroup row className={classes.textfield}>
        <FormControlLabel
          control={
            <Checkbox
              checked={values.autoStartAvocadoro}
              onChange={handleChangeCheck('autoStartAvocadoro')}
              value={values.autoStartAvocadoro}
            />
          }
          label="Auto Start Avocadoro"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={values.audio}
              onChange={handleChangeCheck('audio')}
              value={values.audio}
            />
          }
          label="Audio"
        />
      </FormGroup>
      <FormGroup row className={classes.textfield}>
        <FormControlLabel
          control={
            <Checkbox
              checked={values.autoStartBreak}
              onChange={handleChangeCheck('autoStartBreak')}
              value={values.autoStartBreak}
            />
          }
          label="Auto Start Breaks"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={values.notification}
              onChange={handleChangeCheck('notification')}
              value={values.notification}
            />
          }
          label="Desktop Notification"
        />
      </FormGroup>
      <div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Settings;
