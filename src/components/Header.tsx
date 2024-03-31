import { Link } from "react-router-dom";

import logo from "../assets/re_book_logo.png";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-gray-700 bg-slate-700 py-4 sticky top-0 z-50 shadow-md">
      <div className="container max-w-none min-w-screen mx-auto px-4 lg:px-8 xl:px-12 flex justify-between gap-3 items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-gray-200 flex flex-row items-center gap-3"
        >
          <img src={logo} alt="logo" className="w-12" />
          Re-Book
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
