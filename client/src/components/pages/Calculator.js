import React from 'react';
import axios from 'axios';


export default class Calculator extends React.Component {
    
    componentDidMount() {
        console.log("test 1")
        axios.get("/calculator") 
            .then((res)=> {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    

    render() {
        return(
            <div>
                
            </div>
        )
    }
}