const data = [
  {
    img: "https://xrpl.org/img/cards/3col-orange-yellow.svg",
    title: "Documentation",
    description:
      "Access everything you need to get started working with the XRPL"
  },
  {
    img: "https://xrpl.org/img/cards/3col-magenta-orange.svg",
    title: "Guided Tutorilas",
    description: "Follow step-by-step guides for frequent tasks"
  },
  {
    img: "https://xrpl.org/img/cards/3col-purple-blue-green.svg",
    title: "XRPL Fundamentals",
    description: "Read about the XRPL’s foundational concepts"
  },
  {
    img: "https://xrpl.org/img/cards/3col-light-blue.svg",
    title: "Choose a Language",
    description:
      "Find tools, documentation, and sample code in Python, Java, Javascript, or use HTTP APIs"
  },
  {
    img: "https://xrpl.org/img/cards/3col-green-blue.svg",
    title: "Get Inspired",
    description: "See what your peers have built on the XRPL"
  }
];

const Introduction = () => {
  return (
    <div className="sm:flex sm:justify-center">
      <div className="flex flex-col gap-15 mr-10 ml-10 mt-80 sm:w-[600px] lg:w-[900px] xl:w-[1250px]">
        <div className="flex flex-col justify-between gap-3">
          <div className="">
            <h2 className="font-bold text-[1rem]">Where to Start</h2>
          </div>
          <div className="">
            <h1 className="font-bold text-[1.8rem] xs:w-[350px] lg:w-[540px] xl:w-[700px]">
              Choose a path, and bring your project to life on the XRP Ledger
            </h1>
          </div>
        </div>
        <div className="flex max-lg:flex-col gap-20 lg-flex-row  lg:flex-wrap lg:gap-10  xl:gap-25">
          {data.map((item) => {
            return (
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
