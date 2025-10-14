const firstImg =
  "https://xrpl.org/assets/cta-home-purple.3d6eaf8d70c745037f2f67a525380b93ae6ce1911f863e796a4a0be88fadc723.2dee4622.svg";
const secondImg =
  "https://xrpl.org/assets/cta-home-green.c1d5f6e06bcac8274fdd2224cd35b0ccd6099e66ca18b591ad3782d794c3d714.2dee4622.svg";

const Community = () => {
  return (
    <div className="flex justify-center mt-70 mb-10">
      <div className="relative  mr-7 ml-7 bg-white rounded-lg text-center shadow-[0_0_20px_rgba(0,0,0,0.5)] sm:w-[600px] lg:w-[450px] xl:w-[600px]">
        <div className="flex gap-12 flex-col p-8 z-20">
          <div className="z-40 ">
            <h1 className="font-bold text-4xl lg:text-3xl xl:text-4xl">
              Join the Community at XRPL.org
            </h1>
          </div>
          <div>
            <p className="text-[1.2rem] lg:text-[1rem] xl:text-[1.2rem]">
              Connect at XRPL.org, a community by and for the developers and
              entrepreneurs who rely on the XRPL.
            </p>
          </div>
          <div className="z-40">
            <button
              className="w-full bg-blue-700 text-white p-2 rounded-sm sm:w-40 sm:p-3
            ">
              Get Involved
            </button>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-0 hidden sm:block">
          <img src={firstImg}></img>
        </div>
        <div className="absolute right-0 bottom-0 z-0">
          <img src={secondImg}></img>
        </div>
      </div>
    </div>
  );
};

export default Community;
