import React from "react";
import "./About.css"

class Home extends React.Component {

    //Calling BackEnd api
    constructor(props){
        super(props)
        
        this.state = { apiResponse : "" }
    }

    stscalendar = {
        name: "",
        dayOfWeek: ""
    }




    render() {
        return(
            <div className="aboutBody">
                <h1 className= "aboutTitle">About Us</h1>
                <p className="founderBio">
                <span className="vespa">VESPA</span> was established by a student with the Discord alias "GreatLeader_Technus" (ZERO.RX) on 07/28/17 who transfered from Solano Community College. The original CyberDyne + ACE is called FALCO, which was created by the same person for Solano Community College.
                </p>
                
            </div>
        )
    }
}

export default Home;