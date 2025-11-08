import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCopyright } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    title: "About",
    items: [
      "XRPL Overview",
      "Use Cases & Projects",
      "History",
      "Impact",
      "XRPL Foundation",
      "FAQ",
      "Privacy Policy"
    ]
  },
  {
    title: "Docs",
    items: [
      "XRPL Documentation",
      "Introduction",
      "Use Cases",
      "Concepts",
      "Tutorials",
      "References",
      "Infrastructure"
    ]
  },
  {
    title: "Resources",
    items: [
      "Code Samples",
      "Dev Tools",
      "XRPL Learning Portal",
      "XRPL Brand Kit",
      "Ledger Explorer",
      "Known Amendments",
      "Contribute Code",
      "Contribute Documentation"
    ]
  },
  {
    title: "Community",
    items: [
      "Community",
      "Events",
      "Ambassadors",
      "Developer Funding",
      "XRPL Jobs",
      "XRP Ledger Community Blog",
      "XRPL Grants",
      "GitHub",
      "Report a Scam"
    ]
  }
];

const Footer = () => {
  return (
    <div className="w-full flex flex-col gap-10 items-center">
      <div className="flex flex-col gap-5 items-center  xs:flex-row xs:items-start w-full  xs:justify-between xs:p-6 lg:p-20">
        {data.map((item) => {
          return (
            <div className="flex flex-col gap-4 justify-center items-center xs:items-start xs:justify-between xs:max-w-70">
              <div className="">
                <h1 className="font-bold text-lg">{item.title}</h1>
              </div>
              <ul className="flex flex-col items-center xs:gap-4 xs:items-start">
                {item.items.map((item) => {
                  return (
                    <li className=" max-sm:w-25  text-[0.9rem] xs:text-[0.8rem] lg:text-[1rem] border-b border-transparent hover:border-b hover:border-pink-600 hover:text-pink-600">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="mb-10 flex flex-row gap-6">
        <div className="">
          <p className="">
            <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2025 XRP
            Ledger. Open Source.
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default Footer;
