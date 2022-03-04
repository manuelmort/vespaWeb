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
                                        Club Meeting #1 + Open House Day
                                        
                                    </h3>
                                    <h4 className="text-dark">
                                        March 04, 2022
                                    </h4>

                                    <p>This Friday we will be holding our first Open House, We will be introducing the rework of Cyberdyne-Vespa for the second generation.</p>
                                    <p>Zoom Link: <a href="https://csus.zoom.us/j/83342068072">
                                            <button className ="btn btn-primary">
                                                Zoom Session
                                            </button>
                                        </a>
                                    </p>
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