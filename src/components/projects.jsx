import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Projects</span>
                <h2 className="colorlib-heading animate-box">Recent Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>AUTOMATIC REIGION FILLING & REMOVAL <span>2018</span></h2>
                        <p>	Performed object recognition training using <b>mask-RCNN</b> to detect the unfavored objects in the given image. Implemented and improved the <b>CBIR</b> algorithm to automatically erase the unfavored object and to perform image inpainting to fill in small image gaps</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>CONDO RATING WEBSITE<span>2018</span></h2>
                        <p>Inspired by the RateMyProfessor website, I wanted to build a website that can help people evaluate the condo or apartment they plan to move in from a insider's perspective. Current residents can register and login to the website and put down their opinions and rating regarding the building, while the perspective tenants or buyers can search for the building they are interested in using GoogleMap API. As a team lead of 4, we designed the <b>RESTful</b> website with a responsive front-end page in <b>Bootstrap</b>, <b>JQuery</b>, back-end in <b>Nodejs</b> and <b>Mongodb</b></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>EXT2 FILE SYSTEM <span>2018</span></h2>
                        <p>Implemented the EXT2 file system and wrote tools to modify the EXT2-format <b>virtual disk</b>. Simulated operations of a 2-level <b>Page Table</b> and <b>Page Replacement algorithm</b></p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>PARTIALLY OBSERVED IMAGE COMPLETION <span>2018</span></h2>
                        <p>Implemented a probabilistic model using <b>EM algorithm</b> which can apply to the image completion of partially observed handwritten digits. </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>KINEMATICS<span>2019</span></h2>
                        <p>Implemented a probabilistic model using <b>EM algorithm</b> which can apply to the image completion of partially observed handwritten digits. </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
