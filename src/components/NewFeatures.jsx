const NewFeatures = () => {
  return (
    <div className="mb-50 sm:flex sm:justify-center lg:justify-start lg:pl-10">
      <div className="flex flex-col gap-18 mr-7 ml-7 sm:w-[600px] lg:w-[620px] xl:w-[900px]">
        <div className="flex gap-5 flex-col">
          <div className="">
            <h2 className="font-bold text-[1rem]">Preview New Features</h2>
          </div>
          <div className="xs:w-[320px] lg:w-full">
            <h1 className="font-bold text-3xl lg:text-4xl ">
              Explore what the community is building to enable new features and
              use cases on XRPL
            </h1>
          </div>
        </div>
        <div className=" flex flex-col gap-10 lg:flex-wrap lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-5 lg:w-[250px] xl:w-[350px]">
            <div className="max-w-max bg-green-300 pl-5 pr-5 pt-3 pb-3 rounded-4xl">
              <h4 className="font-semibold text-lg">In Development</h4>
            </div>
            <div>
              <h2 className="text-xl font-bold">Smart Contracts</h2>
            </div>
            <div>
              <p className="text-[1rem] font-medium">
                Hooks are small, efficient WebAssembly modules designed
                specifically for the XRPL. Check out the hooks amendment and
                public testnet that enable smart contract functionality.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:w-[250px] xl:w-[350px]">
            <div className="max-w-max bg-green-300 pl-5 pr-5 pt-3 pb-3 rounded-4xl">
              <h4 className="text-lg font-semibold">Enabled</h4>
            </div>
            <div>
              <h2 className="text-xl font-bold">Automated Market Makers</h2>
            </div>
            <div>
              <p className="text-[1rem]">
                Smart contracts to provide liquidity and earn passive income
                from facilitating currency exchange, complementary with the
                order-book DEX already built into the XRPL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFeatures;
