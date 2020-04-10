import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from 'pages/Home';
import SignUp from 'pages/SignUp';
import SignIn from 'pages/SignIn';
import About from '../pages/About';
import {
  MuiThemeProvider
} from '@material-ui/core/styles';
import { THEME } from 'const/theme';

class App extends React.Component {
  state = {
    isLoggedIn: false
  };

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={THEME}>
          <div style={{textAlign: "center"}}>
            <Navbar />
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
