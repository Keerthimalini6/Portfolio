import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import { AiOutlineHtml5 } from "react-icons/ai"
import { DiPostgresql } from "react-icons/di"
import { DiReact } from "react-icons/di"
import { SiApachemaven, SiJenkins, SiHarbor, SiSpringboot } from "react-icons/si"
import { TbBrandDocker, TbBrandJavascript, TbBrandGithub, TbApi } from "react-icons/tb"
import { BsKanban } from "react-icons/bs"
import { DiJava } from "react-icons/di"
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Skills = () => {
  const [counter, setCouter] = useState(false)
  return (
    <section id="skills">
      <h2 style={{ textAlign: "center", marginBottom: "50px" }}>My <span style={{ color: "#01edff" }}>Technical</span> skills</h2>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div className={`${classes.services__container1}`}>
                <div className={`${classes.service__item}`}>
                  <DiJava style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>Java</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <SiSpringboot style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>SpringBoot</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <TbApi style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>REST APIs</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <DiPostgresql style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>PostgreSQL</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <DiReact style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>React</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <TbBrandJavascript style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>JavaScript</h5>
                </div>
              </div>
              <div className={`${classes.services__container2}`}>
                <div className={`${classes.service__item}`}>
                  <TbBrandDocker style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>Docker</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <SiApachemaven style={{ fontSize: "1.4rem", color: "#01edff", background: "none" }} />
                  <h5>Maven</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <TbBrandGithub style={{ fontSize: "1.7rem", color: "#01edff", background: "none" }} />
                  <h5>GitHubActions</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <SiJenkins style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>Jenkins</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <SiHarbor style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>Harbor</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <BsKanban style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>Agile/Scrum</h5>
                </div>
              </div>
            </div>
          </Col>
          <ScrollTrigger onEnter={() => setCouter(true)} onExit={() => setCouter(false)}>
            <div className={`${classes.counter__section}`}>
              <div className="counter" style={{ color: "white", display: "flex", alignItems: "center" }}>
                <h1 style={{ color: "#01edff" }}>
                  {counter && <CountUp start={0} end={5} duration={1} delay={0} />}
                  +
                </h1>
                <span style={{ fontSize: "1.2rem" }}>  Years Experience</span>
              </div>
              <div className="counter" style={{ color: "white", display: "flex", alignItems: "center" }}>
                <h1 style={{ color: "#01edff" }}>
                  1M+
                </h1>
                <span style={{ fontSize: "1.2rem" }}>  Transactions Processed</span>
              </div>
              <div className="counter" style={{ color: "white", display: "flex", alignItems: "center" }}>
                <h1 style={{ color: "#01edff" }}>
                  {counter && <CountUp start={0} end={100} duration={1} delay={0} />}
                  +
                </h1>
                <span style={{ fontSize: "1.2rem" }}>  Concurrent Users Supported</span>
              </div>
            </div>
          </ScrollTrigger>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
