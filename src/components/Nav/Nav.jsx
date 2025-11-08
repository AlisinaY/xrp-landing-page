import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGlobe,
  faMoon,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

import About from "./About.jsx";
import Docs from "./Docs.jsx";
import Resources from "./Resources.jsx";
import Community from "./Community.jsx";
import Language from "./Language.jsx";
import SearchBox from "./SearchBox.jsx";

import xrpLogo from "../../assets/xrp-log.png";

export default function Nav() {
  const [about, setAbout] = useState(null);
  const [docs, setDocs] = useState(null);
  const [resources, setResources] = useState(null);
  const [community, setCommunity] = useState(null);
  const [language, setLanguage] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const navRef = useRef(null);
  const vh = useViewPortHeight();

  function handleSection(section) {
    setAbout(section === "about" ? !about : false);
    setDocs(section === "docs" ? !docs : false);
    setResources(section === "resources" ? !resources : false);
    setCommunity(section === "community" ? !community : false);
    setLanguage(section === "language" ? !language : false);
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setAbout(false);
        setCommunity(false);
        setResources(false);
        setDocs(false);
        setLanguage(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (openModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [openModal]);

  return (
    <>
      <div ref={navRef}></div>
      <div className="flex justify-between items-center h-20 ">
        <div className="ml-8  grow-1 xl:mr-3 ">
          <NavLink to="/">
            <img src={xrpLogo} className="w-40" />
          </NavLink>
        </div>
        <div className="text-2xl mr-5 lg:hidden">
          <FontAwesomeIcon icon={faBars}> </FontAwesomeIcon>
        </div>
        <div className="max-lg:hidden grow-5 mr-5">
          <ul className="flex flex-row justify-between mr-10 ">
            <li
              onClick={() => {
                handleSection("about");
              }}
              className="text-[1rem] font-bold pt-2 pb-2 border-b-2 border-transparent hover:border-b-2 hover:border-blue-400">
              <NavLink>About</NavLink>
            </li>
            <li
              onClick={() => {
                handleSection("docs");
              }}
              className="text-[1rem] font-bold pt-2 pb-2 border-b-2 border-transparent hover:border-b-2 hover:border-blue-400">
              <NavLink>Docs</NavLink>
            </li>
            <li
              onClick={() => {
                handleSection("resources");
              }}
              className="text-[1rem] font-bold pt-2 pb-2 border-b-2 border-transparent hover:border-b-2 hover:border-blue-400">
              <NavLink>Resources</NavLink>
            </li>
            <li
              onClick={() => {
                handleSection("community");
              }}
              className="text-[1rem] font-bold pt-2 pb-2 border-b-2 border-transparent hover:border-b-2 hover:border-blue-400">
              <NavLink>Community</NavLink>
            </li>
          </ul>
        </div>
        <div className="max-lg:hidden flex flex-row  mr-6 justify-between  items-center  grow-6 xl:grow-20 ">
          <div
            onClick={() => setOpenModal(true)}
            className="grow-1 bg-violet-50 overflow-hidden">
            <div
              className="flex flex-row
             justify-start items-center bg-gray-200  rounded-sm  grow-1 border border-transparent  hover:border hover:border-gray-300 h-8">
              <div className="mr-2">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="ml-3 text-sm text-gray-400"></FontAwesomeIcon>
              </div>
              <div className="mr-2 font-bold text-gray-400">Search</div>
              <div className="font-bold text-gray-400">/</div>
            </div>
          </div>
          <div className="">
            <ul className="flex gap-2 flex-row items-center">
              <li
                onClick={() => {
                  handleSection("language");
                }}
                className="ml-3 2xl:ml-4 p-1 hover:bg-gray-300 hover:p-1 hover:rounded-sm">
                <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
              </li>
              <li className="text-center rounded-sm bg-gray-200 p-1 hover:bg-gray-300">
                <FontAwesomeIcon
                  icon={faMoon}
                  className="text-violet-50 "></FontAwesomeIcon>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {about && <About />}
      {docs && <Docs />}
      {resources && <Resources />}
      {community && <Community />}
      {language && <Language />}
      {createPortal(
        openModal && (
          <SearchBox onClose={() => setOpenModal(false)} browserHeight={vh} />
        ),
        document.getElementById("modal-root")
      )}
    </>
  );
}

function getVH() {
  return Math.round(
    window.visualViewport ? window.visualViewport.height : window.innerHeight
  );
}

function useViewPortHeight() {
  const [vh, setVh] = useState(typeof window !== "undefined" ? getVH() : 0);

  useEffect(() => {
    function handler() {
      setVh(getVH());
    }

    const vv = window.visualViewport;
    window.addEventListener("resize", handler);
    vv?.addEventListener("resize", handler);
    vv?.addEventListener("scroll", handler);

    let media = window.matchMedia(
      `(resolution: ${window.devicePixelRatio}dppx)`
    );
    const onDppx = () => {
      handler();
      media.removeEventListener("change", onDppx);
      media = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
      media.addEventListener("change", onDppx);
    };
    media.addEventListener("change", onDppx);

    handler();

    return () => {
      window.removeEventListener("resize", handler);
      vv?.removeEventListener("resize", handler);
      vv?.removeEventListener("scroll", handler);
    };
  }, []);

  return vh;
}
