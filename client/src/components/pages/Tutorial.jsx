import React, { Component } from 'react'
import { Container } from 'react-bootstrap'



class Tutorial extends Component {

  


    render(){
        return (
            <div>
                
                
                <Container>
                    <div className="row  bg-success rounded bg-opacity-50 p-3 mt-5 shadow">
                        <h2 className="text-center">Step 1</h2>
                        <div className="col">

                            <div className ="row">
                                <div className=" col">
                                    
                                    <h4>
                                        As soon as you enter the server, the first thing to do is to head over to #select-major channel
                                        to select your ECS major
                                    </h4>

                                </div>
                                
                                <div className = "col">
                                    <img 
                                        className="rounded"
                                        src="step1.png" 
                                        style={{maxWidth:"200px", maxHeight: "200px"}}></img>
                                </div>

                                
                            </div>
                        </div>

                        <div className="col">
                            <img 
                                className="rounded"
                                src="step1channel.png" 
                                style={{maxWidth:"400px", maxHeight: "400px"}}></img>
 
                        </div>

                    </div>





                    <div className="row bg-primary rounded bg-opacity-50 p-3 mt-5 shadow">
                    <h2 className="text-center text-primary">Step 2</h2>
                        <div className="col">

                            <div className = "row">
                                <h4 className = "col">

                                    Head over to unlock-"whatever major" and choose whether or not you're taking lower division
                                    courses or upperdivision. You can select both.
                                </h4>
                                <div className="col">
                                    <img 
                                        className="rounded"
                                        src="chooseClasses.png" 
                                        style={{maxWidth:"450px", maxHeight: "450px"}}></img>
                                </div>

                            </div>
                        </div>
                        
                        <div className="col">

                            <div className = "row">
                                <h4 className = "col">

                                   If you choose EEE upper-division key, you should now see the classes pop up and Voila,
                                   you can now chat with those who are and have taken those courses.
                                </h4>
                                <div className="col">
                                    <img 
                                        className="rounded"
                                        src="unlockedClasses.png" 
                                        style={{maxWidth:"150px", maxHeight: "300px"}}></img>
                                </div>

                            </div>
                            </div>

                    </div>
                
                </Container>
            </div>
        )
    }
    
}

export default Tutorial;