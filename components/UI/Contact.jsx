import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";
import { BsGithub } from 'react-icons/bs'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <h3 className="mt-4 mb-4"> <span style={{ color: "#01edff" }}>Contact</span>  me</h3>


            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Trichy  -  Tamilnadu</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>keerthimalini6699@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+919688730555</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <motion.a className={classes.nav__anc} href="https://github.com/Keerthimalini6" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
                <BsGithub className={classes.nav__icon} />
              </motion.a>
              <motion.a className={classes.nav__anc} href="https://www.linkedin.com/in/keerthi-malini-698923161/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
                <AiOutlineLinkedin className={classes.nav__icon} />
              </motion.a>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
