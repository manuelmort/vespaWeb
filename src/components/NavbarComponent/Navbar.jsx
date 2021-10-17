import React from 'react'

import { MenuItems }  from './MenuItems'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./Navbar.css"


import { FaFacebookF, FaLinkedinIn ,FaSteam} from "react-icons/fa";



class Navbar extends React.Component {

    state = {
        clicked: false
    }
    handleClicked = () =>{
        this.setState({clicked: !this.state.clicked})
    }
  
    
    render() {
        return(
            <nav class="mb-1 navbar navbar-expand-lg navbar-dark default-color">
                <a class="navbar-brand" href="/home">
                    <img class="image-fluid" src="vespa-logo3.png" alt="vespa logo" width="120" height="100"></img>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent-3">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                            {
                                                MenuItems.map((item,index) => {
                                                    return (
                                                        <li class="nav-item text-white"key={index}>
                                                        <Link class="nav-link text-white p-3"  to={item.url}>
                                                                {item.title}
                                                            </Link> 
                                                        </li>
                                                    )
                                                })
                                            }
                    </ul>
                    <a href= "https://www.facebook.com/CyberDyneACEVESPA.CSUS" target="_blank" rel="noopener noreferrer"
                    class="text-white p-3">
                        <FaFacebookF/>
                    </a>

                    <a href="https://www.linkedin.com/in/cyberdyne-vespa-72916321a/" target="_blank" rel="noopener noreferrer"
                    class="text-white p-3">
                        <FaLinkedinIn/>
                    </a>
                    <a href ="https://steamcommunity.com/groups/CyberAceCC" target="_blank" rel="noopener noreferrer"
                    class="text-white p-3">
                        <FaSteam/>
                    </a>
                </div>
        </nav>
        )
    }   
}

export default Navbar
