import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import { FaGraduationCap } from "react-icons/fa"
import { MdWork } from "react-icons/md"
import { AiOutlineCalendar } from "react-icons/ai"
import classes from "../../styles/about.module.css";

const About = () => {
  const [edu, setEdu] = useState(true)
  const [work, setWork] = useState(false)
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            {/* <SectionSubtitle subtitle="About me" /> */}
            <h3 className="mt-4" style={{ color: "#01edff" }}>About Me</h3>
            <p>
              ▹My name is Keerthi malini a Full Stack Web Developer  with hands on experience in building React Apps. Works efficiently both in frontend as well as backend and is proficient in Data Structure and Algorithms with good problem solving skills.<br />
              ▹As a Full Stack Web Developer, I'm passionate about building highly functional and visually appealing web applications. With my strong understanding of both frontend and backend technologies, I can create seamless web experiences that delight users.<br />
              ▹I'm always eager to take on new challenges and push myself to learn new skills.<br />
              ▹Overall, I'm a highly motivated and detail-oriented Full Stack Web Developer with a track record of delivering high-quality work on time and within budget. I'm committed to staying up-to-date with the latest web development trends and technologies, and I'm always looking for new opportunities to hone my skills and grow as a developer.

            </p>

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Adaptability
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Time management
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Team worker
                </h6>
              </div>
            </div>

          </Col>

          <Col lg="6">
            <div className={`${classes.qualification__section}`} >
              <h3 style={{ color: "#01edff" }} className={`${classes.section__title}`}>Qualificaton</h3>
              <p className={`${classes.section__subtitle}`}>My personal journey</p>
              <div className={`${classes.qualification__container}`}>
                <div className={`${classes.qualification__tabs}`} style={{ display: "flex" }}>
                  <div className={`${classes.button__flex}`} style={{ color: edu ? '#01edff' : 'white', cursor: "pointer" }} onClick={() => { setEdu(true); setWork(false) }}>
                    <FaGraduationCap style={{ marginRight: "8px", fontSize: "1.8rem", color: edu ? '#01edff' : 'white' }} />
                    Education
                  </div>
                  <div className={`${classes.button__flex}`} style={{ color: work ? '#01edff' : 'white', cursor: "pointer" }} onClick={() => { setEdu(false); setWork(true) }}>
                    <MdWork style={{ marginRight: "8px", fontSize: "1.8rem", color: work ? '#01edff' : 'white' }} />
                    Work
                  </div>
                </div>
              </div>
              <div className="qualification__sections">
                <div className={`${classes.qualification__content}`} data-content id="education" style={{ display: edu ? 'block' : 'none' }} >

                  {/* Qualification 1 */}
                  <div className={`${classes.qualification__data}`}>
                    <div>
                      <h4 className={`${classes.qualification__title}`}>Full Stack Web Developement</h4>
                      <span className={`${classes.qualification__subtitle}`} style={{ color: "white" }}>Masai School</span>
                      <div className={`${classes.qualification__calendar}`} style={{ color: "white" }}>
                        <AiOutlineCalendar style={{ marginRight: "8px", fontSize: "1.4rem" }} />
                        Aug 2022 - Apr 2023
                      </div>
                    </div>
                    <div>
                      <span className={`${classes.qualification__rounder}`} ></span>
                      <span className={`${classes.qualification__line}`}></span>
                    </div>
                  </div>
                  {/* Qualification 2 */}
                  <div className={`${classes.qualification__data}`}>
                    <div></div>
                    <div>
                      <span className={`${classes.qualification__rounder}`}></span>
                      <span className={`${classes.qualification__line}`} ></span>
                    </div>
                    <div>
                      <h4 className={`${classes.qualification__title}`}>Electricl and Electronics Engineering</h4>
                      <span className={`${classes.qualification__subtitle}`} style={{ color: "white" }}>Anna university</span>
                      <div className={`${classes.qualification__calendar}`} style={{ color: "white" }}>
                        <AiOutlineCalendar style={{ marginRight: "8px", fontSize: "1.4rem" }} />
                        Jun 2016 - Apr 2020
                      </div>
                    </div>
                  </div>
                  {/* Qualification 3 */}
                  <div className={`${classes.qualification__data}`}>
                    <div>
                      <h4 className={`${classes.qualification__title}`}>Higher Secondary</h4>
                      <span className={`${classes.qualification__subtitle}`} style={{ color: "white" }}>AKKV Aarunadu School</span>
                      <div className={`${classes.qualification__calendar}`} style={{ color: "white" }}>
                        <AiOutlineCalendar style={{ marginRight: "8px", fontSize: "1.4rem" }} />
                        Jun 2014 - Apr 2016
                      </div>
                    </div>
                    <div>
                      <span className={`${classes.qualification__rounder}`}></span>
                      <span className={`${classes.qualification__line}`}></span>
                    </div>
                  </div>
                </div>
                <div className={`${classes.qualification__content}`} data-content id="work" style={{ display: work ? 'block' : 'none' }}>
                  {/* Qualification 1 */}
                  <div className={`${classes.qualification__data}`}>
                    <div></div>
                    <div>
                      <span className={`${classes.qualification__rounder}`}></span>
                      <span className={`${classes.qualification__line}`}></span>
                    </div>
                    <div>
                      <h4 className={`${classes.qualification__title}`} >Systems Engineer - Mainframe developer</h4>
                      <span className={`${classes.qualification__subtitle}`} style={{ color: "white" }}>Infosys</span>
                      <div className={`${classes.qualification__calendar}`} style={{ color: "white" }}>
                        <AiOutlineCalendar style={{ marginRight: "8px", fontSize: "1.4rem" }} />
                        Jul 2021 - May 2023
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section >
  );
};

export default About;
