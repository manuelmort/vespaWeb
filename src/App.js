import React from "react"
import { Switch, Route } from 'react-router-dom';
import Navbar from "./components/NavbarComponent/Navbar";

import LinkIcons from "./components/widgets/LinkIcons";


import "./App.css"
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";




class App extends React.Component {
  render() {
    return (
      
        <div>
          
          <Navbar/>
            
            <Switch>
              <Route path ='/' exact component={Home}/>
              <Route path ='/home' exact component={Home}/>
              <Route path ='/about' exact component={About}/>
              <Route path ='/contacts' exact component={Contacts}/>

            </Switch>

                 
            <LinkIcons/>

          
        </div>
      
      
    )
  }
}

export default App;
