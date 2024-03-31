const Footer = () => {
  return (
    <div className="flex flex-col gap-8 mt-36 bg-slate-900 text-gray-200">
      <div className="flex flex-row justify-evenly gap-5 p-6 pt-10 md:p-12 ">
        <div className="flex flex-col gap-3">
          <h6 className="mb-2 text-gray-400 md:text-base text-sm font-medium">
            About
          </h6>
          <p className="text-xs md:text-sm">FAQ</p>
          <p className="text-xs md:text-sm">Reviews</p>
          <p className="text-xs md:text-sm">About Us</p>
          <p className="text-xs md:text-sm">Contact Us</p>
        </div>
        <div className="flex flex-col gap-3">
          <h6 className="mb-2 text-gray-400 md:text-base text-sm font-medium">
            Information
          </h6>
          <p className="text-xs md:text-sm">Terms of Service</p>
          <p className="text-xs md:text-sm">Privacy Policy</p>
          <p className="text-xs md:text-sm">Shipping & Returns</p>
        </div>
        <div className="flex flex-col gap-3">
          <h6 className="mb-2 text-gray-400 md:text-base text-sm font-medium">
            Social Media
          </h6>
          <a
            href="https://www.instagram.com/buffering_humor?igsh=aGhmdm96NWc2NnZz"
            className="hover:cursor-pointer hover:text-blue-600 text-xl md:text-2xl"
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/boibhav-chakraborty-4b2461245/"
            className="hover:cursor-pointer hover:text-blue-600 text-xl md:text-2xl"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://x.com/BoibhavC?t=ZEjSG2lLpezFBGXF2EU02g&s=08"
            className="hover:cursor-pointer hover:text-blue-600 text-xl md:text-2xl"
            target="_blank"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/xaliz-06"
            className="hover:cursor-pointer hover:text-blue-600 text-xl md:text-2xl"
            target="_blank"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
        </div>
      </div>
      <hr className="w-10/12 m-auto" />
      <p className="pb-6 m-auto text-sm md:text-base">
        Copyright © 2022-2024 RE-BOOK LLC
      </p>
    </div>
  );
};

export default Footer;
