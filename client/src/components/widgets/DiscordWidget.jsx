import React from "react";



class DiscordWidget extends React.Component {



    render() {
        return(
            <div>
                
                <div className ="disc-widget">
                    <iframe className = "widget" 
                    title="discord-widget"
                    src="https://discord.com/widget?id=355086293501214730&theme=dark" 
                    width="320" 
                    height="400" 
                    allowtransparency="true" 
                    frameborder="0" 
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">

                    </iframe>
                </div>
            </div>
        )
    }
}

export default DiscordWidget;