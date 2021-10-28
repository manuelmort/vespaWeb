import React from "react"
import { Switch, Route } from 'react-router-dom';
import Navbar from "./components/NavbarComponent/Navbar";
import Footer from "./components/widgets/Footer";


import AuthVerify from "./common/auth-verify";
import "./App.css"
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Login from "./login-signup-components/login.component"
import Register from "./login-signup-components/register.component"
import Profile from "./components/pages/profile.component";
import UserHome from "./components/UserPages/userHomepage";


class App extends React.Component {


  render() {
    

    return (
      


      <div>
        <div>
          
          
            <Navbar/>
          
            
            <Switch>
              <Route path ='/' exact component={Home}/>
              <Route path ='/home' exact component={Home}/>
              <Route path ='/about' exact component={About}/>
              <Route path ='/contacts' exact component={Contacts}/>
              <Route path = '/login' exact component={Login}/>
              <Route path = '/signup' exact component={Register}/>
              <Route path = '/profile' exact component={UserHome}/>

            </Switch>

                 
           

          
        </div>
        <AuthVerify logOut={this.logOut}/>

        <div class="pt-5">
          <Footer/>
        </div>
      </div>
      
      
    )
  }
}

export default App;
