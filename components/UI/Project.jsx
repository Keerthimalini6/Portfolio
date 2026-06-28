import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./ProjectItem";
import Image from "next/image";
import portfolioData from "../data/portfolio";
import blue1 from "../../public/images/blue1.PNG"
import blue3 from "../../public/images/blue3.PNG"
import blue4 from "../../public/images/blue4.PNG"
import blue5 from "../../public/images/blue5.PNG"
import blue6 from "../../public/images/blue6.PNG"
import blue7 from "../../public/images/blue7.PNG"
import blue8 from "../../public/images/blue8.PNG"
import kfc1 from "../../public/images/kfc1.PNG"
import kfc2 from "../../public/images/kfc2.PNG"
import kfc3 from "../../public/images/kfc3.PNG"
import kfc4 from "../../public/images/kfc4.PNG"
import kfc5 from "../../public/images/kfc5.PNG"
import kfc6 from "../../public/images/kfc6.PNG"
import kfc7 from "../../public/images/kfc7.PNG"
import koo1 from "../../public/images/koo1.PNG"
import koo2 from "../../public/images/koo2.PNG"
import koo3 from "../../public/images/koo3.PNG"
import koo4 from "../../public/images/koo4.PNG"
import koo5 from "../../public/images/koo5.PNG"
import koo6 from "../../public/images/koo6.PNG"
import koo7 from "../../public/images/koo7.PNG"
import { AiOutlineHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { TbBrandJavascript } from "react-icons/tb"
import { BsGithub } from 'react-icons/bs'
import { RiShareBoxFill } from "react-icons/ri"
import { SiGooglemaps } from "react-icons/si"
import { AiOutlineMail } from "react-icons/ai"
import { FaReact } from "react-icons/fa"
import { SiRedux } from "react-icons/si"
import { SiChakraui } from "react-icons/si"
import { FaCheckCircle } from "react-icons/fa"

import { motion } from "framer-motion";
const Portfolio = () => {
  const [index, setIndex] = useState(0)
  const bluearr = [blue1, blue3, blue4, blue5, blue6, blue7, blue8]
  const KFCarr = [kfc1, kfc2, kfc3, kfc4, kfc5, kfc6, kfc7]
  const kooarr = [koo1, koo2, koo3, koo4, koo5, koo6, koo7]
  function loop(count) {
    if (count == bluearr.length) {
      return count = 0
    }
    if (count < 0) {
      return count = bluearr.length - 1
    }
    return count
  }
  useEffect(() => {
    const interval = setInterval(
      () => setIndex(count => loop(count + 1))
      , 1000)
    return () => clearInterval(interval)
  })
  return (
    <section id="project">
      <h2 style={{ textAlign: "center", marginBottom: "50px" }}>Professional <span style={{ color: "#01edff" }}>Experience</span></h2>
      <Container>
        <Row>

          {/* ABA */}
          <Col lg="6" md="6">
            <div className={`${classes.tab__btns}`}>
              <h3 style={{ background: "none", marginBottom: "15px" }}>ABA (AML Big Data Analytics) – Transaction Monitoring System</h3>
              <p style={{ background: "none", lineHeight: "1.5rem" }}> 
                ▹Contributed to an enterprise AML analytics platform for processing millions of financial transactions across multiple business entities<br />
                ▹Developed backend modules and REST APIs using Java and Spring Boot<br />
                ▹Built React features, implemented workflow management and export functionality, and provided production support.</p>
              <h5 style={{ background: "none", marginTop: "20px" }}> Tech Stack :  </h5>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px", background: "none"  }}>
                {['Java', 'Spring Boot', 'React', 'PostgreSQL', 'REST APIs', 'Docker'].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      color: "#01edff",
                      border: "1px solid #01edff",
                      borderRadius: "999px",
                      padding: "6px 10px",
                      fontSize: "0.9rem",
                      background: "rgba(1, 237, 255, 0.08)"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
                <h5 style={{ background: "none", marginTop: "20px" }}> Highlights :  </h5>
              <p style={{ color: "#fff", background: "none" }}>
                <FaCheckCircle style={{ color: "#01edff", marginRight: "8px", background: "none" }} /> Millions of financial transactions<br />

                <FaCheckCircle style={{ color: "#01edff", marginRight: "8px", background: "none" }} /> Enterprise Banking<br />

                <FaCheckCircle style={{ color: "#01edff", marginRight: "8px", background: "none" }} /> Workflow Management<br />

                <FaCheckCircle style={{ color: "#01edff", marginRight: "8px", background: "none" }} /> Production Support
              </p>
            </div>
          </Col>

          {/* KFC */}
          <Col lg="6" md="6">
            <div className={`${classes.tab__btns}`}>
              <h3 style={{ background: "none" }}>Exaco – Compliance Data Extraction & Analytics Platform</h3>
              <p style={{ background: "none", lineHeight: "1.5rem" }}> 
                ▹Developed features for an enterprise data extraction and reporting platform for compliance and analytics teams.<br />
                ▹Implemented scheduled and asynchronous data extraction supporting 100+ concurrent business users.<br />
                ▹Led Harbor migration and CI/CD transition from Jenkins to GitHub Actions, improving deployment and release efficiency.</p>
              <h5 style={{ background: "none", marginTop: "20px" }}> Tech Stack :  </h5>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px", background: "none" }}>
                {['Java', 'Spring Boot', 'PostgreSQL', 'Jenkins', 'GitHub Actions', 'Harbor', 'React'].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      color: "#01edff",
                      border: "1px solid #01edff",
                      borderRadius: "999px",
                      padding: "6px 10px",
                      fontSize: "0.9rem",
                      background: "rgba(1, 237, 255, 0.08)"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
                <h5 style={{ background: "none", marginTop: "20px" }}> Highlights :  </h5>
              <p style={{ color: "#fff", background: "none" }}>
                <FaCheckCircle style={{ color: "#01edff", marginRight: "8px", background: "none" }} /> 100+ Concurrent Users<br />

                <FaCheckCircle style={{ color: "#01edff", marginRight: "8px", background: "none"  }} /> CI/CD Migration<br />

                <FaCheckCircle style={{ color: "#01edff", marginRight: "8px", background: "none" }} /> Reporting Platform<br />

                <FaCheckCircle style={{ color: "#01edff", marginRight: "8px", background: "none" }} /> Compliance Analytics
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section >
  );
};

export default Portfolio;
