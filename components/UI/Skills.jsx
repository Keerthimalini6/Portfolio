import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import { AiOutlineHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { TbBrandJavascript } from "react-icons/tb"
import { SiChakraui } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { GrNode } from "react-icons/gr"
import { ImNpm } from "react-icons/im"
import { SiRedux } from "react-icons/si"
import { BsGit } from "react-icons/bs"
import { DiJava } from "react-icons/di"
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Skills = () => {
  const [counter, setCouter] = useState(false)
  return (
    <section id="skills">
      <h3 style={{ textAlign: "center", marginBottom: "50px" }}>My <span style={{ color: "#01edff" }}>Technical</span> skills</h3>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div className={`${classes.services__container1}`}>
                <div className={`${classes.service__item}`}>
                  <AiOutlineHtml5 style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>HTML</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <DiCss3 style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>CSS</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <TbBrandJavascript style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>JS</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <FaReact style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>React</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <SiRedux style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>Redux</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <DiJava style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>Java</h5>
                </div>
              </div>
              <div className={`${classes.services__container2}`}>
                <div className={`${classes.service__item}`}>

                  <SiMongodb style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />

                  <h5>MongoDB</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <SiExpress style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>Express</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <GrNode style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>Node JS</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <ImNpm style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>NPM</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <BsGit style={{ fontSize: "1.8rem", color: "#01edff", background: "none" }} />
                  <h5>Git</h5>
                </div>
                <div className={`${classes.service__item}`}>
                  <SiChakraui style={{ fontSize: "1.4rem", color: "#01edff", background: "none" }} />
                  <h5>Chakra UI</h5>
                </div>
              </div>
            </div>
          </Col>
          <ScrollTrigger onEnter={() => setCouter(true)} onExit={() => setCouter(false)}>
            <div className={`${classes.counter__section}`}>
              <div className="counter" style={{ color: "white", display: "flex", alignItems: "center" }}>
                <h1 style={{ color: "#01edff" }}>
                  {counter && <CountUp start={0} end={1200} duration={2} delay={0} />}
                  +
                </h1>
                <span style={{ fontSize: "1.2rem" }}>  Hours of Coding</span>
              </div>
              <div className="counter" style={{ color: "white", display: "flex", alignItems: "center" }}>
                <h1 style={{ color: "#01edff" }}>
                  {counter && <CountUp start={0} end={1000} duration={2} delay={0} />}
                  +
                </h1>
                <span style={{ fontSize: "1.2rem" }}>  Hours of DSA</span>
              </div>
              <div className="counter" style={{ color: "white", display: "flex", alignItems: "center" }}>
                <h1 style={{ color: "#01edff" }}>
                  {counter && <CountUp start={0} end={3} duration={3} delay={0} />}
                  +
                </h1>
                <span style={{ fontSize: "1.2rem" }}>  Projects</span>
              </div>
            </div>
          </ScrollTrigger>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
