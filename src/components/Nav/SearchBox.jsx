export default function SearchBox({ onClose }) {
  console.log(onClose);
  return (
    <>
      <div
        onClick={onClose}
        className="fixed bg-black inset-0 opacity-10"></div>
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[95vh] bg-white rounded-md shadow-[0_0_5px_rgba(0,0,0,0.5)] pointer-events-auto">
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
