import React from "react"
import { Switch, Route } from 'react-router-dom';
import Navbar from "./components/NavbarComponent/Navbar";
import Footer from "./components/widgets/Footer";


import "./App.css"
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Resources from "./components/pages/Resources";
import Bulletin from "./components/pages/Bulletin";
import Tutorial from "./components/pages/Tutorial";

class App extends React.Component {


  render() {
    

    return (
      


      <div className ="">
        <div className = "bg-light">
          
            
          <Navbar/>
          
            
            <Switch>
              <Route path ='/' exact component={Home}/>
              <Route path ='/home' exact component={Home}/>
              <Route path ='/about' exact component={About}/>
              <Route path ='/resources' exact component={Resources}/>
              <Route path ='/tutorial' exact component={Tutorial}/>
              <Route path ='/bulletin' exact component={Bulletin}/>

             

            </Switch>

                 
           

          
        </div>
     

        <div class="pt-5">
          <Footer/>
        </div>
      </div>
      
      
    )
  }
}

export default App;
