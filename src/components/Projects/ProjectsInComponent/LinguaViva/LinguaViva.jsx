import { FaEye } from "react-icons/fa";
import linguaViva from "../../../../assets/project/Screenshot (4).png";

const LinguaViva = () => {
  return (
    <div
      // data-aos="flip-right"
      // data-aos-easing="ease-out-cubic"
      data-aos="zoom-out-down"
      data-aos-duration="1000"
     
      className="flex flex-col w-full lg:flex-row justify-between my-20 "
    >
      <img className="md:w-[50%] w-full h-[300px] shadow-lg" src={linguaViva} alt="" />
      <div className="lg:px-8 py-auto">
        <p className="font-semibold text-cyan-800 font-rajdhani">
          LinguaViva{" "}
          <span className="font-normal">- A summer camp school website</span>
        </p>
        <p className="lg:text-base text-justify text-sm text-gray-500">
          Unlock Language Learning with Engaging Online Classes. Explore a wide
          variety of courses in English, Spanish, French, Chinese,Arabic,
          German, and more. Learn from expert instructors passionate about
          sharing their language expertise and cultural insights, all through
          our user-friendly platform.
        </p>
        <div className="flex my-4 items-center gap-2 ">
          <p className="text-base font-bold text-gray-900">
            Technology: <span className="small-text-gradient">React | JavaScript | Node.js | Express.js | Stripe</span>
          </p>
         
        </div>
        
        <div className="flex gap-6 items-center mt-5">
          <a
            href="https://lingua-viva-2ba9e.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
               <FaEye></FaEye>
            </button>
          </a>
          <a
            href="https://github.com/sabitameem/lingua-vival-client"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
              Client side{" "}
            </button>
          </a>
          <a
            href="https://github.com/sabitameem/lingua-viva-server"
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

export default LinguaViva;
