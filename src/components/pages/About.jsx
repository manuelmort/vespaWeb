import React from "react";


import "./About.css"


class Home extends React.Component {

   



    render() {
        return(
            <div className="aboutBody">
                <h1 className= "aboutTitle">About Us</h1>
                <p className="founderBio">
                <span className="vespa">VESPA</span> was established by a student with the Discord alias "GreatLeader_Technus" (ZERO.RX) on 07/28/17 <br></br>
                <img className="oldmanzero" src ="oldmanzero.png"></img>
                 who transfered from Solano Community College. The original CyberDyne + ACE is called FALCO, which was created by the same person for Solano Community College.
                </p>




                <div className="facultySection">
                    <h3 className="facultySupporters">CyberDyne VESPA Faculty Supporters</h3>
                        <ul className ="CSCfaculty">
                            <p className="field">Computer Science</p>
                            <p>Anna Baynes (on Server)</p>
                            <p>Ruthann Biel</p>
                            <p>Sankar Srivatsa</p>
                            <p>Ben White (Retired, but still here on Server)</p>
                            <p>Xiaoyan Sun</p>
                            <p>Jun Dai (was on server)</p>
                            <p>Gita Faroughi</p>
                            <p>Dr. Nikrouz Faroughi (CSC Dept. Chair)</p>
                            
                            
                        </ul>
                        <ul className="CPEfaculty">
                            <p className="field">Computer Engineering</p>
                            <p>Dennis Dahlquist (Our main Advisor; on Server)</p>
                            <p>Kris Moyer (Our IPC Advisor; on Server)</p>
                            <p>Dr. Praveen Meduri (CPE Dept Chair; on Server)</p>
                        </ul>
                        <ul className="EEEfaculty">
                            <p className="field">Electrical Engineering</p>
                            <p>Dr. Perry Heedley</p>
                            <p>Dr. Milica Markovic (On Server)</p>
                            <p>Dr. Tracy Toups (On Server)</p>
                            <p>Prof. Jay Mearns</p>

                        </ul>
                        <ul className="MEfaculty">
                            <p className="field">Mechanical Engineering</p>
                            <p>Mike Bell</p>
                        </ul>
                        <ul className="CEfaculty">
                            <p className="field">Civil Engineering</p>
                            <p>Dr. Ghazan Khan (CE Dept. Chair)</p>
                        </ul>
                    </div>
                    
                
            </div>
        )
    }
}

export default Home;