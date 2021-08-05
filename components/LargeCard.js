import Image from "next/image";
import { motion, useTransform, useMotionValue } from "framer-motion";

function LargeCard({ img, title, description, buttonText }) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  return (
    <section className="relative py-16 cursor-pointer">
      <motion.div
          style={{ perspective: 2000, x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          className="w-full"
        >
      <motion.div
          style={{ perspective: 2000, x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          className="w-full"
        >

      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl pointer-events-none"
        />
      </div>
     </motion.div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64 ">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
        </motion.div>
    </section>
  );
}

export default LargeCard;
