import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
function InfoCard({ img, location, title, description, star, price, total }) {
  const [fillHeart, setFillHeart] = useState("");

  return (
    <Fade duration={3000}>
      <div className="my-2 ">
        <div
          style={{ transition: "all .5s ease" }}
          className="flex flex-col md:flex-row  p-3 cursor-pointer bg-white shadow-md hover:shadow-lg pr-3transition transform duration-300 ease-out md:hover:ml-5 lg:hover:ml-8 hover:scale-[1.02] group rounded-2xl"
        >
          {/* <div className="w-0 pt-5 mr-2 bg-black md:group-hover:w-[1px] transition-all duration-900 ease-in"></div> */}
          <div
            style={{ backfaceVisibility: "none" }}
            className="relative min-h-[20rem] rounded-2xl shadow-sm hover:shadow-md  md:h-60 md:w-80 lg:w-80 xl:w-80 hover:opacity-95 flex-shrink-0 overflow-hidden "
          >
            <Image
              src={img}
              layout="fill"
              objectFit="cover"
              style={{ transition: "all 3s ease" }}
              className=" scale-[1.2] group-hover:scale-[1]  rounded-2xl transition transform duration-300 ease-in"
            />
            <HeartIcon
              onClick={() =>
                fillHeart === ""
                  ? setFillHeart("text-red-400 fill-current")
                  : setFillHeart("")
              }
              className={`heart absolute ${fillHeart} right-2 top-2 text-white opacity-90 h-7 cursor-pointer md:hidden`}
            />
          </div>

          <div className="flex flex-col flex-grow pt-2 md:pl-5">
            <div className="flex justify-between">
              <p>{location}</p>
              <HeartIcon
                onClick={() =>
                  fillHeart === ""
                    ? setFillHeart("text-red-400 fill-current")
                    : setFillHeart("")
                }
                className={`heart h-7 ${fillHeart} cursor-pointer hidden md:block`}
              />
            </div>
            <h4 className="text-xl">{title}</h4>
            <div className="border-b w-10 pt-2"></div>
            <p className="pt-2 text-sm text-gray-500 flex-grow">
              {description}
            </p>

            <div className="flex justify-between items-end pt-5">
              <p className="flex items-center">
                <StarIcon className="h-5 text-red-400" />
                {star}
              </p>
              <div>
                <p className="text-lg font-semibold pb-2 lg:text-2xl">
                  {price}
                </p>
                <p className="text-right font-extralight">{total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default InfoCard;
