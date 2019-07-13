import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from "./components/Home";
import SignUp from './components/SignUp';
class App extends React.Component {

  state = {
    hello: 1,
    bye: 2,
    isLoggedIn: false
  }

  render() {
    return (  

        <BrowserRouter>
          <div className="App">
            <Navbar/>
            <div className="container">
              <Route exact path="/" component={Home}/>
              <Route path="/signup" component={SignUp}/>
            </div>
          </div>
        </BrowserRouter>

    );
  }

}

export default App;
