import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./Navbar.css"


class Navbar extends React.Component {

 
  
    
    render() {
     

        return(
         
                <div>
                    <nav class="navbar navbar-expand-lg fixed-top navbar-inverse" style={{backgroundColor:"rgb(20, 20, 20)"}}>
                    <a class="navbar-brand text-light " href="/">CyberDyne Vespa</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                            
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/resources">Resources</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/contacts">Contacts</a>
                            </li>
                           
                           
                            
                            </ul>
                            
                            
                        </div>
                    </nav>

                </div> 
                    
               
        )
    }   
}

export default Navbar
