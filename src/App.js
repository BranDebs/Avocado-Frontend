import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from "./components/Home";
import SignUp from './components/SignUp';
function App() {
  return (  
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={SignUp}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
