import React, { Component } from 'react'
import "./Contacts.css"



class Contacts extends Component {

  


    render(){
        return (
            <div>
                
                

                <div className="emails">
                    <ul className="emailList">
                        <button className="emailbutton"><h1 className = "mainEmail"><a href="mailto:CSUS.CyberDyne755@hotmail.com">Email Us!</a></h1></button>
                        <p>More than 800 members across all ECS majors</p>
                        <p>Warp zone to other clubs such as ACM, IEEE, Cyber Defense ...</p>
                        <p>Homework/Projects helps (within the rules of Sac State)</p>
                        <p>Career helps such as resume review/advice, internship/job offers</p>

                        

                    </ul>
                </div>
            </div>
        )
    }
    
}

export default Contacts;