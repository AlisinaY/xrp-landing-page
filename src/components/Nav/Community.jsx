import { NavLink } from "react-router-dom";

export default function Community({ browserWidth, browserHeight }) {
  const smScreenStyle = "bg-violet-50 flex flex-col fixed inset-0 top-20";
  const lgScreenStlye =
    "fixed left-98 top-20 bg-violet-50 shadow-[0_0_10px_rgba(0,0,0,0.5)] pl-10 pr-10 pt-8 pb-8 flex flex-col gap-8";
  const html = (
    <>
      <NavLink className="flex gap-6 items-center lg:items-center lg:justify-center">
        <div className="bg-white p-4 rounded-sm  flex items-center justify-center">
          <img
            className=""
            src="https://xrpl.org/img/icons/lightmode/contribute.svg"
          />
        </div>
        <div className="flex flex-col gap-2 lg:w-60">
          <h1 className="text-xl sm:text-2xl font-bold hover:text-violet-700">
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
    </>
  );
  return (
    <div className={`${browserWidth <= 995 ? smScreenStyle : lgScreenStlye}`}>
      <div className="bg-gray-200 font-semibold text-lg pl-10 pb-3 pt-3">
        Community
      </div>
      {browserWidth <= 995 ? (
        <div
          style={{ height: browserHeight - 132, overflow: "scroll" }}
          className="pl-10 pr-10 pb-12 pt-6">
          {html}
        </div>
      ) : (
        html
      )}
    </div>
  );
}
