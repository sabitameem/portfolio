import { FaEye } from "react-icons/fa";
import toyBuilding from "../../../../assets/project/Screenshot (8).png"

const ToyBuilding = () => {
    return (
        <div
        // data-aos="flip-left"
        // data-aos-easing="ease-out-cubic"
        // data-aos-duration="3000"
        data-aos="zoom-in-down"
      data-aos-duration="2000"
        className="flex flex-col w-full lg:flex-row justify-between my-20 "
      >
        <img
          className="md:w-[50%] w-full h-[300px] shadow-lg"
          src={toyBuilding}
          alt=""
        />
        <div className="lg:px-8 py-auto">
          <p className="font-semibold text-cyan-800 font-rajdhani">
            Toy Building <span className="font-normal">- A toys marketplace website</span>
          </p>
          <p className="lg:text-base text-justify text-sm text-gray-500">
          Toy Building is a website where users can explore a wide range of displayed toys. After logging in, users can access detailed information about each toy, including photos, prices, quality, quantities, and seller contact information. Users can also add their own toys to the platform and manage their listings.
          </p>
          <div className="flex my-4 items-center gap-2 ">
          <p className="text-base font-bold text-gray-900">
            Technology: <span className="small-text-gradient">React | JavaScript | Node.js | Express.js </span>
          </p>
         
        </div>
         
          <div className="flex gap-6 items-center mt-5">
            <a
              href="https://stately-sorbet-30bf7a.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
                <FaEye></FaEye>
              </button>
            </a>
            <a
              href="https://github.com/sabitameem/toy-building-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
                Client side{" "}
              </button>
            </a>
            <a
              href="https://github.com/sabitameem/toy-cuilding-server"
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

export default ToyBuilding;