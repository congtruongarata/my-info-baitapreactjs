import '../App.js'
import { GiCutDiamond, GiLockedFortress, GiRocket } from 'react-icons/gi'

function Experience() {
    return (
        <div className="card-box">
            <div class="row">
                <div class="col-sm-12">
                    <div class="section-title">
                        <h2>Experience</h2>
                        <div class="title-border"></div>

                    </div>
                </div>
            </div>
            <div class="timeline-section">
                <div class="timeline-items">
                    <div class="timeline-item">
                        <div class="timeline-dot"><GiCutDiamond className='fb' /></div>
                        <div class="timeline-date">2019-2022</div>
                        <div class="timeline-content">
                            <h4>Ha Noi University of Industry</h4>
                            <p>Final year student of Hanoi University of Industry.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"><GiLockedFortress className="fb" /></div>
                        <div class="timeline-date">2022</div>
                        <div class="timeline-content">
                            <h4>Intern of Rikkeisoft Company</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience