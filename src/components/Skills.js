import { AiOutlineCloudDownload } from 'react-icons/ai'
import { WiUmbrella } from 'react-icons/wi'
import { GiTrophyCup, GiSelfLove } from 'react-icons/gi'
import '../App.js'

function Skills() {
    return (
        <>
            <div class="card-box">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="section-title">
                            <h2>skills</h2>
                            <div class="title-border"></div>
                            <p>
                            Basic knowledge of HTML, CSS, Javascript. Proficient in and working with SQL. English communication, listening, reading. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-sm-3">
                        <div className="box" >
                            <div className="skill">
                                <div class="outer">
                                    <div class="inner">
                                        <div id="number">80%</div>
                                    </div>
                                </div>

                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>

                            </div><br />
                        </div>
                        <h4>HTML, CSS</h4>
                    </div>
                    <div className="col-sm-3">
                        <div className="box1">
                            <div className="skill">
                                <div class="outer">
                                    <div class="inner">
                                        <div id="number">70%</div>
                                    </div>
                                </div>

                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>

                            </div><br />
                        </div>
                        <h4>JavaScript</h4>
                    </div>
                    <div className="col-sm-3">
                        <div className="box2">
                            <div className="skill">
                                <div class="outer">
                                    <div class="inner">
                                        <div id="number">60%</div>
                                    </div>
                                </div>

                                <svg width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>

                            </div><br />
                        </div>
                        <h4>SQL</h4>
                    </div>
                    <div className="col-sm-3">
                        <div className="box3">
                            <div className="skill">
                                <div class="outer">
                                    <div class="inner">
                                        <div id="number">30%</div>
                                    </div>
                                </div>

                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>

                            </div><br />
                        </div>
                        <h4>ENDLISH</h4>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills