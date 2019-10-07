import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Home from "./components/dashboard/Home";
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import M from "materialize-css/dist/js/materialize.min.js";

class App extends React.Component {

  state = {
    isLoggedIn: false
  }

  render() {
    return (  

        <BrowserRouter>
          <div className="App">
            <Navbar Materialize = {M}/>
            <div className="container">
              <Route exact path="/" render={(props) => <Home {...props} Materialize={M}/>}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/signin" component={SignIn}/>
            </div>
          </div>
        </BrowserRouter>

    );
  }

}

export default App;
