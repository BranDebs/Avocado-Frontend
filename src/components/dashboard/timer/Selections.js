import React from 'react';
import './Timer.css';
import { TimeConst, TimerState } from './TimerConst';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const Selections = props => {
  const onClickFunc = e => {
    // Sets all collections to not be active
    let parentNodes = e.currentTarget.parentNode.parentNode.childNodes;
    parentNodes.forEach(element => {
      element.childNodes.forEach(node => {
        node.className = 'white-text';
      });
    });

    switch (e.currentTarget.name) {
      case 'avocadoro':
        props.setTimerFunc(TimeConst.AVOCADORO_TIME);
        props.setInitTimerFunc(TimeConst.AVOCADORO_TIME);
        props.setTimerStateFunc(TimerState.AVOCADORO);
        break;
      case 'short_break':
        props.setTimerFunc(TimeConst.SHORT_BREAK_TIME);
        props.setInitTimerFunc(TimeConst.SHORT_BREAK_TIME);
        props.setTimerStateFunc(TimerState.SHORT_BREAK);
        break;
      case 'long_break':
        props.setTimerFunc(TimeConst.LONG_BREAK_TIME);
        props.setInitTimerFunc(TimeConst.LONG_BREAK_TIME);
        props.setTimerStateFunc(TimerState.LONG_BREAK);
        break;
      case 'settings':
        props.setTimerToggleFunc(false);

      default:
        props.setTimerFunc(0);
        props.setInitTimerFunc(0);
        return;
    }
    e.currentTarget.className = 'active-tab white-text';
    props.setTimerToggleFunc(true);
  };

  return (
    <AppBar position="static">
      <Tabs value={0} aria-label="simple tabs example" variant="fullWidth">
        <Tab label="Avocadoro" {...a11yProps(0)} />
        <Tab label="Short Break" {...a11yProps(1)} />
        <Tab label="Long Break" {...a11yProps(2)} />
      </Tabs>
    </AppBar>
    // <div className="row">
    //   <div className="col s12">
    //     <div className="card-tabs cursor-pointer">
    //       <ul className="tabs pink accent-1">
    //         <li className="tab col s3"><a className="active-tab white-text" name="avocadoro" onClick={onClickFunc}>Avocadoro</a></li>
    //         <li className="tab col s3"><a className="white-text" name="short_break" onClick={onClickFunc}>Short Break</a></li>
    //         <li className="tab col s3"><a className="white-text" name="long_break" onClick={onClickFunc}>Long Break</a></li>
    //         <li className="tab col s3"><a href="#!" className="white-text">Settings</a></li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Selections;
