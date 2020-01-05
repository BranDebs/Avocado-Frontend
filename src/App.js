import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Home from './components/dashboard/Home';
import SignUpForm from './components/auth/SignUpForm';
import SignInForm from './components/auth/SignInForm';
import About from './components/about/About';

class App extends React.Component {
  state = {
    isLoggedIn: false
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/signin" component={SignInForm} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
