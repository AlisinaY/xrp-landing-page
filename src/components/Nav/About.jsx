import { NavLink } from "react-router-dom";

export default function About({ browserHeight, browserWidth }) {
  const lgScreenStyle =
    "fixed flex gap-15 left-50 top-20 shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-violet-50 pt-8 pl-12 pb-8 pr-20 max-lg:hidden";
  const smScreenStyle =
    "fixed flex flex-col gap-4 bg-violet-50 w-[100%] h-[100%] top-20 lg:hidden";

  const aboutJsx = (
    <>
      <div className="flex gap-4 flex-col w-40">
        <span className="font-thin">XRP Ledger</span>
        <h4 className="hover:text-violet-600">
          <NavLink> XRPL Overview</NavLink>
        </h4>
        <h4 className="hover:text-violet-600">
          <NavLink>Use Cases & Featured Projects</NavLink>
        </h4>
        <h4 className="hover:text-violet-600">
          <NavLink>History</NavLink>
        </h4>
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-thin">XRP</span>
        <h4 className="hover:text-violet-600">
          <NavLink>XRP Overview</NavLink>
        </h4>
        <span className="font-thin">Sustainability</span>
        <h4 className="hover:text-violet-600">
          <NavLink>Impact</NavLink>
        </h4>
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-thin">About</span>
        <h4 className="hover:text-violet-600">
          <NavLink>XRPL Foundation</NavLink>
        </h4>
        <h4 className="hover:text-violet-600">
          <NavLink>FAQ</NavLink>
        </h4>
        <h4 className="hover:text-violet-600">
          <NavLink>Privacy Policy</NavLink>
        </h4>
      </div>
    </>
  );

  return (
    <>
      <div className={`${browserWidth <= 995 ? smScreenStyle : lgScreenStyle}`}>
        <div className="bg-gray-200 pl-15 pt-2 text-lg font-semibold h-13 fixed inset-0 top-20 lg:hidden">
          About
        </div>
        {innerWidth <= 995 ? (
          <div
            className="pl-15 pb-5 pt-16 bg-violet-50"
            style={{
              height: browserHeight - 132,
              overflow: "scroll"
            }}>
            {aboutJsx}
          </div>
        ) : (
          aboutJsx
        )}
      </div>
    </>
  );
}
