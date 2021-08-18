import React, { Component } from 'react'

class BackEnd extends Component {

    constructor(props){
        super(props)
        
        this.state = { apiResponse : "" }
    }

    callAPI(){
        fetch("http://localhost:8080/test")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res}))
            .catch(err => err)
    }
    
    componentDidMount(){
        this.callAPI()
    }



    render(){
        return (
            <div>
                <h1>testing backEnd</h1>
            </div>
        )
    }
    
}

export default BackEnd;