import Image from "next/image";

import { useEffect } from "react";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";

import Fade from 'react-reveal/Fade'

function Header() {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      const header = document.querySelector("#header");
      const logo = document.querySelector("#logo");
      const search = document.querySelector("#search");
      const searchInput = document.querySelector("#searchInput");
      const hostIcons = document.querySelector("#hostIcons");

      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 100
      ) {
        header.classList.remove("p-12");
        header.classList.add("p-5");
        logo.classList.remove("h-10");
        logo.classList.add("h-8");
        search.classList.remove("py-2");
        searchInput.classList.add("placeholder-gray-400");
        searchInput.classList.remove("placeholder-gray-50");
        hostIcons.classList.add("text-gray-500");
        hostIcons.classList.remove("text-gray-50");
        header.classList.remove("bg-transparent");
        header.classList.add("bg-white");

      } else {
        header.classList.remove("p-5");
        header.classList.add("p-12");
        header.classList.add("bg-transparent");
        header.classList.remove("bg-white");
        logo.classList.add("h-10");
        logo.classList.remove("h-8");
        search.classList.add("py-2");
        hostIcons.classList.remove("text-gray-500");
        hostIcons.classList.add("text-gray-50");
        searchInput.classList.remove("placeholder-gray-400");
        searchInput.classList.add("placeholder-gray-50");

      }
    }
  }, []);
  return (
    <Fade >
    <header
      id="header"
      className="fixed w-full top-0 z-50 grid grid-cols-3 bg-transparent p-12 transform  duration-300 md:px-10"
    >
      {/* Left */}
      <div
        id="logo"
        className="relative flex items-center transform duration-300 h-10 cursor-pointer my-auto"
      >

        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle search*/}
      <div id="search" className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input id="searchInput"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-50"
          type="text"
          placeholder="start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer  md:mx-2" />
      </div>
      {/* right */}

      <div id="hostIcons" className="flex space-x-4 items-center justify-end text-gray-50 opacity-90">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
    </Fade>
  );
}

export default Header;
