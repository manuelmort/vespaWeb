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
         
                <div className = "bg-light">
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
                                    <a class="nav-link text-dark" href="/tutorial">Tutorial</a>
                                </li>
                                
                                
                            </ul>



                        
                        <ul class="navbar-nav flex-row pt-1" style={{fontSize:"13px"}}>
                            <li class="">
                                <a href ="https://www.facebook.com/CyberDyneACEVESPA.CSUS" class="fb-ic text-dark">
                                    <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                            </li>

                            <a  href ="https://steamcommunity.com/groups/CyberAceCC" class="tw-ic text-dark">
                                <i class="fab fa-steam fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a href="https://www.linkedin.com/in/cyberdyne-vespa-72916321a/" class="li-ic text-dark">
                                <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a href ="https://discord.com/invite/gvsD9JgV?utm_source=Discord%20Widget&utm_medium=Connect" class="ins-ic text-dark">
                                <i class="fab fa-discord fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            
                        </ul>
                           
                           
                          
                        </div>
                    </nav>

                </div> 
                    
               
        )
    }   
}

export default Navbar
