import React from "react";

import "./HomeIntroText.css"

class HomeIntroText extends React.Component {



    render() {
        return(
            <div>

                <div className="mainTitle">
                    <h1 className= "welcome">Welcome to CyberDyne VESPA & ACE VESPA</h1>

                </div>
                <div className= "bodyIntro">
                    
                    <div className= "mainIntro">
                    
                        <h2>Sacramento State's official ECS students club</h2>
                        <h3>As the official student club for ECS majored students, we as representatives of CyberDyne VESPA seek to provided:</h3>
                        <ul className = "aboutlist">
                            <p>A <span className="colorHighlight">Community for ECS Majors</span> to learn each other's major's skillsets without the need of multi-majoring</p>
                            <p>A friendly place were students can learn to do more with skillsets they already have.</p>
                            <p>Neccessary career helps for students to ensure a better chance at success in a growing market.</p>
                            <p>A relaxing and fun zone for ECS Majors to kickback, relax, enjoy healthy Japanese Media (Anime, Manga, etc.), or go gaming!</p>
                        </ul>
                    
                    </div>

                
                    
                </div>
            </div>
        )
    }
}

export default HomeIntroText;