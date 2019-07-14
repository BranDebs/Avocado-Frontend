import React from "react";

import Timer from './avocadoro/timer/Timer'
import TaskList from './avocadoro/task/TaskList'

class Home extends React.Component {
    render() {
      return(
        <div className="row section">
          <div className="col s6">
            <Timer/>
          </div>
          <div className="col s6">
            <TaskList/>
          </div>
        </div>
      );
    }
};

export default Home;
