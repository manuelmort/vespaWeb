import React from "react";
import "./Phone.css";
class Phone extends React.Component {




    render() {
        return(
            <div >
                
                <div className="phonescreen">
                    <img className = "phone-border" src="s20.png"/>
                    <video className="phone-video" width = "300" height = "460" autoPlay muted loop>
                        <source src="./discordRecording.mp4" type="video/mp4"/>
                    </video>
                </div>

                
            </div>
        )
    }
}
export default Phone;