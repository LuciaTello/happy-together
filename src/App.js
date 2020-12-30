import './App.css';
import React from "react";
import {Route, Switch} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import TestPage from "./components/TestPage";

function App() {
  return (
    <div className="App">
     <Switch>
        <Route exact path = "/" component = {LandingPage} />
        <Route exact path = "/testPage" component = {TestPage} />
      </Switch>
    </div>
  );
}

export default App;
