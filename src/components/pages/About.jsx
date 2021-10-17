import React from "react";


import "./About.css"



class Home extends React.Component {

   



    render() {
        return(
            <div class="container p-5">
                <div className="row row-cols-1 row-cols-md-2 g-9">

                <div class="row">
                    <div>
                        <h1>
                            About Us
                        </h1>
                        <p class="text-white p-3"> VESPA was established by a student with the Discord alias "GreatLeader_Technus" (ZERO.RX) on 07/28/17
                        who transfered from Solano Community College. The original CyberDyne + ACE is called FALCO, which was created by the same person for Solano Community College.
                        </p>
                    </div>
                </div>
                <div class="row p-3">
                    <img class="w-70" src="oldmanzero.png"/>
                </div>
                <div class="row p-3">
                    
                    <h1 class="list-group-item text-white bg-transparent">CyberDyne VESPA Faculty Supporters </h1>
                    <ul class="list-group">
                        <h2 class="list-group-item text-white bg-transparent">Computer Science</h2>
                        <li class="list-group-item text-white bg-transparent">Anna Baynes (on Server)</li>
                        <li class="list-group-item text-white bg-transparent">Ruthann Biel</li>
                        <li class="list-group-item text-white bg-transparent">Sankar Srivatsa</li>
                        <li class="list-group-item text-white bg-transparent">Ben White (Retired, but still here on Server)
                        </li>
                        <li class="list-group-item text-white bg-transparent">Xiaoyan Sun</li>
                        <li class="list-group-item text-white bg-transparent">Jun Dai (was on server)</li>
                        <li class="list-group-item text-white bg-transparent">Gita Faroughi</li>
                        <li class="list-group-item text-white bg-transparent">Dr. Nikrouz Faroughi (CSC Dept. Chair) </li>
                    </ul>

        
                    <ul class="list-group">
                        <h2 class="list-group-item text-white bg-transparent">Computer Engineering</h2>
                        <li class="list-group-item text-white bg-transparent">Dennis Dahlquist (Our main Advisor; on Server)</li>
                        <li class="list-group-item text-white bg-transparent">Kris Moyer (Our IPC Advisor; on Server)</li>
                        <li class="list-group-item text-white bg-transparent">Dr. Praveen Meduri (CPE Dept Chair; on Server)</li>
                        
                    </ul>
                </div>
                <div class="row p-3">

                    <ul class="list-group">
                            <h2 class="list-group-item">Electrical Engineering</h2>
                            <li class="list-group-item text-white bg-transparent">Dr. Perry Heedley</li>
                            <li class="list-group-item text-white bg-transparent">Dr. Milica Markovic (On Server</li>
                            <li class="list-group-item text-white bg-transparent">Dr. Tracy Toups (On Server)</li>
                            <li class="list-group-item text-white bg-transparent">Prof. Jay Mearns</li>

                            
                    </ul>
                    <ul class="list-group">
                            <h2 class="list-group-item">Mechanical Engineering</h2>
                            <li class="list-group-item text-white bg-transparent">Mike Bell</li>

                    </ul>
                    <ul class="list-group">
                            <h2 class="list-group-item">Civil Engineering</h2>
                            <li class="list-group-item text-white bg-transparent">Dr. Ghazan Khan (CE Dept. Chair)</li>

                    </ul>
                
                </div>
                    
                    
                        
                    
                </div>
            </div>
        )
    }
}

export default Home;