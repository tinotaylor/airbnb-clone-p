import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import { useEffect, useState } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";
import Map from "../components/Map";
import wait from "waait";

function Search({ searchResults }) {
  const [offsetY, setOffsetY] = useState(0);
  const [filterResults, setFilterResults] = useState("");
  const [buttonToggle, setButtonToggle] = useState(false);
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  console.log(buttonToggle);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

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
    <div id="searchPage" className="h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <div
        className="relative mt-[100px]  lg:mt-[40px] h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[450px] 2xl:h-[600px]"
        style={{ transform: `translateY(${offsetY * 3}px)` }}
      >
        <Image
          src="https://news.airbnb.com/wp-content/uploads/sites/4/2021/01/Option_4_RET_Crop.jpg?w=2048"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        {/* <div className="w-full absolute bottom-0 p-10 bg-gradient-to-t from-gray-50 "></div> */}
      </div>
      <main className=" py-14 flex bg-gray-50 relative">
        <section className="flex-grow  px-6 md:px-16">
          <div className="w-full flex items-center justify-between">
            <p className="text-xs mb-7">
              <span className="bg-white shadow-sm p-3 rounded-md ">
                300+ stays -
                <span className="bg-red-400 text-white p-1 rounded-md mx-1">
                  {formattedStartDate}
                </span>
                -
                <span className="bg-red-400 text-white mx-1 p-1 rounded-md">
                  {formattedEndDate}
                </span>
                for {noOfGuests} guests
              </span>
            </p>
            {/* <div
              id="button"
              onClick={() =>
                buttonToggle === false
                  ? setButtonToggle(true)
                  : setButtonToggle(false)
              }
              class={`relative  w-10 mr-2 align-middle   select-none transition duration-200 ease-in`}
            >
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                class={`toggle-checkbox absolute  transition-all duration-300 block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer`}
              />
              <label
                for="toggle"
                class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div> */}
          </div>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex  mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button bg-white">Cancellation Flexibility</p>
            <p className="button bg-white">Type of Place</p>
            <p className="button bg-white">Price</p>
            <p className="button bg-white">Rooms and Beds</p>
            <p className="button bg-white">More filters</p>
          </div>
          <div className=" flex w-auto bg-white p-5 rounded-md shadow-sm">
            <div className="flex items-center h-20 w-full px-2 rounded-md py-2 shadow-md ">
              <input
                className=" flex-grow outline-none ml-2 text-gray-500"
                type="text"
                value={filterResults}
                placeholder="Filter By Price"
                onChange={(e) => setFilterResults(e.target.value)}
              />
              <SearchIcon className="h-8 mr-5 cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col">
            {searchResults
              .filter((item) => {
                if (filterResults === "") {
                  return item;
                } else if (
                  item.price.toLowerCase().includes(filterResults.toLowerCase())
                ) {
                  return item;
                }
              })
              .map(
                ({
                  img,
                  img2,
                  img3,
                  location,
                  title,
                  description,
                  star,
                  price,
                  total,
                }) => (
                  <InfoCard
                    key={img}
                    img={img}
                    img2={img2}
                    img3={img3}
                    location={location}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                  />
                )
              )}
          </div>
        </section>

        <section
          id="map"
          className={`relative hidden xl:inline-flex  xl:min-w-[600px]  rounded-2xl`}
        >
          <Map searchResults={searchResults} filterResults={filterResults} />
          <div className=" h-full absolute left-0 transform pointer-events-none rotate-180 p-16 bg-gradient-to-l from-gray-50 "></div>
          <div className=" w-full absolute top-0 transform pointer-events-none  p-16 bg-gradient-to-b from-gray-50 "></div>
          <div className=" w-full absolute bottom-0 z-50 pointer-events-none transform  p-16 bg-gradient-to-t from-gray-50 "></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}

// https://api.npoint.io/30ef5bc0dbe6dd7018a4

// https://jsonkeeper.com/b/YBOA

// https://links.papareact.com/isz
