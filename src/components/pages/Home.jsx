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
            

            <div class="container bg-light">

                <div className="card w-100 bg-transparent p-3">
                    <h1 className= "text-dark">Welcome to CyberDyne VESPA & ACE VESPA</h1>
                    

                </div>
                <div class="row row-cols-1 row-cols-md-2 g-9">
                    <div class="col">
                        <div className= "card w-100 bg-transparent col pt-5">
                            
                            <div className= "">
                            
                                <h2 className="">Sacramento State's official ECS students club</h2>

                                <ul class = "list-group bg-success bg-opacity-50 mt-5 shadow">
                                    <p class="list-group-item text-dark bg-transparent">A <span className="colorHighlight">Community for ECS Majors</span> to learn each other's major's skillsets without the need of multi-majoring</p>
                                    <p class="list-group-item text-dark bg-transparent">A friendly place were students can learn to do more with skillsets they already have.</p>
                                    <p class="list-group-item text-dark bg-transparent">Neccessary career helps for students to ensure a better chance at success in a growing market.</p>
                                    <p class="list-group-item text-dark bg-transparent">A relaxing and fun zone for ECS Majors to kickback, relax, enjoy healthy Japanese Media (Anime, Manga, etc.), or go gaming!</p>
                                </ul>

                            
                            
                            </div>
                        </div>
    
                    </div>
                    
                    <div class="col">
                        <div class="ml-5 pl-5 pt-3">
                            <Phone/>
                        </div>
                        
                        

                    </div>

                    
                    
                        <div class="col p-3 mt-5">
                            <div class="ml-4 pt-5 mt-5">
                                
                                    <DiscordWidget className="shadow"/>

                                
                            </div>
                            
                        </div>

                        <div className ="mt-5 pt-5">

                            <div class="col mt-5 bg-transparent ">
                            <h2 className="card-body pt-5 mt-5 bg-transperant">Club features</h2>

                                
                                    <ul class = "list-group bg-success bg-opacity-50 mt-3 shadow">
                                    
                                        <p class="list-group-item text-dark bg-transparent" >Study sectors for ALL ECS majors</p>
                                        <p class="list-group-item text-dark bg-transparent ">More than <span class="colorHighlight">1000 members</span> across all ECS majors</p>
                                        <p class="list-group-item text-dark bg-transparent ">Warp zone to other clubs such as ACM, IEEE, Cyber Defense ...</p>
                                        <p class="list-group-item text-dark bg-transparent ">Homework/Projects helps (within the rules of Sac State)</p>
                                        <p class="list-group-item text-dark bg-transparent">Career helps such as resume review/advice, internship/job offers</p>
                                    
                                    </ul>
                            
                            </div>
                        </div>
                    
                    

                </div>
            </div>
        )
    }
}

export default HomeIntroText;