import React from "react";
import HomeIntroText from "./HomeIntroText";
import DiscordWidget from "../widgets/DiscordWidget";
import Phone from "./Phone";
import LinkIcons from "../widgets/LinkIcons";

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
            <div >
                
               <HomeIntroText/>
               <Phone/>
               <DiscordWidget/>
                <LinkIcons/>
               
               
                
            </div>
        )
    }
}

export default Home;