import React from "react";
import "./LinkIcons.css";
import { FaFacebookF, FaLinkedinIn ,FaSteam} from "react-icons/fa";



class LinkIcons extends React.Component {
  render() {
    return (

      <div>
        <div className="linkContainer">

          
          
          <ul className="link-list">
            <a href= "https://www.facebook.com/CyberDyneACEVESPA.CSUS" target="_blank" rel="noopener noreferrer">
              <nobr className="facebook-link" >
                <FaFacebookF/>
              </nobr> 
            </a>
            <a href="https://www.linkedin.com/in/cyberdyne-vespa-72916321a/" target="_blank" rel="noopener noreferrer">
              <nobr className="linkedin-link">
                <FaLinkedinIn/>
                </nobr>  
            </a>
            <a href ="https://steamcommunity.com/groups/CyberAceCC" target="_blank" rel="noopener noreferrer"> 
              <nobr className="steam-link">
                <FaSteam/>
              </nobr>  
            </a>

          </ul> 
        </div>
          
      </div>
      
    )
  }
}
export default LinkIcons;