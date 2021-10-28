import React, { Component } from 'react';
import * as dateFns from "date-fns";
import "./Clock.css"

//Purpose: Comonponent that provides the current Date and Time

class Clock extends Component {
    constructor(props){
        super(props);

        //This declared the state of time at the very beginning
        this.state ={
            time: new Date().toLocaleTimeString()
        }
        
    }

    time = {
        currentMonth: new Date(),
        currentDay:  new Date(),
        currentTime: new Date()
    }

    //This happens when the component mount and the setInterval function get called with a call back function updateClock()
    componentDidMount() {
        this.intervalID = setInterval(() =>
            this.updateClock(),
            1000
        );
    }

    //This section clears setInterval by calling intervalID so as to optimise memory
    componentWillUnmount(){
        clearInterval(this.intervalID)
    }

    //This function set the state of the time to a new time
    updateClock(){
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }

    renderCurrentDay() {
        const week = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday", "Friday","Saturday"]
        var dayElement = this.time.currentDay
        
        var dayOfWeek = week[dayElement.getDay()]
        
        return (dayOfWeek);

    }
    renderDay(){
        
        const dateFormat = "d MMMM yyyy"
        
        return (
            <div>
                <p>Today is:</p>
                <span>{this.renderCurrentDay()}</span> <br></br>
                <span>{dateFns.format(this.time.currentMonth, dateFormat)}</span>
            </div>
        )
    }
  
    render() {
        return (
            <>
                <div className="container bg-dark rounded">
                    <div class="p-3">
                        <div className="">
                            <span>{this.renderDay()}</span>
                        </div>
                        <div className="time">
                            <p> {this.state.time}</p>
                            
                        </div>
                    </div>
                </div>
            
            </>
        );
    }
}

export default Clock;