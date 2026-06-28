import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import { FaGraduationCap, FaStar } from "react-icons/fa"
import { MdWork } from "react-icons/md"
import { AiOutlineCalendar } from "react-icons/ai"
import classes from "../../styles/about.module.css";

const About = () => {
  const [edu, setEdu] = useState(false)
  const [work, setWork] = useState(true)
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            {/* <SectionSubtitle subtitle="About me" /> */}
            <h3 className="mt-4" style={{ color: "#01edff" }}>About Me</h3>
            <p>
              ▹Full Stack Developer with 5 years of experience building enterprise banking and Anti-Money Laundering (AML) applications using Java, Spring Boot, React, and PostgreSQL.<br />
              ▹Experienced in developing scalable backend services, REST APIs, and responsive frontend features, while contributing to enterprise applications processing millions of financial transactions.<br />
              ▹Worked on compliance platforms involving workflow management, data extraction, CI/CD automation, and production support, collaborating with cross-functional Agile teams to deliver reliable business solutions.<br />
              ▹Passionate about building secure, high-performance applications and continuously improving software quality through clean code, automation, and performance optimization.

            </p>

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Enterprise Application Development
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  REST API Development
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  CI/CD & DevOps
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Agile & Scrum Methodologies
                </h6>
              </div>
            </div>

          </Col>

          <Col lg="6">
            <div className={`${classes.qualification__section}`} >
              <h3 style={{ color: "#01edff", textAlign: "center", marginBottom: "30px" }} className={`${classes.section__title}`}>Qualificaton</h3>
              <div className={`${classes.qualification__container}`}>
                <div className={`${classes.qualification__tabs}`} style={{ display: "flex" }}>
                  <div className={`${classes.button__flex}`} style={{ color: work ? '#01edff' : 'white', cursor: "pointer" }} onClick={() => { setEdu(false); setWork(true) }}>
                    <MdWork style={{ marginRight: "8px", fontSize: "1.8rem", color: work ? '#01edff' : 'white' }} />
                    Work
                  </div>
                  <div className={`${classes.button__flex}`} style={{ color: edu ? '#01edff' : 'white', cursor: "pointer" }} onClick={() => { setEdu(true); setWork(false) }}>
                    <FaGraduationCap style={{ marginRight: "8px", fontSize: "1.8rem", color: edu ? '#01edff' : 'white' }} />
                    Education
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "30px" }} className="qualification__sections">
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
                      <h4 className={`${classes.qualification__title}`} >Societe Generale Global Solution Centre</h4>
                      <span className={`${classes.qualification__subtitle}`} style={{ color: "white" }}>Specialist Software Engineer(Promoted 2025)</span>
                      <div className={`${classes.qualification__calendar}`} style={{ color: "white" }}>
                        <AiOutlineCalendar style={{ marginRight: "8px", fontSize: "1.4rem" }} />
                        Jun 2023 - Present
                      </div>
                    </div>

                  </div>
                  {/* Qualification 2 */}
                  <div className={`${classes.qualification__data}`}>
                    <div>
                      <h4 className={`${classes.qualification__title}`}>Infosys Limited</h4>
                      <span className={`${classes.qualification__subtitle}`} style={{ color: "white" }}>Systems Engineer</span>
                      <div className={`${classes.qualification__calendar}`} style={{ color: "white" }}>
                        <AiOutlineCalendar style={{ marginRight: "8px", fontSize: "1.4rem" }} />
                        Jul 2021 - May 2023
                      </div>
                    </div>
                    <div>
                      <span className={`${classes.qualification__rounder}`}></span>
                      <span className={`${classes.qualification__line}`}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center",margin: "30px 0" }} className={`${classes.about__content}`}>
            <h2 className="mt-4" style={{ textAlign: "center", marginBottom: "20px" }}> My <span style={{ color: "#01edff" }}>Career</span> Highlight </h2>
            <h6>
              <FaStar style={{ color: "#01edff", marginRight: "8px" }} />
              Promoted to Specialist Software Engineer at Societe Generale in 2025 for technical contributions, ownership, and delivery of enterprise applications.
              <FaStar style={{ color: "#01edff", marginLeft: "8px"}} />
            </h6>
          </Col>
        </Row>
      </Container>
    </section >
  );
};

export default About;
