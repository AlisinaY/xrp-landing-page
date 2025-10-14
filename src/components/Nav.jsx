import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGlobe,
  faMoon,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

import xrpLogo from "../assets/xrp-log.png";

const Nav = () => {
  return (
    <>
      <div className="flex justify-between items-center h-20 bg-violet-50">
        <div className="ml-8  grow-1 xl:mr-3 ">
          <img src={xrpLogo} className="w-40" />
        </div>
        <div className="text-2xl mr-5 lg:hidden">
          <FontAwesomeIcon icon={faBars}> </FontAwesomeIcon>
        </div>
        <div className="max-lg:hidden grow-5 mr-5">
          <ul className="flex flex-row justify-between mr-10 ">
            <li className="text-lg font-semibold">about</li>
            <li className="text-lg font-semibold">docs</li>
            <li className="text-lg font-semibold">resources</li>
            <li className="text-lg font-semibold">community</li>
          </ul>
        </div>
        <div className="max-lg:hidden flex flex-row  mr-6 justify-between  items-center  grow-6 xl:grow-20 ">
          <div className="flex flex-row justify-start items-center bg-gray-200  rounded-sm h-8 grow-1">
            <div className="mr-2">
              <FontAwesomeIcon
                icon={faSearch}
                className="ml-3 text-sm "></FontAwesomeIcon>
            </div>
            <div className="mr-2 font-semibold">Search</div>
            <div className="font-bold">/</div>
          </div>
          <div className="">
            <ul className="flex gap-2 flex-row items-center">
              <li className="ml-3 2xl:ml-4">
                <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
              </li>
              <li className="text-center rounded-sm bg-gray-200 p-1">
                <FontAwesomeIcon
                  icon={faMoon}
                  className="text-white"></FontAwesomeIcon>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
