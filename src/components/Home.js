import React from "react";

import Timer from './avocadoro/timer/Timer'
import TaskList from './avocadoro/task/TaskList'
import Settings from './avocadoro/timer/Settings'

class Home extends React.Component {

    render() {
      return(
        <div className="row section">
          <div className="col s6">
            <div className="row">
              <Timer/>
              <Settings Materialize={this.props.Materialize}/>
            </div>
          </div>
          <div className="col s6">
            <TaskList/>
          </div>
        </div>
      );
    }
};

export default Home;
