import { NavLink } from "react-router-dom";

export default function Docs() {
  return (
    <div className="fixed left-28 bg-violet-50 shadow-[0_0_10px_rgba(0,0,0,0.5)] flex ">
      <div className="flex flex-col gap-10 p-10">
        <NavLink
          to="/docs"
          className="flex flex-row gap-5 items-center hover:curser-pointer">
          <div className="p-3 bg-white rounded-md">
            <img src="https://xrpl.org/img/icons/lightmode/docs.svg" />
          </div>
          <div className="flex flex-col gap-3 w-80">
            <h1 className="font-bold text-2xl hover:text-violet-700">
              Documentation
            </h1>
            <p>Dive into XRP Ledger technology and start integration</p>
          </div>
        </NavLink>
        <div className="flex gap-28">
          <div className="flex flex-col gap-5">
            <span className="font-thin">Article Types</span>
            <h1 className="hover:text-violet-700 hover:curser-pointer">
              <NavLink> Concepts</NavLink>
            </h1>
            <h1 className="hover:text-violet-700 hover:curser-pointer">
              <NavLink>Tutorials</NavLink>
            </h1>
            <h1 className="hover:text-violet-700 hover:curser-pointer">
              <NavLink> References</NavLink>
            </h1>
            <h1 className="hover:text-violet-700 hover:curser-pointer">
              <NavLink> Infrastucture</NavLink>
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-thin">Use Cases</span>
            <h1 className="hover:text-violet-700 hover:curser-pointer">
              <NavLink> Payments</NavLink>
            </h1>
            <h1 className="hover:text-violet-700 hover:curser-pointer">
              <NavLink> Tokenization</NavLink>
            </h1>
            <h1 className="hover:text-violet-700 hover:curser-pointer">
              <NavLink> Decentralized Finance</NavLink>
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="ml-10 mt-10 pr-20 flex flex-col gap-6">
          <span className="font-thin">Get Started</span>
          <h5 className="hover:text-violet-700 hover:curser-pointer">
            <NavLink>JavaScript</NavLink>
          </h5>
          <h5 className="hover:text-violet-700 hover:curser-pointer">
            <NavLink>Python</NavLink>
          </h5>
          <h5 className="hover:text-violet-700 hover:curser-pointer">
            <NavLink>Java</NavLink>
          </h5>
          <h5 className="hover:text-violet-700 hover:curser-pointer">
            <NavLink>PHP</NavLink>
          </h5>
          <h5 className="hover:text-violet-700 hover:curser-pointer">
            <NavLink>GO</NavLink>
          </h5>
          <h5 className="hover:text-violet-700 hover:curser-pointer">
            <NavLink>HTTP / Websocket APIs</NavLink>
          </h5>
        </div>
      </div>
    </div>
  );
}
