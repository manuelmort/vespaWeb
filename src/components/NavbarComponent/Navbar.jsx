import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./Navbar.css"


class Navbar extends React.Component {

 
  
    
    render() {
     

        return(
         
                <div className = "">
                    <nav class="navbar navbar-expand-lg bg-light fixed-top navbar-inverse">
                    <a class="navbar-brand text-dark " href="/">CyberDyne Vespa</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    
                        <span class="navbar-toggler-icon text-dark mr-3"> <AiOutlineMenu/></span>
                        
                    </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">

                            <li class="nav-item">
                                <a class="nav-link text-dark" href="/Bulletin">Bulletin</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="/resources">Resources</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="/contacts">Contacts</a>
                            </li>
                           
                           
                            
                            </ul>
                            
                            
                        </div>
                    </nav>

                </div> 
                    
               
        )
    }   
}

export default Navbar
