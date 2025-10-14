const HeroSection = () => {
  return (
    <div className="flex justify-center items-center mt-10 xs:mt-20 sm:mt-40">
      <div className="flex flex-col mr-8 ml-8 mt-20 gap-10 sm:w-110 lg:w-100 xl:w-120">
        <div className="w-full">
          <h1 className="font-bold text-3xl">
            The XRP Ledger: The Blockchain Built for Business
          </h1>
        </div>
        <div className="">
          <h6 className="font-semibold text-lg sm:text-2xl">
            The XRP Ledger (XRPL) is a decentralized, public blockchain led by a
            global community of businesses and developers looking to solve
            problems and create value.
          </h6>
        </div>
        <div className="font-medium text-lg">
          <p>
            Proven reliable over more than a decade of error-free functioning,
            the XRPL offers streamlined development, low transaction costs, high
            performance, and sustainability. So you can build with
            confidence–and move your most critical projects forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
