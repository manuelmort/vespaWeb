import React from "react";


import "./About.css"



class Home extends React.Component {

    render() {
        return(
            <div class="container p-5">


                <div>
                    <h1>About us</h1>
                    <p>under construction</p>
                </div>
                <div class="row">

                        <div className = "row">
                            <div className="col-sm p-3">
                                
                                <div class="card" style={{width: "15rem"}}>
                                    <img class="card-img-top" src="jeff.jpg" alt="Card image cap" style={{minHeight:"275px"}}></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Founder of Vespa</h5>
                                        <h6 class="card-text">Geff Freire</h6>
                                        <p class="card-text">Status: Graduate</p>
                                        <p className ="card-text">Degree: B.S. in Computer Engineering</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm p-3">
                                
                                <div class="card" style={{width: "15rem"}}>
                                    <img class="card-img-top" src="lonnie1.png" alt="Card image cap" style={{minHeight:"275px"}}></img>
                                    <div class="card-body">
                                        <h5 class="card-title">On-Campus President</h5>
                                        <h6 class="card-text">Lonathan Elijouan Spann Jr.</h6>
                                        <p class="card-text">Status: Senior Year</p>
                                        <p className ="card-text">Major: Computer Engineering</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm p-3">
                                
                                <div class="card" style={{width: "15rem"}}>
                                    <img class="card-img-top" src="juan.jpg" alt="Card image cap" style={{maxHeight:"300px"}}></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Vice president</h5>
                                        <h6 class="card-text">Juan Carlos Gonzales</h6>
                                        <p class="card-text">Status: Junior Year</p>
 
                                        <p class="card-text"> Major: Civil Engineering</p>

                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-sm p-3">
                                
                                <div class="card" style={{width: "15rem"}}>
                                    <img class="card-img-top" src="juan.jpg" alt="Card image cap"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Treasurer</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                </div>



            </div>


           
        )
    }
}

export default Home;