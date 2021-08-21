import React from "react";
import Clock from './ClockComponent/Clock'


class Home extends React.Component {

    //Calling BackEnd api
    constructor(props){
        super(props)
        
        this.state = { apiResponse : "" }
    }

    callAPI(){
        fetch("http://localhost:8080/home")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res}))
            .catch(err => err)
    }
    
    componentDidMount(){
        this.callAPI()
    }


    render() {
        return(
            <div>
                <Clock/>
            </div>
        )
    }
}

export default Home;