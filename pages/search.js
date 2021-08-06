import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import { useEffect, useState } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import Image from "next/image";

function Search({ searchResults }) {
  const [offsetY, setOffsetY] = useState(0);

  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);


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
      </div>
      <main className="flex py-14 bg-gray-50">
        <section className="flex-grow  px-6 md:px-16">
          <p className="text-xs mb-7">
            <span className="bg-white shadow-sm p-3 rounded-md ">
              {" "}
              300+ stays -{" "}
              <span className="bg-red-400 text-white p-1 rounded-md mr-1">
                {formattedStartDate}{" "}
              </span>{" "}
              -{" "}
              <span className="bg-red-400 text-white ml-1 p-1 rounded-md">
                {formattedEndDate}
              </span>{" "}
              for {noOfGuests} guests
            </span>
          </p>
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
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={location}
                  img={img}
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
