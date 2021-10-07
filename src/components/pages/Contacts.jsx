import React, { Component } from 'react'
import "./Contacts.css"



class Contacts extends Component {

  


    render(){
        return (
            <div>
                
                

                <div className="emails">
                    <ul className="emailList">
                        <button className="emailbutton"><h1 className = "mainEmail"><a href="mailto:CSUS.CyberDyne755@hotmail.com">Email Us!</a></h1></button>
                        
                        <img className="alex-robot" src ="alex-robot.jpg" alt="happy robot"></img>

                    </ul>
                </div>
            </div>
        )
    }
    
}

export default Contacts;