import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";
import Bar from "../Bar/Bar";

const tabs = [
  {
    name: "Home",
    link: "/home",
    id: 1,
  },
  {
    name: "Courses",
    link: "/courses",
    id: 2,
  },
];

const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Change navbar color when scroll position > 50px
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`nav-container w-full sticky top-0 z-[99] h-[52px] shadow-lg flex items-center justify-center px-[1rem] md:px-[6rem] text-white transition-all duration-300 ease-in-out ${
        scrolled
          ? `${
              menuToggle ? "bg-black/100" : "bg-black/30"
            }  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 shadow-lg`
          : "bg-[#000000]"
      } `}
    >
      <div className="navbar w-full flex items-center justify-between">
        <div className="logo">
          <Link to="/">
            <img
              className="w-14 sm:w-16"
              src="/images/nav_logo.png"
              alt="nav-logo"
            />
          </Link>
        </div>
        {menuToggle ? (
          <button
            className="block md:hidden z-10"
            onClick={() => setMenuToggle((prev) => !prev)}
          >
            <IoClose className="text-3xl font-bold" />
          </button>
        ) : (
          <button
            className="block md:hidden z-10"
            onClick={() => setMenuToggle((prev) => !prev)}
          >
            <CiMenuFries className="text-3xl font-bold" />
          </button>
        )}

        <div
          className={`transition-all ease-in bg-black ${
            menuToggle
              ? "translate-y-[0] opacity-[100%]"
              : "translate-y-[-25rem] md:translate-y-0 opacity-0 md:opacity-[100%] z-[-1] md:z-auto"
          }  flex flex-col md:opacity-[100%] py-8 md:py-0 md:flex-row gap-5 md:gap-10 absolute md:static top-[52px] left-0 w-full md:w-auto items-center justify-between ${
            scrolled ? "" : "bg-black"
          } `}
        >
          <div className="w-full">
            <ul className="min-w-[10rem] gap-5 md:gap-0 flex flex-col md:flex-row justify-between items-center px-2">
              {tabs.map((item) => {
                return (
                  <Link
                    onClick={() => setMenuToggle((prev) => !prev)}
                    key={item.id}
                    to={`${item.link}`}
                    className="transition-all ease-in hover:text-white hover:text-[18px] text-gray-300"
                  >
                    <li className="px-1">{item.name}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div>
            <button className="bg-green-600 flex items-center justify-center gap-2 hover:bg-green-500 px-4 md:px-2 py-1 rounded-sm font-semibold ">
              <p>Connect</p>
              <FaWhatsapp className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-[2rem] bottom-[-45rem] animate-bounce md:hidden">
        <Bar />
      </div>
    </div>
  );
};

export default NavBar;
