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
                                        Summer Of Serpentine 2022: Session 2 phase 1 
                                        
                                    </h3>
                                    <h4 className="text-dark">
                                        Wed June 1st 5:45pm - 6:30pm
                                    </h4>

                                    <p>Now we enter the magical, but strange world of Python Inheritance. You think you mastered it in JAVA or C++? Python gets a bit weird with this... stay tuned..... </p>
                                    <p>Haven't registered yet? Well Finals are over! Come join in what we do as a club! :D</p>
                                    <p>2nd Phase for those who can't make 5:45 will start the same day right after phase 1</p>
                                    <p>
                                    Zoom Link: <a href="https://csus.zoom.us/j/4633149447">
                                            <button className ="btn btn-primary">
                                                Zoom Session
                                            </button>
                                        </a>
                                    </p>
                                    <p>Registration Form: <a href = "https://forms.gle/fSQ2bSnvV7iZCB3W8"><button class = "btn btn-primary">Google Form</button></a></p>

                                    <p>Hosted By Geff Freire</p>
                                    
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