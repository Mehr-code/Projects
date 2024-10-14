import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav({ onClickShoppingBtn }) {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  return (
    <nav className="z-10 relative flex flex-wrap justify-between items-center">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>

      {/* Burger button */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="lg:hidden p-2 focus:ring-2 focus:ring-gray-200 rounded-lg hover:bg-gray-100"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu List */}
      <div
        className={`${!isMobileMenuShown && "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul className="flex flex-col lg:flex-row bg-gray-200 text-lg border border-gray-200 rounded-lg p-4 lg:bg-transparent lg:border-none lg:space-x-8">
          {" "}
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`  lg:hover:text-blue-500 lg:hover:bg-transparent py-2 px-3 cursor-pointer rounded ${i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-300"} ${(i === 3 || i === 4) && "lg:text-white"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Cart button */}
      <div
        onClick={onClickShoppingBtn}
        className="btn-press-anim fixed bottom-4 left-4 lg:static lg:mr-8"
      >
        <div className="h-12 w-12 rounded-full bg-white shadow-md flex-center cursor-pointer">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
