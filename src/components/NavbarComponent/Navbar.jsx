import React from 'react'

import { MenuItems }  from './MenuItems'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./Navbar.css"
import AuthService from '../../services/auth.service';


import EventBus from "../../common/EventBus";



class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
          showModeratorBoard: false,
          showAdminBoard: false,
          currentUser: undefined,
        };
      }
      
      componentDidMount() {
        const user = AuthService.getCurrentUser();
    
        if (user) {
          this.setState({
            currentUser: user,
            showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
            showAdminBoard: user.roles.includes("ROLE_ADMIN"),
          });
        }

        EventBus.on("logout", () => {
            this.logOut();
        });
      
      }
      componentWillUnmount() {
        EventBus.remove("logout");
      }
    
      logOut() {
        AuthService.logout();
      }
  
    
    render() {
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

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
                                            {showModeratorBoard && (
                                                <li class ="nav-item">
                                                    <Link class="nav-link text-white p-3">Moderator</Link>
                                                </li>
                                            )}
                                            {showAdminBoard && (
                                                <li class ="nav-item">
                                                    <Link class="nav-link text-white p-3">Admin</Link>
                                                </li>
                                            )} 
                                            
                                           
                    </ul>
                    
                    
                    {currentUser ? (
                    
                        <div>
                            <ul class ="navbar-nav  mb-2 mb-lg-9">
                                <li className = "nav-item text-white">
                                    <Link to = {"/profile"} className="nav-link text-white p-3">{currentUser.username}</Link>

                                </li>
                                <li className="nav-item">
                                    <a href="/login" className="nav-link text-white p-3" onClick={this.logOut}>
                                            LogOut
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ): (
                        <ul class="navbar-nav  mb-2 mb-lg-9">
                        <li class="nav-item text-white">
                            <Link to={"/login"} class="nav-link text-white p-3">Login</Link>
                             
                        </li>
                        <li class="nav-item text-white">
                             <Link to={"/signup"} class="nav-link text-white p-3">Signup</Link> 
                        </li>
                    </ul>
                    )}

                    
                    
                    
                </div>
                
                
        </nav>
        )
    }   
}

export default Navbar
