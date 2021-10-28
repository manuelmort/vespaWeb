import React, { Component } from "react";

import AuthService from "../../services/auth.service";

import Clock from "../ClockComponent/Clock";



export default class UserHome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUser:AuthService.getCurrentUser()
        };
    }

    render() {
        const { currentUser } = this.state;

        return (
            <div>
                
                <div class="container" style ={{minHeight: "75vh"}}>
                    <div class="row">
                        <div class="col">
                            <h2>Welcome {currentUser.username}</h2>
                        </div>
                        <div class="col">
                            <h1>Your Home page</h1>
                        </div>
                        <div class="col">
                            
                            <div class = "w-50">
                            
                             <Clock/>
                            </div>
                                
                            
                        </div>
                    </div>
                    <div class="align-items-center justify-content-center" style={{maxWidth:"400px"}}>
                    <div>
                            <h1>You are now part of Vespa!</h1>
                    </div>

                    <div>
                        <h3>Your very own homepage, coming soon</h3>
                    </div>
                </div>
                </div>
               

                
                    
                
            </div>
        )
    }
}