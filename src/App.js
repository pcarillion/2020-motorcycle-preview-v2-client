import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./auth/ProtectedRoute";

import Home from "./pages/Home.jsx";
import Nav from "./components/Nav.jsx";
import Collection from "./pages/Collection";
import MyBikes from "./pages/MyBikes";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Authentification from "./pages/Authentification";
import SingleBike from './templates/SingleBike'
import Greeting from './pages/Greeting'

import Test from '../src/pages/Test'

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/collection" component={Collection} />
        
        <Route path="/about" component={About} />
        <Route path="/authentification" component={Authentification} />
        <Route path='/bike-:id' component={SingleBike} />
        <Route path='/welcome' component={Greeting} />
        <Route path="/test" component={Test}/>

        <ProtectedRoute path="/mybikes" component={MyBikes} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
