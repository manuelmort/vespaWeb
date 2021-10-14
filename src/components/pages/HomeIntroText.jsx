import React from "react";
import "./HomeIntroText.css"

class HomeIntroText extends React.Component {



    render() {
        return(
            <div>

                <div className="mainTitle">
                    <h1 className= "welcome">Welcome to CyberDyne VESPA & ACE VESPA</h1>
                    <hr className="homehr1"></hr>

                </div>
                <div className= "bodyIntro">
                    
                    <div className= "mainIntro">
                    
                        <h2>Sacramento State's official ECS students club</h2>

                        <h3>As the official student club for ECS majored students, we as representatives of CyberDyne VESPA seek to provide:</h3>
                        <ul className = "aboutlist">
                            <p>A <span className="colorHighlight">Community for ECS Majors</span> to learn each other's major's skillsets without the need of multi-majoring</p>
                            <p>A friendly place were students can learn to do more with skillsets they already have.</p>
                            <p>Neccessary career helps for students to ensure a better chance at success in a growing market.</p>
                            <p>A relaxing and fun zone for ECS Majors to kickback, relax, enjoy healthy Japanese Media (Anime, Manga, etc.), or go gaming!</p>
                        </ul>

                       
                    
                    </div>
                    

                
                    
                </div>
                <hr className="homehr2"></hr>
                <div className="club-features">
                    <h2 className="colorHighlight">Club features</h2>
                    <ul className="featureList">
                        <p>Study sectors for ALL ECS majors</p>
                        <p>More than <span class="colorHighlight">1000 members</span> across all ECS majors</p>
                        <p>Warp zone to other clubs such as ACM, IEEE, Cyber Defense ...</p>
                        <p>Homework/Projects helps (within the rules of Sac State)</p>
                        <p>Career helps such as resume review/advice, internship/job offers</p>
                    </ul>
                </div>
                <hr className="homehr3"></hr>
            </div>
        )
    }
}

export default HomeIntroText;