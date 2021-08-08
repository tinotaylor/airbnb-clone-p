import Image from "next/image";
import { motion, useTransform, useMotionValue } from "framer-motion";

function MediumCard({ img, title }) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-linear">
      <div className="relative h-80 w-80 shadow-md hover:shadow-lg rounded-xl transition duration-300">
        <Image src={img} layout="fill" className="rounded-xl "/>
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
