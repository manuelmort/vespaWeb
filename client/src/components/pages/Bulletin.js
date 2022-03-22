import React from 'react';

//Page under construction
export default class Bulletin extends React.Component {

    render() {
        return(
            <div>

                <div className = "container">
                    <div>
                        <h2 className = "text-dark">Announcements</h2>

                        <div>
                            <p className ="text-dark"> Some content</p>
                        </div>
                        
                    </div>
                    <div>
                        <h2 className = "text-dark">Upcoming Events</h2>



                            
                            <div className=" container bg-success bg-opacity-50 rounded shadow">
                                <div className ="container p-3">
                                    <h3 className="text-dark">
                                        Skribbl.io Game Night!
                                        
                                    </h3>
                                    <h4 className="text-dark">
                                        Friday March 11, 2022
                                    </h4>

                                    <p>This Friday we will be hosting a game night event for those wanting to meet friends in the ECS discord and have fun.</p>
                                    <p>Zoom Link: <a href="https://discord.com/channels/355086293501214730/492061244061253652">
                                            <button className ="btn btn-primary">
                                                Discord Channel Link
                                            </button>
                                        </a>
                                    </p>
                                    <p>Game: Skirbbl.io</p>
                                    <p>Description: skribbl io is a free multiplayer drawing and guessing game. Draw and guess words with your friends and people all around the world!</p>
                                </div>
                                

                            </div>

                            <div className=" container bg-primary mt-3 bg-opacity-50 rounded shadow">
                                <div className ="container p-3">
                                    <h3 className="text-dark">
                                        Sac State ECS Alumni Chapter Get-together meeting
                                        
                                    </h3>
                                    <h4 className="text-dark">
                                        Mar 19th, 2022
                                    </h4>

                                    <p>This event is aimed towards connecting all of Sac State ECS together, students and alumni, and building long-lasting relationships/partnerships with one another. Meet many engineers in different stages of their careers: managers, senior engineers, junior engineers, and etc. Let's all have a blast and enjoy the event together.</p>
                                    <p>Sign Up For Event Link: <a href="https://bit.ly/ecsmixermar22">
                                            <button className ="btn btn-primary">
                                                Sign Up!
                                            </button>
                                        </a>
                                    </p>
                                    <p>Zoom Link: <a href="https://csus.zoom.us/j/83342068072">
                                            <button className ="btn btn-primary">
                                                Zoom Session
                                            </button>
                                        </a>
                                    </p>
                                    

                                </div>
                                

                            </div>

                        <div>
                        </div>
                    </div>
                    <div>
                        <h2 className = "text-dark"></h2>
                    </div>
                </div>
                 
            </div>
        )
    }
}