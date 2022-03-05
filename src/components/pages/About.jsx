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
                                    <img class="card-img-top" src="juan.jpg" alt="Card image cap"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">President</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm p-3">
                                
                                <div class="card" style={{width: "15rem"}}>
                                    <img class="card-img-top" src="juan.jpg" alt="Card image cap"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Vice president</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm p-3">
                                
                                <div class="card" style={{width: "15rem"}}>
                                    <img class="card-img-top" src="juan.jpg" alt="Card image cap"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Secretary</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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