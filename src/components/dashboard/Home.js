import React from "react";

import Timer from './timer/Timer'
import Todo from './todo/Todo'
import Settings from './timer/Settings'

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
            <Todo/>
          </div>
        </div>
      );
    }
};

export default Home;
