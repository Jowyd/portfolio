import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export interface WorkLinkProps {
  title: string;
  tag: string[];
  imageUrl: string;
  link: string;
}

const WorkLink = ({ title, link, imageUrl }: WorkLinkProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const previous = useRef({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const deltaX = useMotionValue(0);
  const deltaY = useMotionValue(0);

  // Simulated deformation via skew and scale
  const skewX = useTransform(deltaX, [-100, 100], [-50, 50]);
  const skewY = useTransform(deltaY, [-100, 100], [-50, 50]);
  const scale = useTransform(deltaX, [-200, 200], [0.95, 1.1]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;

    deltaX.set(clientX - previous.current.x);
    deltaY.set(clientY - previous.current.y);

    mouseX.set(clientX);
    mouseY.set(clientY);

    previous.current = { x: clientX, y: clientY };
  };

  return (
    <div
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link
        to={link}
        className="flex flex-col items-center border-b border-black transition-colors hover:text-gray-500 px-8 py-6"
      >
        <h3 className="text-7xl font-khteka transition-transform duration-300 hover:scale-105">
          {title}
        </h3>
      </Link>

      <AnimatePresence>
        {isHovering && (
          <motion.img
            src={imageUrl}
            alt={title}
            className="pointer-events-none fixed top-0 left-0 w-64 h-40 object-cover z-50"
            style={{
              x: smoothX,
              y: smoothY,
              scale,
              skewX,
              skewY,
              translateX: "10%",
              translateY: "10%",
            }}
            initial={{
              opacity: 1,
              scale: 0,
            }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 1, scale: 0, transition: { duration: 0.1 } }}
            transition={{ duration: 0.1 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default WorkLink;
