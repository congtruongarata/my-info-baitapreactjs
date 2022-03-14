
function Portfolio() {
    return (
        <div class="col-sm-12">
            <div class="card-box" id="work">
                <div class="row">
                    <div class="col-md-12 col-xs-12">
                        <div class="section-title">
                            <h2 class="">Portfolio</h2>
                            <div class="title-border"></div>
                        </div>
                    </div>
                </div>
                <div class="row" >
                    <div class="col-xs-12">

                        <ul class="list-unstyled list-inline lrs-list-protfolio" id="filter">
                            <li class="active fil-cat" data-rel="all"><a href="#">All</a></li>
                            <li class="fil-cat" data-rel="web"><a href="#">Html / CSS</a></li>
                            <li class="fil-cat" data-rel="js"><a href="#">JavaScript</a> </li>
                            <li class="fil-cat" data-rel="wordpress"><a href="#">Wordpress</a> </li>
                        </ul>
                    </div>
                    <div class="col-md-12 col-xs-12">
                        <div class="lrs-projects">
                            <div class="lrs-project scale-anm web js all" data-toggle="modal" data-target="#one">
                                <div class="lrs-project-image">
                                    <img src="https://i.pinimg.com/474x/d4/76/63/d47663c81cd680828c4143311acac0ce.jpg" class="img-responsive" alt="Resume / CV" />
                                    <div class="lrs-project-content">
                                        <h6 class="lrs-project-title">Lorem ipsum dolor</h6>
                                        <p class="lrs-project-client"><b>GOOGLE</b></p>
                                    </div>
                                </div>
                            </div>
                            <div class="lrs-project scale-anm js html all" data-toggle="modal" data-target="#one">
                                <div class="lrs-project-image">
                                    <img src="https://img.wattpad.com/cover/293570958-256-k528410.jpg" class="img-responsive" alt="Resume / CV" />
                                    <div class="lrs-project-content">
                                        <h6 class="lrs-project-title">Lorem ipsum dolor</h6>
                                        <p class="lrs-project-client"><b>YAHOO</b></p>
                                    </div>
                                </div>
                            </div>
                            <div class="lrs-project scale-anm js web all" data-toggle="modal" data-target="#one">
                                <div class="lrs-project-image">
                                    <img src="https://img.wattpad.com/cover/275625997-256-k908674.jpg" class="img-responsive" alt="Resume / CV" />
                                    <div class="lrs-project-content">
                                        <h6 class="lrs-project-title">Lorem ipsum dolor</h6>
                                        <p class="lrs-project-client"><b>MICROSOFT</b></p>
                                    </div>
                                </div>
                            </div>
                            <div class="lrs-project scale-anm web all" data-toggle="modal" data-target="#one">
                                <div class="lrs-project-image">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWZtRum1me68cPTh_dM3m2bT1Repk5x9_MQ&usqp=CAU" class="img-responsive" alt="Resume / CV" />
                                    <div class="lrs-project-content">
                                        <h6 class="lrs-project-title">Lorem ipsum dolor</h6>
                                        <p class="lrs-project-client"><b>FACEBOOK</b></p>
                                    </div>
                                </div>
                            </div>
                            <div class="lrs-project scale-anm js wordpress all" data-toggle="modal" data-target="#one">
                                <div class="lrs-project-image">
                                    <img src="https://a-static.besthdwallpaper.com/jujutsu-kaisen-toge-inumaki-hinh-nen-3840x2160-73141_54.jpg" class="img-responsive" alt="Resume / CV" />
                                    <div class="lrs-project-content">
                                        <h6 class="lrs-project-title">Lorem ipsum dolor</h6>
                                        <p class="lrs-project-client"><b>INTEL</b></p>
                                    </div>
                                </div>
                            </div>
                            <div class="lrs-project scale-anm web all" data-toggle="modal" data-target="#one">
                                <div class="lrs-project-image">
                                    <img src="https://i1.sndcdn.com/avatars-dHZI7ccDacRc8Sjb-wI4uPA-t500x500.jpg" class="img-responsive" alt="Resume / CV" />
                                    <div class="lrs-project-content">
                                        <h6 class="lrs-project-title">Lorem ipsum dolor</h6>
                                        <p class="lrs-project-client"><b>FACEBOOK</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio