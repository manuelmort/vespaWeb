import React from "react";
import HomeIntroText from "./HomeIntroText";
import DiscordWidget from "../widgets/DiscordWidget";


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
               <DiscordWidget/>
               
                
            </div>
        )
    }
}

export default Home;