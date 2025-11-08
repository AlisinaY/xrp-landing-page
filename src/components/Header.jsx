import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex items-center flex-col mt-10 mr-8 ml-8">
      <div className="w-full sm:w-140 lg:w-215">
        <img src="https://xrpl.org/img/lightmode/home-hero.svg" />
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-8 gap-6 w-full">
        <div className="">
          <h5 className="font-bold text-xl">XRPL | XRP Ledger</h5>
        </div>
        <div className="">
          <h1 className="font-bold text-4xl xs:text-7xl">
            The Blockchain
            <br></br>
            Built for Business
          </h1>
        </div>
        <div className=" flex justify-center items-center w-full  rounded-sm h-12 bg-blue-700  mt-5 duration-700 ease-out hover:bg-blue-800 hover:ease-in hover:duration-800 sm:w-42">
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
    </div>
  );
};

export default Header;
