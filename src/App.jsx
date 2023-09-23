import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div className=" overflow-hidden text-black">
      <Header></Header>
      <div id="home" className="md:pt-12 mb-12">
        <Banner></Banner>
      </div>
      <Nav></Nav>
      <div id="about" className="md:pt-20 mb-12">
        <About></About>
      </div>
      <div id="skills" className="md:pt-20 mb-12">
        <Skills></Skills>
      </div>
      <div id="projects" className="md:pt-20 mb-12">
        {" "}
        <Projects></Projects>
      </div>
      <div  id="contact" className="md:pt-20 mb-12"><Contact></Contact></div>

      
      <Footer></Footer>
      <ToastContainer />

      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
