import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Nav from "./components/Nav.jsx";
import Collection from "./pages/Collection";
import MyBikes from "./pages/MyBikes";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Authentification from "./pages/Authentification";
import SingleBike from './templates/SingleBike'

import Test from '../src/pages/Test'

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/collection" component={Collection} />
        <Route path="/mybikes" component={MyBikes} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/authentification" component={Authentification} />
        <Route path='/bike-:id' component={SingleBike} />
        <Route path="/test" component={Test}/>
      </Switch>
    </div>
  );
}

export default App;
