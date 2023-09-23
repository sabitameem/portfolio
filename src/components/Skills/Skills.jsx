import "./skills.css";
import { HiCheckCircle } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  });
  return (
    <section className="container mx-auto ">
      <h2 className="section_title text-[34px] font-semibold text-cyan-800 font-rajdhani ">
        Skills
      </h2>
      <span className="section_subtitle font-rajdhani mb-16 text-cyan-800 flex justify-center">
        --- My technical level ---
      </span>{" "}
      {/* box */}
      <div className="flex flex-col lg:flex-row gap-3 justify-between font-rajdhani">
        {/* frontend */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="content w-[90%] mx-auto  px-[10%] lg:px-[2%] md:w-full bg-cyan-900 text-white"
        >
          <p className="title md:mt-2 text-center">Frontend Developer</p>
          <div className="flex justify-center items-center lg:grid lg:grid-cols-2 gap-16">
            <div className="">
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-1 items-center">
                  <HiCheckCircle className="hidden md:block"></HiCheckCircle>
                  <span className="text-base">HTML</span>{" "}
                </div>
                <p className="text-sm  md:ps-5">Advance</p>
              </div>

              <div className="py-3 lg:w-[110px]">
                <div className="flex gap-1 items-center">
                  <HiCheckCircle className="hidden md:block"></HiCheckCircle>
                  <span className="text-base">CSS</span>{" "}
                </div>
                <p className="text-sm md:ps-5">Advance</p>
              </div>

              <div className="lg:w-[110px]  py-3">
                <div className="flex gap-1 items-center">
                  <HiCheckCircle className="hidden md:block"></HiCheckCircle>
                  <span className="text-base">JavaScript</span>{" "}
                </div>
                <p className="text-sm  md:ps-5">Advance</p>
              </div>
            </div>
            <div>
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-1 items-center">
                  <HiCheckCircle className="hidden md:block"></HiCheckCircle>
                  <span className="text-base">Bootstrap</span>{" "}
                </div>
                <p className="text-sm md:ps-5">Intermediate</p>
              </div>

              <div className="lg:w-[110px] py-3">
                <div className="flex gap-1 items-center">
                  <HiCheckCircle className="hidden md:block"></HiCheckCircle>
                  <span className="text-base">Tailwind</span>{" "}
                </div>
                <p className="text-sm md:ps-5">Advance</p>
              </div>

              <div className="lg:w-[110px] py-3">
                <div className="flex gap-1 items-center">
                  <HiCheckCircle className="hidden md:block"></HiCheckCircle>
                  <span className="text-base">React</span>{" "}
                </div>
                <p className="text-sm md:ps-5">Advance</p>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="content w-[90%] mx-auto  px-[10%] lg:px-[2%] md:w-full bg-cyan-900 text-white"
        >
          <p className="title md:mt-2 text-center">Backend Developer</p>
          <div className="flex justify-center lg:grid lg:grid-cols-2 gap-16">
            <div className="">
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-1 items-center">
                  <HiCheckCircle className="hidden md:block"></HiCheckCircle>
                  <span className="text-base">MongoDB</span>{" "}
                </div>
                <p className="text-sm  md:ps-5">Advance</p>
              </div>

              <div className="py-3 lg:w-[110px]">
                <div className="flex gap-1 items-center">
                  <HiCheckCircle className="hidden md:block"></HiCheckCircle>
                  <span className="text-base">Express.js</span>{" "}
                </div>
                <p className="text-sm md:ps-5">Intermediate</p>
              </div>

              <div className="lg:w-[110px] py-3">
                <div className="flex gap-1 items-center">
                  <HiCheckCircle className="hidden md:block"></HiCheckCircle>
                  <span className="text-base">Rest API</span>{" "}
                </div>
                <p className="text-sm  md:ps-5">Intermediate</p>
              </div>
            </div>
            <div>
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-1 items-center">
                  <HiCheckCircle className="hidden md:block"></HiCheckCircle>
                  <span className="text-base">Node JS</span>{" "}
                </div>
                <p className="text-sm md:ps-5">Advance</p>
              </div>

              <div className="lg:w-[110px] py-3">
                <div className="flex gap-1 items-center">
                  <HiCheckCircle className="hidden md:block"></HiCheckCircle>
                  <span className="text-base">ES6</span>{" "}
                </div>
                <p className="text-sm md:ps-5">Basic</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="content w-full"
        >
          <p className="title my-3 text-center">Backend Developer</p>
          <div className=" grid grid-cols-2 gap-16">
            <div className="">
            
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">MongoDB</span>{" "}
                </div>
                <p className="text-sm text-gray-400 ps-5">Advance</p>
              </div>
           
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">Express Js</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">
                  Intermediate
                </p>
              </div>
             
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">Rest API</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center ml-2">
                  Intermediate
                </p>
              </div>
            </div>
            <div>
             
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">Node JS</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">Advance</p>
              </div>
             
              <div className="lg:w-[90px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">ES6</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">Basic</p>
              </div>
           
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">Firebase</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">Advance</p>
              </div>
            </div>
          </div>
        </div> */}

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="content w-[90%] mx-auto  px-[10%] lg:px-[2%] md:w-full bg-cyan-900 text-white"
        >
          <p className="title md:mt-2  text-center">Tools</p>
          <div className="flex justify-center lg:grid lg:grid-cols-2 gap-16">
            <div className="">
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-1 items-center">
                  <HiCheckCircle className="hidden md:block"></HiCheckCircle>
                  <span className="text-base">Git</span>{" "}
                </div>
                <p className="text-sm  md:ps-5">Advance</p>
              </div>

              <div className="py-3 lg:w-[110px]">
                <div className="flex gap-1 items-center">
                  <HiCheckCircle className="hidden md:block"></HiCheckCircle>
                  <span className="text-base">Firebase</span>{" "}
                </div>
                <p className="text-sm md:ps-5">Advance</p>
              </div>

              <div className="lg:w-[110px] py-3">
                <div className="flex gap-1 items-center">
                  <HiCheckCircle className="hidden md:block"></HiCheckCircle>
                  <span className="text-base">Vercel</span>{" "}
                </div>
                <p className="text-sm  md:ps-5">Intermediate</p>
              </div>
            </div>
            <div>
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-1 items-center">
                  <HiCheckCircle className="hidden md:block"></HiCheckCircle>
                  <span className="text-base">Figma</span>{" "}
                </div>
                <p className="text-sm md:ps-5">Advance</p>
              </div>

              <div className="lg:w-[110px] py-3">
                <div className="flex gap-1 items-center">
                  <HiCheckCircle className="hidden md:block"></HiCheckCircle>
                  <span className="text-base">Netlify</span>{" "}
                </div>
                <p className="text-sm md:ps-5">Advance</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="content w-full"
        >
          <p className="title my-3 text-center">Tools</p>
          <div className=" grid grid-cols-2 gap-16">
            <div className="">
              
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">Git</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">Advance</p>
              </div>
       
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">Vercel</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">
                  Intermediate
                </p>
              </div>
            </div>
            <div>
            
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">Figma</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">Advance</p>
              </div>
           
              <div className="lg:w-[90px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">Netlify</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">Advance</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
