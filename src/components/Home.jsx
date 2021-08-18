import React from "react";
import * as dateFns from "date-fns";
import Clock from './Clock'


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


    time = {
        currentMonth: new Date(),
        currentDay:  new Date(),
        currentTime: new Date()
    }

    renderCurrentTime() {
        
    }
    
    renderCurrentDay() {
        const week = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday", "Friday","Saturday"]
        var dayElement = this.time.currentDay
        
        var dayOfWeek = week[dayElement.getDay()]
        
        return (dayOfWeek);

    }
    renderThis(){
        
        const dateFormat = "d MMMM yyyy"
        
        return (
            <div>
                <h1>Welcome Manny!</h1>
                <p>Today is:</p>
                <span>{this.renderCurrentDay()}</span> <br></br>

                <Clock/>
                <span>{dateFns.format(this.time.currentMonth, dateFormat)}</span>
            </div>
        )
    }

    render() {
        return this.renderThis()
    }
}

export default Home;