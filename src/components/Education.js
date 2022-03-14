import { GiCutDiamond, GiLockedFortress, GiRocket } from 'react-icons/gi'

import '../App.js'
function Education() {
    return (
        <>
        <div class="card-box">
            <div class="row">
                <div class="col-sm-12">
                    <div class="section-title">
                        <h2>Education</h2>
                        <div class="title-border"></div>

                    </div>
                </div>
            </div>
            <div class="timeline-section">
                <div class="timeline-items">
                    <div class="timeline-item">
                        <div class="timeline-dot"><GiCutDiamond className='fb' /></div>
                        <div class="timeline-date">2011-2015</div>
                        <div class="timeline-content">
                            <h4>Minh Đạo Secondary School</h4>
                            <p>Minh Đạo Secondary School is located in Minh Dao - Tien Du - Bac Ninh.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"><GiLockedFortress className="fb" /></div>
                        <div class="timeline-date">2016-2018</div>
                        <div class="timeline-content">
                            <h4>Tien Du 1 High School</h4>
                            <p>Tien Du 1 High School is one of the top schools in Tien du - Bac Ninh.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"><GiRocket className='fb' /></div>
                        <div class="timeline-date">2019-2022</div>
                        <div class="timeline-content">
                            <h4>Ha Noi University of Industry</h4>
                            <p> 
                                Hanoi University of Industry is a public, multi-level, multi-vocational, practice-oriented university directly under the Ministry of Industry and Trade. The school was upgraded to a university in 2005 on the basis of Hanoi College of Industry 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}


export default Education