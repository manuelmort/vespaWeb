import React, { Component } from 'react'
import "./Contacts.css"



class Contacts extends Component {

  


    render(){
        return (
            <div>
                <h1 className="emailTitle">Email Us!</h1>

                <div className="emails">
                    <ul className="emailList">
                        <button><a href="mailto:CSUS.CyberDyne755@hotmail.com">CSUS.CyberDyne755@hotmail.com</a></button>
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