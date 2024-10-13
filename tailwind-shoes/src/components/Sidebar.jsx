export function Sidebar({ Children, isOpen, onClickClose }) {
  return (
    <div
      className={`z-50 left-0 fixed top-0 w-full h-full bg-white transform transition duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <button
        onClick={onClickClose}
        className="absolute right-4 top-4 p-2 text-black font-bold"
      >
        X
      </button>
      {Children}
      <div></div>
    </div>
  );
}
