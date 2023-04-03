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
      <h3 style={{ textAlign: "center", marginBottom: "50px" }}>My <span style={{ color: "#01edff" }}>Projects</span></h3>
      <Container>
        <Row>

          {/* Bluemercury */}
          <Col lg="6" md="6">
            <div className={`${classes.tab__btns}`}>
              <Image className={`${classes.proj__imgs}`} width="420px" height="190px" alt="img" src={bluearr[index]} />
              <h2 style={{ background: "none" }}>Bluemercury</h2>
              <h5 style={{ background: "none" }}>Bluemercury is a leading luxury beauty retailer offering the
                best cosmetics, skin care, makeup, perfume, hair, and bath and
                body.</h5>
              <h6 style={{ background: "none", marginTop: "20px" }}> Features :  <span style={{ color: "#fff", background: "none" }} >Login • Signup • Sort • Filter • Cart • Payment </span></h6>
              <div className={`${classes.stack__container}`} style={{ background: "none" }}>
                <div className={`${classes.service__item}`} style={{ background: "none" }}>
                  <AiOutlineHtml5 style={{ fontSize: "1.6rem", color: "#fff", background: "none", marginRight: "5px" }} />
                  <h6 style={{ background: "none" }}>HTML</h6>
                </div>
                <div className={`${classes.service__item}`} style={{ background: "none" }}>
                  <DiCss3 style={{ fontSize: "1.6rem", color: "#fff", background: "none", marginRight: "5px" }} />
                  <h6 style={{ background: "none" }}>CSS</h6>
                </div>
                <div className={`${classes.service__item}`} style={{ background: "none" }}>
                  <TbBrandJavascript style={{ fontSize: "1.6rem", color: "#fff", background: "none", marginRight: "5px" }} />
                  <h6 style={{ background: "none" }}>JS</h6>
                </div>
              </div>
              <div className={`${classes.git__dep}`} style={{ background: "none" }}>

                <motion.a className={classes.nav__anc} href="https://github.com/Keerthimalini6/BlueMercury-Clone" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <BsGithub className={classes.nav__icon} />
                </motion.a>
                <motion.a className={classes.nav__anc} href="https://delicate-mousse-661b11.netlify.app/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <RiShareBoxFill className={classes.nav__icon} />
                </motion.a>
              </div>
            </div>
          </Col>

          {/* KFC */}
          <Col lg="6" md="6">
            <div style={{ background: "linear-gradient(to left,  rgb(50,55,68,0.8), rgba(1, 237, 255, 0.4))" }} className={`${classes.tab__btns}`}>
              <Image className={`${classes.proj__imgs}`} width="420px" height="190px" alt="img" src={KFCarr[index]} />
              <h2 style={{ background: "none" }}>KFC</h2>
              <h5 style={{ background: "none" }}>KFC (Kentucky Fried Chicken) is an American fast food
                restaurant chain headquartered in Louisville, Kentucky, that
                specializes in fried chicken.</h5>
              <h6 style={{ background: "none", marginTop: "10px" }}> Features :  <span style={{ color: "#fff", background: "none" }} >Login • Signup • Sort • Filter • Payment • Location </span></h6>
              <div className={`${classes.stack__container}`} style={{ background: "none", marginTop: "5px" }}>
                <div className={`${classes.service__item}`} style={{ background: "none" }}>
                  <AiOutlineHtml5 style={{ fontSize: "1.6rem", color: "#fff", background: "none", marginRight: "5px" }} />
                  <h6 style={{ background: "none" }}>HTML</h6>
                </div>
                <div className={`${classes.service__item}`} style={{ background: "none" }}>
                  <DiCss3 style={{ fontSize: "1.6rem", color: "#fff", background: "none", marginRight: "5px" }} />
                  <h6 style={{ background: "none" }}>CSS</h6>
                </div>
                <div className={`${classes.service__item}`} style={{ background: "none" }}>
                  <TbBrandJavascript style={{ fontSize: "1.6rem", color: "#fff", background: "none", marginRight: "5px" }} />
                  <h6 style={{ background: "none" }}>JS</h6>
                </div>
                <div className={`${classes.service__item}`} style={{ background: "none" }}>
                  <SiGooglemaps style={{ fontSize: "1.6rem", color: "#fff", background: "none", marginRight: "5px" }} />
                  <h6 style={{ background: "none" }}>Google maps API</h6>
                </div>
                <div className={`${classes.service__item}`} style={{ background: "none" }}>
                  <AiOutlineMail style={{ fontSize: "1.6rem", color: "#fff", background: "none", marginRight: "5px" }} />
                  <h6 style={{ background: "none" }}>EmailJS</h6>
                </div>
              </div>
              <div className={`${classes.git__dep}`} style={{ background: "none", marginTop: "5px" }}>

                <motion.a className={classes.nav__anc} href="https://github.com/Keerthimalini6/KFC-Clone" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <BsGithub className={classes.nav__icon} />
                </motion.a>
                <motion.a className={classes.nav__anc} href="https://my-kfc-clone-2.netlify.app/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <RiShareBoxFill className={classes.nav__icon} />
                </motion.a>
              </div>
            </div>
          </Col>

          {/* KOO APP */}
          <div style={{ width: "650px", height: "650px", background: "linear-gradient(to top,  rgb(50,55,68,0.8), rgba(1, 237, 255, 0.4))", margin: "50px auto", marginTop: "50px", }} className={`${classes.tab__btns}`}>
            <Image width="570px" height="220px" alt="img" src={kooarr[index]} />
            <h2 style={{ background: "none" }}>KOO App</h2>
            <h5 style={{ background: "none" }}>Koo is a micro-blogging and social networking platform. It is often referred to as the Indian alternative to Twitter, as it provides a similar platform for users to share their thoughts and opinions in short posts, or "Koo" in their native language.</h5>
            <h6 style={{ background: "none", marginTop: "10px" }}> Features :  <span style={{ color: "#fff", background: "none" }} >Login • Signup • Post • Comment • Bio update • Search </span></h6>
            <div className={`${classes.stack__container}`} style={{ background: "none", marginTop: "5px" }}>
              <div className={`${classes.service__item}`} style={{ background: "none" }}>
                <FaReact style={{ fontSize: "1.6rem", color: "#fff", background: "none", marginRight: "5px" }} />
                <h6 style={{ background: "none" }}>React</h6>
              </div>
              <div className={`${classes.service__item}`} style={{ background: "none" }}>
                <SiRedux style={{ fontSize: "1.6rem", color: "#fff", background: "none", marginRight: "5px" }} />
                <h6 style={{ background: "none" }}>Redux</h6>
              </div>
              <div className={`${classes.service__item}`} style={{ background: "none" }}>
                <TbBrandJavascript style={{ fontSize: "1.6rem", color: "#fff", background: "none", marginRight: "5px" }} />
                <h6 style={{ background: "none" }}>JS</h6>
              </div>
              <div className={`${classes.service__item}`} style={{ background: "none" }}>
                <SiChakraui style={{ fontSize: "1.6rem", color: "#fff", background: "none", marginRight: "5px" }} />
                <h6 style={{ background: "none" }}>Chakra UI</h6>
              </div>
              <div className={`${classes.service__item}`} style={{ background: "none" }}>
                <AiOutlineMail style={{ fontSize: "1.6rem", color: "#fff", background: "none", marginRight: "5px" }} />
                <h6 style={{ background: "none" }}>EmailJS</h6>
              </div>
            </div>
            <div className={`${classes.git__dep}`} style={{ background: "none", marginTop: "5px" }}>

              <motion.a className={classes.nav__anc} href="https://github.com/Keerthimalini6/kooapp-clone" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
                <BsGithub className={classes.nav__icon} />
              </motion.a>
              <motion.a className={classes.nav__anc} href="https://kooapp-clone.netlify.app/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
                <RiShareBoxFill className={classes.nav__icon} />
              </motion.a>
            </div>
          </div>
        </Row>
      </Container>
    </section >
  );
};

export default Portfolio;
