export function Sidebar({ Children, isOpen, onClickClose }) {
  return (
    <div>
      <div
        className={`p-5 z-50 right-0 fixed top-0 w-full h-full md:w-[50%] lg:w-[35%] bg-white transform transition duration-300 shadow-lg ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClickClose}
          className="absolute right-4 top-4 p-2 text-black font-bold"
        >
          X
        </button>
        {Children}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"></div>
      )}
    </div>
  );
}
