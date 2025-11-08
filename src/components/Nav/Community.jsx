import { NavLink } from "react-router-dom";

export default function Community() {
  return (
    <div className="fixed left-98  bg-violet-50 shadow-[0_0_10px_rgba(0,0,0,0.5)] pl-10 pr-10 pt-8 pb-8 flex flex-col gap-8">
      <NavLink className="flex gap-2 items-center">
        <div className="bg-white p-3 rounded-sm">
          <img src="https://xrpl.org/img/icons/lightmode/contribute.svg" />
        </div>
        <div className="flex justify-items-start items-center flex-col gap-2 w-60">
          <h1 className="text-2xl font-semibol text-center hover:text-violet-700">
            Contribute to the XRPL Community
          </h1>
          <span className="font-thin">Join the conversation</span>
        </div>
      </NavLink>
      <div className="flex flex-col gap-4">
        <span className="font-thin text-sm">Get Involved</span>
        <h1 className="hover:text-violet-700">
          <NavLink to="">Events</NavLink>
        </h1>
        <h1 className="hover:text-violet-700">
          <NavLink to="">Ambassadors</NavLink>
        </h1>
        <h1 className="hover:text-violet-700">
          <NavLink to="">Developer Funding</NavLink>
        </h1>
        <h1 className="hover:text-violet-700">
          <NavLink to="">XRPL Jobs</NavLink>
        </h1>
        <h1 className="hover:text-violet-700">
          <NavLink to="">Dev Blog</NavLink>
        </h1>
        <h1 className="hover:text-violet-700">
          <NavLink to="">XRPL Grants</NavLink>
        </h1>
        <h1 className="hover:text-violet-700">
          <NavLink to="">GitHub</NavLink>
        </h1>
        <h1 className="hover:text-violet-700">
          <NavLink to="">Report a Scam</NavLink>
        </h1>
      </div>
    </div>
  );
}
