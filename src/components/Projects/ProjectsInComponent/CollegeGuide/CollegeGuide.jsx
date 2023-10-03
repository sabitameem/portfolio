import { FaEye } from "react-icons/fa";

import collegeGuide from "../../../../assets/project/AB1227DE-3F40-4274-91C1-77A05B07060A.jpeg";

const CollegeGuide = () => {
  return (
    <div
      // data-aos="flip-right"
      // data-aos-easing="ease-out-cubic"
      // data-aos-duration="3000"
      data-aos="zoom-out-up"
      data-aos-duration="2000"
      className="flex flex-col w-full lg:flex-row justify-between  my-20"
    >
      <img
      
        className="md:w-[50%] w-full h-[300px] shadow-lg"
        src={collegeGuide}
        alt="College Guide screenshot"
      /> 
      <div className="lg:px-8 md:w-[50%] py-auto">
        <p className="font-semibold text-cyan-800 font-rajdhani">
          College Guide{" "}
          <span className="font-normal">- Education Resources</span>
        </p>
        <p className="lg:text-base text-sm text-justify text-gray-500">
        This website offers students detailed info about colleges and universities, including admissions and graduation photos, helping them make informed choices. It is user-friendly with features like user accounts and favorites. Plus, it gives access to popular research papers for a richer learning experience.
        </p>
        <div className="flex my-4 items-center gap-2 ">
          <p className="text-base font-bold text-gray-900">
            Technology: <span className="small-text-gradient">React | JavaScript | Node.js | Express.js </span>
          </p>
         
        </div>
       
        <div className="flex gap-6 items-center mt-5">
          <a
            href="https://college-guide-af9a0.web.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
               <FaEye></FaEye>
            </button>
          </a>
          <a
            href="https://github.com/sabitameem/college-guide-client-side"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
              Client side{" "}
            </button>
          </a>
          <a
            href="https://github.com/sabitameem/college-guide-server-side"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
              Server side{" "}
            </button>
          </a>
        </div>
      </div>
    </div> 
  );
};

export default CollegeGuide;
{/* <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="3000"
      className="flex flex-col w-full lg:flex-row justify-between gap-9 my-20"
    >
      <img
        className="md:w-[50%] w-full h-[300px]"
        src={collegeGuide}
        alt="College Guide screenshot"
      /> 
      <div className="lg:px-8 md:w-[50%] py-auto">
        <p className="font-semibold text-cyan-800 font-rajdhani">
          College Guide{" "}
          <span className="font-normal">- Education Resources</span>
        </p>
        <p className="lg:text-base text-sm text-justify text-gray-500">
        This website offers students detailed info about colleges and universities, including admissions and graduation photos, helping them make informed choices. It is user-friendly with features like user accounts and favorites. Plus, it gives access to popular research papers for a richer learning experience.
        </p>
        <div className="flex my-4 items-center gap-2 ">
          <p className="text-base font-bold text-gray-900">
            Technology: <span className="small-text-gradient">React | JavaScript | Node.js | Express.js </span>
          </p>
         
        </div>
       
        <div className="flex gap-6 items-center mt-5">
          <a
            href="https://college-guide-af9a0.web.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
               <FaEye></FaEye>
            </button>
          </a>
          <a
            href="https://github.com/sabitameem/college-guide-client-side"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
              Client side{" "}
            </button>
          </a>
          <a
            href="https://github.com/sabitameem/college-guide-server-side"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
              Server side{" "}
            </button>
          </a>
        </div>
      </div>
    </div> */}