import Image from "next/image";

import { useEffect, useState } from "react";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  GlobeAltIcon,
  UserIcon,
} from "@heroicons/react/solid";
import Fade from "react-reveal/Fade";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar, DateRangePicker, DateRange } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const router = useRouter();
  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      const header = document.querySelector("#header");
      const logo = document.querySelector("#logo");
      const search = document.querySelector("#search");
      const searchInputEl = document.querySelector("#searchInput");
      const hostIcons = document.querySelector("#hostIcons");

      if (
        (header && document.body.scrollTop > 80) ||
        document.documentElement.scrollTop > 10
      ) {
        header.classList.remove("p-8");
        header.classList.add("p-5");
        logo.classList.remove("h-10");
        logo.classList.add("h-8");
        search.classList.remove("py-2");
        searchInputEl.classList.add("placeholder-gray-400");
        searchInputEl.classList.remove("placeholder-gray-50");
        hostIcons.classList.add("text-gray-500");
        hostIcons.classList.remove("text-gray-50");
        header.classList.remove("bg-transparent");
        header.classList.add("bg-white");
        header.classList.add("shadow-md");
      } else {
        header.classList.remove("p-5");
        header.classList.add("p-8");
        header.classList.add("bg-transparent");
        header.classList.remove("bg-white");
        header.classList.remove("shadow-md");
        logo.classList.add("h-10");
        logo.classList.remove("h-8");
        search.classList.add("py-2");
        hostIcons.classList.remove("text-gray-500");
        hostIcons.classList.add("text-gray-50");
        searchInputEl.classList.remove("placeholder-gray-400");
        searchInputEl.classList.add("placeholder-gray-50");
      }
    }
  }, []);

  return (
    <Fade>
      <header
        id="header"
        className={`fixed w-full top-0 ${
          searchInput.length >= 1 ? "bg-white" : "bg-transparent"
        }   z-50 grid grid-cols-3 p-8 transform  duration-300  px-8 `}
      >
        {/* Left */}
        <div
          onClick={() => router.push("/")}
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
        <div
          id="search"
          className="flex items-center  rounded-full py-2 md:shadow-md "
        >
          <input
            id="searchInput"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className={`flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-500`}
            type="text"
            placeholder={placeholder || "start your search"}
          />
          <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer  md:mx-2" />
        </div>
        {/* right */}

        <div
          id="hostIcons"
          className={`flex space-x-4 ${
            searchInput.length >= 1 ? "text-gray-500" : "text-gray-50"
          }  items-center justify-end  opacity-90 `}
        >
          <p className="hidden md:inline cursor-pointer">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer" />
          <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>

        {searchInput && (
          <div
            id="#datePicker"
            className="datePicker flex flex-col justify-center bg-white p-2 mt-2 rounded-b-lg rounded-t-sm shadow-sm col-span-3 lg:w-auto mx-auto"
          >
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
              className="shadow-md dateRangePicker "
              color={"#3d91ff"}
            />

            <DateRange
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
              className="shadow-md dateRange "
            />

            <div className="flex items-center   bg-white border-b shadow-sm">
              <h2 className="text-2xl ml-2 flex-grow font-semibold">
                Number of Guests
              </h2>

              <UsersIcon className="h-5" />
              <input
                className="w-12 pl-2 text-lg outline-none text-red-400"
                type="number"
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
              />
            </div>
            <div className="flex bg-white pt-4  shadow-sm rounded-b-lg">
              <button
                onClick={resetInput}
                className="flex-grow rounded-lg bg-white hover:bg-red-400 hover:shadow-md p-2 mr-1 transiton duration-300 hover:text-white  text-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={search}
                className="flex-grow rounded-lg bg-white text-red-400 hover:shadow-md hover:bg-red-400 p-2 transiton duration-300 hover:text-white "
              >
                Search
              </button>
            </div>
          </div>
        )}
      </header>
    </Fade>
  );
}

export default Header;
