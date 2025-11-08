const data = [
  {
    img: "https://xrpl.org/img/cards/3col-pink-purple.svg",
    title: "Decentralized Exchange",
    description:
      "A high-performance decentralized peer-to-peer multi-currency exchange built directly into the blockchain"
  },
  {
    img: "https://xrpl.org/img/cards/3col-neutral-blue.svg",
    title: "Cross-Currency Payments",
    description:
      "Atomically settle multi-hop payments that cross currency or national boundaries with ease"
  },
  {
    img: "https://xrpl.org/img/cards/3col-light-green.svg",
    title: "Payment Channels",
    description: "Batched micropayments with unlimited speed, secured with XRP"
  },
  {
    img: "https://xrpl.org/img/cards/3col-orange-yellow.svg",
    title: "Multi-Signing",
    description:
      "Flexible options for custody and security of on-ledger accounts"
  },
  {
    img: "https://xrpl.org/img/cards/3col-purple-blue-2.svg",
    title: "Tokens",
    description:
      "All currencies other than XRP can be represented in the XRP Ledger as tokens"
  }
];

const Features = () => {
  return (
    <div className="sm:flex sm:justify-center">
      <div className="flex flex-col gap-12 mr-10 ml-10 mt-20 sm:w-[600px] lg:w-[900px] xl:w-[1250px]">
        <div className="flex flex-col justify-between gap-3">
          <div className="">
            <h2 className="font-bold text-[1rem]">Powerful Features</h2>
          </div>
          <div className="">
            <h1 className="font-bold text-[1.8rem] xs:w-[350px] lg:w-[540px] xl:w-[700px]">
              Activate the proven potential of the XRP Ledger and find a trusted
              foundation for your next innovation
            </h1>
          </div>
        </div>
        <div className="flex max-lg:flex-col gap-15 lg-flex-row  lg:flex-wrap lg:gap-8  xl:gap-20">
          {data.map((item) => {
            return (
              <div className="pt-4 duration-500 ease-in hover:pb-4 hover:pt-0 hover:duration-500 hover:ease-in-out">
                <div className="flex flex-col justify-between rounded-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] sm:w-[600px] lg:w-[270px] lg:h-[380px] xl:w-[350px]">
                  <div className="p-3 lg:ml-6 lg:mt-5">
                    <h1 className="font-bold text-xl lg:text-2xl">
                      {item.title}
                    </h1>
                  </div>
                  <div className="p-3 lg:ml-6">
                    <p className="text-lg">{item.description}</p>
                  </div>
                  <div className="mt-18 sm:mt-35 lg:mt-20">
                    <img
                      className="min-w-full h-10 object-cover"
                      src={item.img}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
