import { useState, useEffect } from "react";

export default function SearchBox({ onClose }) {
  const browserHeight = useViewPortHeight();
  return (
    <>
      <div
        onClick={onClose}
        className="hidden lg:block fixed bg-black inset-0 opacity-10"></div>
      <div className="hidden fixed inset-0 lg:flex items-center justify-center pointer-events-none">
        <div
          className={`lg:w-[95vw] lg:h-[580px] xl:w-[1100px] ${
            browserHeight <= 650 ? "xl:h-[580px]" : "xl:h-[740px]"
          } bg-white xl:bg-amber-200 rounded-md shadow-[0_0_5px_rgba(0,0,0,0.5)] pointer-events-auto`}>
          <div className="">
            <span>Icon</span> <span>Search docs...</span>
          </div>
          <div className="">
            <span>All</span>
            <span>Documentation</span>
            <span>Blog</span>
            <span>Resources</span>
            <span>Community</span>
          </div>
          <div className="">
            <h1>Recent Searches</h1>
          </div>
          <div className=""></div>
          <div className="">
            <span>Tap</span>
            <span>to navigate</span>
            <span>enter</span>
            <span>to select</span>
            <span>Esc</span>
            <span>to exit</span>
          </div>
        </div>
      </div>
    </>
  );
}

function getVH() {
  return Math.round(
    window.visualViewport ? window.visualViewport.height : window.innerHeight
  );
}

function useViewPortHeight() {
  const [vh, setVh] = useState(typeof window !== "undefined" ? getVH() : 0);

  useEffect(() => {
    function handler() {
      setVh(getVH());
    }

    const vv = window.visualViewport;
    window.addEventListener("resize", handler);
    vv?.addEventListener("resize", handler);
    vv?.addEventListener("scroll", handler);

    let media = window.matchMedia(
      `(resolution: ${window.devicePixelRatio}dppx)`
    );
    const onDppx = () => {
      handler();
      media.removeEventListener("change", onDppx);
      media = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
      media.addEventListener("change", onDppx);
    };
    media.addEventListener("change", onDppx);

    handler();

    return () => {
      window.removeEventListener("resize", handler);
      vv?.removeEventListener("resize", handler);
      vv?.removeEventListener("scroll", handler);
    };
  }, []);

  console.log(vh);

  return vh;
}
