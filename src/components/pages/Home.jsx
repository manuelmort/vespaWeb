import React from "react";
import DiscordWidget from "../widgets/DiscordWidget";
import "./Home.css"
import Phone from "./Phone"

class HomeIntroText extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            content: ""
        };
    }


    render() {
        return(
            

            <div class="container">

                <div className="card w-100 bg-transparent p-3">
                    <h1 className= " text-success">Welcome to CyberDyne VESPA & ACE VESPA</h1>
                    

                </div>
                <div class="row row-cols-1 row-cols-md-2 g-9">
                    <div class="col">
                        <div className= "card w-100 bg-transparent col pt-5">
                            
                            <div className= "">
                            
                                <h2 className="text-primary">Sacramento State's official ECS students club</h2>

                                <h4 class="list-group-item text-white bg-transparent mt-3">As the official student club for ECS majored students, we as representatives of CyberDyne VESPA seek to provide:</h4>
                                <ul class = "list-group bg-dark mt-5">
                                    <p class="list-group-item text-white bg-dark">A <span className="colorHighlight">Community for ECS Majors</span> to learn each other's major's skillsets without the need of multi-majoring</p>
                                    <p class="list-group-item text-white bg-dark">A friendly place were students can learn to do more with skillsets they already have.</p>
                                    <p class="list-group-item text-white bg-dark">Neccessary career helps for students to ensure a better chance at success in a growing market.</p>
                                    <p class="list-group-item text-white bg-dark">A relaxing and fun zone for ECS Majors to kickback, relax, enjoy healthy Japanese Media (Anime, Manga, etc.), or go gaming!</p>
                                </ul>

                            
                            
                            </div>
                        </div>
                        

                    
                        
                    </div>
                    
                    <div class="col">
                        <div class="ml-5 pl-5 pt-3">
                            <Phone/>
                        </div>
                        
                        

                    </div>

                    
                    
                    <div class="col p-3">
                        <div class="ml-4 pt-5">
                            <DiscordWidget/>
                        </div>
                        
                    </div>

                    <div class="col">
                
                        <div className="card w-100 bg-transparent">
                            <h2 className="card-body pt-5 text-primary">Club features</h2>
                            <ul class = "list-group pl-3">
                                <p class="list-group-item text-white bg-dark " >Study sectors for ALL ECS majors</p>
                                <p class="list-group-item text-white bg-dark ">More than <span class="colorHighlight">1000 members</span> across all ECS majors</p>
                                <p class="list-group-item text-white bg-dark ">Warp zone to other clubs such as ACM, IEEE, Cyber Defense ...</p>
                                <p class="list-group-item text-white bg-dark">Homework/Projects helps (within the rules of Sac State)</p>
                                <p class="list-group-item text-white bg-dark ">Career helps such as resume review/advice, internship/job offers</p>
                            </ul>
                        </div>
                    </div>
                    

                </div>
            </div>
        )
    }
}

export default HomeIntroText;