import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import LargeCard from "./LargeCard";


function Banner(props) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div className="relative  h-[500px] sm:h-[550px] lg:h-[700px] xl:h-[700px] 2xl:h-[800px] overflow-hidden">
      <div
        className="relative h-[500px] sm:h-[550px] lg:h-[700px] xl:h-[700px] 2xl:h-[800px]"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <Image
          src="/banner.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div  className="absolute top-[35%] md:top-[35%] lg:top-[35%] xl:top-[40%] w-full text-center">
        <motion.div
          style={{ perspective: 2000, x, y, rotateX, rotateY, z: 100, cursor:'grab' }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          className="w-full"
        >
          <div className="flex flex-col justify-center place-items-center rounded-lg   md:w-[800px] md:h-[200px] mx-auto">
            {/* <p className="text-sm sm:text-lg">Not sure where to go ? perfect</p>
            <button className="text-purple-500 bg-white px-10 py-4 w-[180px] shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
              I'm flexible
            </button> */}
            <motion.div
              style={{ perspective: 2000, x, y, rotateX, rotateY, z: 100 }}
              drag
              dragElastic={0.16}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0, }}
              whileTap={{ cursor: "grabbing" }}
              className="w-[500px] h-[250px] md:w-[500px] md:h-[300px]  lg:w-[700px] lg:h-[500px] xl:h-96 xl:w-full  bg-white bg-opacity-80 rounded-2xl"
            >
              <motion.div
                style={{ perspective: 2000, x, y, rotateX, rotateY, z: 100, cursor:'grab' }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                className="w-full h-full"

              >
                <div  className="relative w-[500px] h-[250px] md:h-[300px] lg:w-full lg:h-[350px] xl:h-96 ">
                  <Image
                    src="https://media.giphy.com/media/WuXMlNW5ii2cmRSzyF/giphy.gif"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-2xl pointer-events-none shadow-lg"
                  />
                </div>
              </motion.div>
              <motion.div
                style={{ x, y, rotateX, rotateY, z: 2000, cursor:'grab' }}
                drag
                dragElastic={0.10}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                className="absolute top-[12px] md:top-[20%] lg:top-20 xl:top-32 left-12 bg-white p-5 rounded-md shadow-2xl z-40 "
              >
                <h3 className="text-4xl font-semibold mb-3 w-64 ">
                  Want to go on an adventure?
                </h3>
                <p className="-ml-5 ">Go on now. be spontaneous!</p>
                <button className="text-sm text-white hover:bg-red-400 shadow-sm hover:shadow-md transform transition-all duration-300 shadow-xl -ml-8 bg-gray-900 px-4 py-2 rounded-lg mt-5">
                  Take me to nirvana baby!
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        {/* <div className="static">
          <div
            style={{ cursor: "grab" }}
            className="flex w-[500px] h-[285px] flex flex-col rounded-md shadow-sm bg-white text-gray-300 relative"
          >
            Yooooo
            <div className=" absolute top-0 left-0 w-full h-full overflow-hidden rounded-t-2xl">
              <div className="absolute w-[350px] h-[350px] -top-16 -right-44 z-10 bg-gray-100  rounded-full"></div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Banner;
