import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Skills from "../components/UI/Skills";
import About from "../components/UI/About";
import Project from "../components/UI/Project";
import Testimonial from "../components/UI/Testimonial";
import Contact from "../components/UI/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <title>Keerthimalini</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
    <Fragment>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </Fragment>
    </>
  );
}
