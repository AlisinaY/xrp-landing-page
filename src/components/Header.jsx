import xrpHeaderImg from "../assets/xrp.png";

const Header = () => {
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
        <div className="w-full mt-5 bg-blue-800 rounded-sm h-12 flex items-center justify-center text-white sm:w-40">
          <button className="text-sm font-bold ">Start Building</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
