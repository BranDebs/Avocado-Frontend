import React, {useEffect} from 'react';

const Settings = (props) => {
  const M = props.Materialize

  useEffect(() => {
    var elems = document.querySelectorAll('select');
    var options = {}
    var instances = M.FormSelect.init(elems, options);
  });

  const settingsSaved = ()  => {
    M.toast({html: 'Settings saved.'})
  }

  return(
    <div id="custom-card" className="container">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s4">
              <input placeholder="25" id="custom-avocadoro-duration" type="number" className="validate" min="5" max="59">
              </input>
              <label for="custom-avocadoro-duration">Avocadoro Duration</label>
            </div>
            <div className="input-field col s4">
              <input id="custom-short-break-duration" type="number" className="validate" min="1" max="59"></input>
              <label for="custom-short-break-duration">Short Break Duration</label>
            </div>
            <div className="input-field col s4">
              <input id="custom-long-break-duration" type="number" className="validate" min="1" max="59"></input>
              <label for="custom-long-break-duration">Long Break Duration</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <select id="custom-avocadoro-goal">
                <option value="" disabled selected>Avocadoro Goal</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <label>Daily Avocadoro Goal</label>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <div className="switch left">
                <label for="auto-start-avocadoros-switch">
                  Auto Start Avocadoros
                  <input id="auto-start-avocadoros-switch" type="checkbox" className="center"></input>
                  <span className="lever"></span>
                </label>
              </div>
            </div>
            <div className="col s6">
              <div className="switch left">
                <label for="audio-switch">
                  Audio
                  <input id="audio-switch" type="checkbox"></input>
                  <span className="lever"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <div className="switch left">
                  <label for="auto-start-breaks-switch">
                    Auto Start Breaks
                    <input id="auto-start-breaks-switch" type="checkbox"></input>
                    <span className="lever"></span>
                  </label>
                </div>
            </div>
            <div className="col s6">
              <div className="switch left">
                  <label for="desktop-notification-switch">
                    Desktop Notification
                    <input id="desktop-notification-switch" type="checkbox"></input>
                    <span className="lever"></span>
                  </label>
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col s3 right">
              <a id="save-settings" onClick={()=>this.settingsSaved()} className="btn">Save</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;