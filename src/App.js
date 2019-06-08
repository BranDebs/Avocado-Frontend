import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
//import Home from "./components/Home";
import SignUp from './components/SignUp';
class App extends React.Component {

  state = {
    hello: 1,
    bye: 2,
  }

  render() {
    return (  

        <BrowserRouter>
          <Route path="/signup" component={SignUp}/>
          <div className="App">
            <Navbar></Navbar>
          </div>
        </BrowserRouter>

    );
  }

}

export default App;
