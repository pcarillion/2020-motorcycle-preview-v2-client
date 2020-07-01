import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home.jsx"
import Nav from "./components/Nav.jsx"




function App() {
  return (
    <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
    </div>
  )
}

export default App;
