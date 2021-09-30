import React from 'react'
import "./Navbar.css"
import { MenuItems }  from './MenuItems'
import { Link } from 'react-router-dom'


class Navbar extends React.Component {

    state = {
        clicked: false
    }
    handleClicked = () =>{
        this.setState({clicked: !this.state.clicked})
    }
  
    
    render() {
        return(
            <nav className = "NavbarItems">
                <img className = "navbar-logo" src = "/vespa-logo2.png" alt =""/>
                <div className="menu-icon" onClick= {this.handleClicked}>
                    
                    <i className={this.state.clicked? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {
                        MenuItems.map((item,index) => {
                            return (
                                <li key={index}>
                                   <Link className= {item.cName} to={item.url}>
                                        {item.title}
                                    </Link> 
                                </li>
                            )
                        })
                    }
                </ul>
                
            </nav>
        )
    }   
}

export default Navbar
