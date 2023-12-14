import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
// Components
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { BackToTop } from "../components/globalStyledComponents";
import Footer from "../components/Footer";
import Interests from "../components/Interests";
import Accomplishments from "../components/Accomplishments";
import Blog from "../components/Blog";

export default function Home() {
  const { name } = useSelector(selectData);

  React.useEffect(
    function () {
      document.title = `${name} | Portfolio`;
    },
    [name]
  );

  return (
    <>
      <Hero />
      <main>
        <AboutMe />
        <Skills />
        <Interests />
        <Projects />
        <Accomplishments />
        <Blog />
        <Contact />
      </main>
      <BackToTop home={"Home"} />
      <Footer />
    </>
  );
}
