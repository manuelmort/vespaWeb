import React, { Component } from 'react'
import { Container } from 'react-bootstrap'



class Contacts extends Component {

  


    render(){
        return (
            <div>
                
                
                <Container 
                className="d-flex align-items-center justify-content-center"
                style ={{minHeight: "100vh"}}
                 >
                    <div className ="card bg-dark" style={{maxWidth:"400px"}}>

                        <img className="img-fluid w-100" src ="alex-robot.jpg" alt="happy robot"></img>

                        <div class="card-body">
                            <h1 class="card-title">Email Us!</h1>
                            <p class="card-text text-white">Have any Questions? Want to join and help improve the community? Now is the chance!</p>
                            <a href="mailto:CSUS.CyberDyne755@hotmail.com" class="btn btn-primary w-100">Go somewhere</a>

                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    
}

export default Contacts;