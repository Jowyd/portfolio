import { useEffect } from "react";

const useMouseMove = (callback: (event: MouseEvent) => void) => {
  const handleMouseMove = (event: MouseEvent) => {
    callback(event);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default useMouseMove;
