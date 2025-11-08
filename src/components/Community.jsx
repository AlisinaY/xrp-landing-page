import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const firstImg =
  "https://xrpl.org/assets/cta-home-purple.3d6eaf8d70c745037f2f67a525380b93ae6ce1911f863e796a4a0be88fadc723.2dee4622.svg";
const secondImg =
  "https://xrpl.org/assets/cta-home-green.c1d5f6e06bcac8274fdd2224cd35b0ccd6099e66ca18b591ad3782d794c3d714.2dee4622.svg";

const Community = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex justify-center mt-70 mb-10">
      <div className="relative  mr-7 ml-7 bg-white rounded-lg text-center shadow-[0_0_20px_rgba(0,0,0,0.5)] sm:w-[600px] lg:w-[450px] xl:w-[600px]">
        <div className="flex gap-12 flex-col p-8 z-20 items-center">
          <div className="z-40 ">
            <h1 className="font-bold text-4xl lg:text-3xl xl:text-4xl">
              Join the Community at XRPL.org
            </h1>
          </div>
          <div>
            <p className="text-[1.2rem] lg:text-[1rem] xl:text-[1.2rem]">
              Connect at XRPL.org, a community by and for the developers and
              entrepreneurs who rely on the XRPL.
            </p>
          </div>
          <div className="z-40 flex justify-center items-center w-full  rounded-sm h-12 bg-blue-700  mt-5 duration-700 ease-out hover:bg-blue-800 hover:ease-in hover:duration-800 sm:w-42">
            <div
              onMouseOver={function () {
                setIsHovered(true);
              }}
              onMouseLeave={function () {
                setIsHovered(false);
              }}
              className="w-34   flex items-center  max-sm:justify-center   gap-4 text-white  sm:pr-3 sm:pl-3 sm:w-42  ">
              <div className="w-[170px] text-left">
                <button className="text-sm font-bold sm:ml-1">
                  Start Building
                </button>
              </div>
              <div
                className={`w-[30px]  transition-all duration-700
             ${isHovered ? "mr-0" : "mr-1.5"}`}>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className=""></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-0 hidden sm:block">
          <img src={firstImg}></img>
        </div>
        <div className="absolute right-0 bottom-0 z-0">
          <img src={secondImg}></img>
        </div>
      </div>
    </div>
  );
};

export default Community;
