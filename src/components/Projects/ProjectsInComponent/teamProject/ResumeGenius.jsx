import { FaEye } from "react-icons/fa";
import resumeGenius from "../../../../assets/project/Screenshot 2023-09-22 at 7.50.39 PM.png";

const ResumeGenius = () => {
  return (
    <div
      // data-aos="flip-left"
      // data-aos-easing="ease-out-cubic"
      // data-aos-duration="4000"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
     
      className="flex flex-col w-full lg:flex-row justify-between my-20 "
    >
    
     <img
        className="md:w-[50%] w-full h-[300px] shadow-lg"
        src={resumeGenius}
        alt="Resume Crafters screenshot"
      />
    
      <div className="md:w-[50%] lg:px-8  py-auto">
        <p className="font-semibold text-cyan-800 font-rajdhani">
          Resume Crafters{" "}
          <span className="font-normal">
            - A resume builder website (Team project)
          </span>
        </p>
        <p className="lg:text-base text-sm text-justify text-gray-500">
          This platform offers a complete set of career tools, including Resume
          and Cover Letter Checkers and Builders. It facilitates real-time
          communication through Messaging and Video Conferencing via Socket.io
          and provides Language Translation in three languages. Whether you are
          job hunting or networking, this platform has everything you need in
          one place.
        </p>
        <div className="w-[100%] my-4 flex items-center">
          <p className="text-base font-bold text-gray-900">
            Technology :{" "}
            <span className="small-text-gradient">
              MERN Technology | Redux | Socket i/o | stripe
            </span>
          </p>
        </div>
        {/* <div className="divide-y divide-slate-200 "></div> */}
        <div className="flex gap-6 items-center mt-5">
          <a
            href="https://resume-builder-portal-client.web.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
              <FaEye></FaEye>
            </button>
          </a>
          <a
            href="https://github.com/codershawon/Resume-builder-portal-client"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
              Client side{" "}
            </button>
          </a>
          <a
            href="https://github.com/codershawon/Resume-builder-portal-server"
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

export default ResumeGenius;
