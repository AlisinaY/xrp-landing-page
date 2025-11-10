import { NavLink } from "react-router-dom";

export default function Resources({ browserWidth, browserHeight }) {
  const html = (
    <>
      <div className="flex gap-4 flex-col w-40">
        <span className="font-thin text-sm">Development</span>
        <h4>
          <NavLink to="" className="hover:text-violet-600">
            Code Samples
          </NavLink>
        </h4>
        <h4>
          <NavLink to="" className="hover:text-violet-600">
            Dev Tools
          </NavLink>
        </h4>
        <h4>
          <NavLink to="" className="hover:text-violet-600">
            XRPL Learning Portal
          </NavLink>
        </h4>
        <h4>
          <NavLink to="" className="hover:text-violet-600">
            XRPL Brand Kit
          </NavLink>
        </h4>
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-thin text-sm">Current Status</span>
        <h4>
          <NavLink to="" className="hover:text-violet-600">
            Ledger Explorer
          </NavLink>
        </h4>
        <h4>
          <NavLink to="" className="hover:text-violet-600">
            Known Amendments
          </NavLink>
        </h4>
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-thin text-sm">Join In</span>
        <h4>
          <NavLink to="" className="hover:text-violet-600">
            Contribute Code
          </NavLink>
        </h4>
        <h4>
          <NavLink to="" className="hover:text-violet-600">
            Contribute Documentation
          </NavLink>
        </h4>
        <h4>
          <NavLink to="" className="hover:text-violet-600">
            Contribute Blog
          </NavLink>
        </h4>
      </div>
    </>
  );

  const smScreenStyle =
    "fixed inset-0 bg-violet-50 top-20 flex flex-col gap-4  ";
  const lgScreenStyle =
    "fixed flex gap-15 left-50 shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-violet-50 pt-8 pl-12 pb-8 pr-20";
  return (
    <div className={`${browserWidth <= 995 ? smScreenStyle : lgScreenStyle}`}>
      <div className="fixed right-0 left-0 top-20  bg-gray-200 pt-3 pb-3 pl-15 font-semibold text-lg lg:hidden">
        Resources
      </div>
      {browserWidth <= 995 ? (
        <div
          className="pl-15 pb-5 pt-16 bg-violet-50"
          style={{
            height: browserHeight - 132,
            overflow: "scroll"
          }}>
          {html}
        </div>
      ) : (
        html
      )}
    </div>
  );
}
