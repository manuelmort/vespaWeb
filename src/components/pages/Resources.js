import React from "react";


export default class Resources extends React.Component {



    render() {
        return(
            <div className ="container mt-3">
                <div class="card-deck mt-3">
                    <div class="card bg-dark">
                        <div class="card-body">
                            <h5 class="card-title text-light">CPE</h5>
                           
                             <p class="card-text text-light">Computer Engineering Texts</p>
                             <p class="card-text"><small class="text-muted">Last updated: 2/28/2022</small></p>

                            <div className="text-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        CPE channels
                                    </button>
                                    <div class="dropdown-menu">

                                        <a class="dropdown-item" href="https://cdn.discordapp.com/attachments/751264154916225084/752257965918257293/The_Morgan_Kaufmann_Series_in_Computer_Architecture_and_Design_David_A._Patterson_John_L._Hennessy_-.pdf">CPE-142</a>
                                        <a class="dropdown-item" href="https://cdn.discordapp.com/attachments/751264154916225084/752255242590224455/intel_book.pdf">CPE-185</a>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-dark">
                        <div class="card-body">
                            <h5 class="card-title text-light">CSC</h5>
                            <p class="card-text text-light">Computer Science Texts</p>
                            <p class="card-text"><small class="text-muted">Last updated: 2/28/2022</small></p>

                            <div className ="text-center">
                                <div class="btn-group  m-3 row"   style={{minWidth:"100px"}}>
                                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            PRE-CSC
                                        </button>
                                        <div class="dropdown-menu row">
                                            <a class="dropdown-item" href="https://cdn.discordapp.com/attachments/751264154916225084/948108008985092126/Building_Java_Programs_A_Back_to_Basics_Approach_5th_Edition_by_Stuart_Reges_Marty_Stepp_z-lib.org.pdf">CSC-15,CSC-20</a>
                                            
                                            
                                        </div>
                                </div> 
                                <div class="btn-group m-3 row" style={{minWidth:"100px"}}>
                                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        CSC
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="https://cdn.discordapp.com/attachments/751264154916225084/752254566577471598/Algorithhms_4th_Edition_by_Robert_Sedgewick_Kevin_Wayne.pdf">CSC-130</a>
                                        <a class="dropdown-item" href="https://cdn.discordapp.com/attachments/751264154916225084/751541604443095100/Fundamentals_of_Database_Systems_7th_Edition_by_Ramez_Elmasri_Shamkant_B._Navathe.pdf">CSC-137</a>
                                        <a class="dropdown-item" href="https://cdn.discordapp.com/attachments/751264154916225084/751283872523747389/James_Kurose_Keith_Ross_-_Computer_Networking__A_Top-Down_Approach_7th_Edition.pdf">CSC-138</a>
                                        <a class="dropdown-item" href="https://cdn.discordapp.com/attachments/751264154916225084/751284155697987654/operating-system-concepts-10th.pdf">CSC-139</a>
                                        
                                        
                                    </div>
                                </div>
                            </div>                        
                        </div>
                        
                    </div>
                    <div class="card bg-dark">
                        <div class="card-body">
                        <h5 class="card-title text-light">EEE</h5>
                        <p class="card-text text-light">Electrical and Electronic Engineering Texts</p>
                        <p class="card-text"><small class="text-muted">Last updated: 2/28/2022</small></p>

                        <div className ="text-center">
                            <div class="btn-group">
                                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        EEE channels
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="https://cdn.discordapp.com/attachments/751264154916225084/752255057210114118/Microelectronic_7thed_Sedra.pdf">EEE-108</a>
                                        <a class="dropdown-item" href="https://cdn.discordapp.com/attachments/751264154916225084/948108404801540136/James_W._Nilsson_Susan_A._Riedel_-_Electric_Circuits_11th_Edition_2018_Pearson_-_libgen.lc.pdf">EEE-117</a>
                                        <a class="dropdown-item" href="https://cdn.discordapp.com/attachments/751264154916225084/753380151580033115/B._P._Lathi_-_Signal_Processing_and_Linear_Systems_-Oxford_University_Press_USA_2000_Bookmarked.pdf">EEE-180</a>
                                        <a class="dropdown-item" href="https://cdn.discordapp.com/attachments/751264154916225084/753380183461068980/Norman_S._Nise_-_Control_Systems_Engineering-Wiley_2015.pdf">EEE-184</a>

                                    </div>
                                </div>  
                            </div>                      
                        </div>
                    </div>
                    
                </div>
                <div class="card-deck mt-5">
                    <div class="card bg-dark">
                        <div class="card-body">
                        <h5 class="card-title text-white">ENGR</h5>
                        <p class="card-text text-white">General Engineering Texts</p>
                        <p class="card-text"><small class="text-muted">Last updated: 2/28/2022</small></p>
                        <div class="btn-group">
                                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    ENGR Channels
                                </button>
                                <div class="dropdown-menu">
                                <a class="dropdown-item" href="https://cdn.discordapp.com/attachments/751264154916225084/948108404801540136/James_W._Nilsson_Susan_A._Riedel_-_Electric_Circuits_11th_Edition_2018_Pearson_-_libgen.lc.pdf">ENGR-17</a>            
                                </div>
                            </div>                        
                        </div>
                    </div>
                   
                   
                    
                </div>
            </div>
        )
    }
}