import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
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
                        <h2>Software Engineer Intern at EchoWorx Corp. <span>2018-2019</span></h2>
                        <p>I was doing an internship at a Toronto local company called Echoworx which is a recognized leader in secure figital communication, especially in email encryption. In this role, I designed class interfaces with many <b>Design Patterns</b> such as Singleton and Factory Design Pattern and implemented automation test suite framework for new and existing features. Moreover, I developed an automated database migration test in <b>MySQL</b> to detect and fix data inconsistency. To support the R&D and QA team, I helped them maintain and configure Jenkins and web services such as <b>Apache Tomcat, Apache James</b> on Linux. Also, as a intern in the software development team, I participated in an Agile development (Scrum) team, improved the user interface using <b>Java Spring framework </b>and merged mobile web pages into Responsive Designed Front End Pages in jsp.</p>
                      </div>
                    </div>
                  </article>
                  {/*
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Computer Vision Intern at Huron Digital Pathology<span>2019</span></h2>
                        <p>Investigate several image feature extraction techniques and applied to the Whole Slide Image to evaluate their performance on histological images.
                        Developed a secured web application in NodeJS and React that helps the team communicating and sharing data with researchers in other institutions</p>
                      </div>
                    </div>
                  </article>
                  */}
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Research Assistant at University of Toronto <span>2017-2018</span></h2>
                        <p>Programmed a secured web application in Nodejs and React for the purpose of collecting audio recordings and response time from participants. Improved the previous audio processing model and minimized the audio processing latency to below 20ms. Designed a MySQL database to store the data collected in the experiment and to avoid web vulnerabilities</p> 
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
