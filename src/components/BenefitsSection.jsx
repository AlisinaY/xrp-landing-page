const data = [
  {
    icon: "https://xrpl.org/img/icons/lightmode/public.svg",
    heading: "Public and Decentralized",
    text: "Open source, open to anyone to build on, maintained by the community"
  },
  {
    icon: "https://xrpl.org/img/icons/lightmode/streamlined.svg",
    heading: "Streamlined Development",
    text: "Intentional innovations, tools and documentation reduce time to market"
  },
  {
    icon: "https://xrpl.org/img/icons/lightmode/performance.svg",
    heading: "High Performance",
    text: "Thousands of transactions settled in seconds"
  },
  {
    icon: "https://xrpl.org/img/icons/lightmode/low-cost.svg",
    heading: "Low Cost",
    text: "At fractions of a penny per transaction, costs are inexpensive enough to enable a wide variety of blockchain use cases"
  },
  {
    icon: "https://xrpl.org/img/icons/lightmode/community.svg",
    heading: "Motivated Community",
    text: "Companies, developers, validators, and users work together to make the XRP Ledger better every day"
  },
  {
    icon: "https://xrpl.org/img/icons/lightmode/reliability.svg",
    heading: "Proven Reliability",
    text: "10+ years of error-free, uninterrupted performance over more than 63 million ledgers"
  }
];

const BenefitsSection = () => {
  return (
    <div className="sm:flex sm:justify-center sm:mr-20 lg:mr-0">
      <div className="flex flex-col gap-10 mt-25 ml-10 mr-10 sm:w-120 sm:mt-60 lg:w-[950px] lg:gap-13 xl:w-[1200px]">
        <div className="flex flex-col gap-6">
          <div className="">
            <h1 className="font-bold text-lg">Benefits</h1>
          </div>
          <div className="font-bold text-3xl sm:w-60 lg:w-200">
            <h1>Why Developers choose the XRP Ledger</h1>
          </div>
        </div>
        <div className="flex max-lg:flex-col gap-8 lg:flex-row lg:flex-wrap lg:justify-between lg:gap-16 ">
          {data.map((item) => {
            return (
              <div className="flex flex-col gap-5 lg:w-60 xl:w-85">
                <div className="">
                  <img src={item.icon} />
                </div>
                <div className="">
                  <h1 className="font-bold text-xl lg:text-2xl">
                    {item.heading}
                  </h1>
                </div>
                <div className="">
                  <p className="lg:text-lg">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
