// import image from "../../assets/dpp.jpg";
import Dp from "../../assets/Photo/0126BA04-B340-49CD-ABF7-B184C2CBD2B5.jpeg";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import resume from "../../assets/resume of meem.pdf";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";
import "./banner.css";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section className="flex item-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center  font-secondary lg:text-left">
            <span className="font-rajdhani text-cyan-600">Hi, I am</span>
            <div
              data-aos="zoom-in"
              className="text-[34px] md:text-[40px] lg:text-[42px] mt-3 mb-3 font-rajdhani uppercase font-semibold md:font-bold leading-[1] text-cyan-900"
            >
              SABITA BINTE HOQUE MEEM
            </div>

            <TypeAnimation
              sequence={["MERN Stack developer", 2000, "Web Developer", 2000]}
              speed={50}
              className="mb-6 mt-3 text-[24px] font-rajdhani font-normal md:font-medium leading-[1] text-cyan-800"
              wrapper="span"
              repeat={Infinity}
            ></TypeAnimation>

            <div
              data-aos="zoom-in"
              className="mb-8 max-w-lg text-gray-500 mx-auto lg:mx-0"
            >
              I specialize in delivering clean code and pixel-perfect designs,
              while bringing websites to life with captivating web animations.
            </div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center mb-12 gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a download="" href={resume}>
                <button className="btn btn-lg flex justify-center items-center gap-2">
                  <FaDownload></FaDownload>Resume
                </button>
              </a>

              <Link to="contact" className="text-gradient btn-link">
                Contact me
              </Link>
            </motion.div>
            {/* social */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[29px] gap-x-6 max-w-max mx-auto lg:mx-0 text-cyan-950"
            >
              <a
                href="https://github.com/sabitameem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub></FaGithub>
              </a>
              <a
                href="https://www.linkedin.com/in/sabita-binte-hoque-meem-85a0b6280/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin></FaLinkedin>
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="profile mr-4 hidden lg:flex flex-1 max-w-[320px] lg:max-w-[480px] "
          >
            <img src={Dp} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
