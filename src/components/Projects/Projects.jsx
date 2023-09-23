import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ResumeGenius from "./ProjectsInComponent/teamProject/ResumeGenius";
import LinguaViva from "./ProjectsInComponent/LinguaViva/LinguaViva";
import CollegeGuide from "./ProjectsInComponent/CollegeGuide/CollegeGuide";
import ToyBuilding from "./ProjectsInComponent/ToyBuilding/ToyBuilding";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  });
  return (
    <section className="container mx-auto">
      <h2 className="section_title text-[34px] font-semibold text-cyan-800 font-rajdhani">
        Portfolio
      </h2>
      <span className="section_subtitle font-rajdhani text-cyan-800 flex justify-center lg:mb-24 mb-12">
        --- Most recent work ---
      </span>
      <ResumeGenius></ResumeGenius>
      <LinguaViva></LinguaViva>
      <CollegeGuide></CollegeGuide>
      <ToyBuilding></ToyBuilding>
    </section>
  );
};

export default Projects;