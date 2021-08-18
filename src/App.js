import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/NavbarComponent/Navbar";

import Home from "./components/Home";
import Calendar from "./components/Calendar"

import "./App.css"




class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          
          <Switch>
            <Route path={"/home"}  component={Home}/>
            <Route path={"/calendar"}  component={Calendar}/>
          </Switch>

        </Router>
      </div>
      
    )
  }
}

export default App;
