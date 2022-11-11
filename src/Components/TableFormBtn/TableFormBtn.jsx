import React from "react";
import { useSpring, animated } from "react-spring";

export default function TableFormBtn({ toggled, handleToggle }) {
  const { y } = useSpring({
    y: toggled ? 180 : 0,
  });

  const handleClick = () => {
    handleToggle(!toggled);
  };
  return (
    <button
      onClick={handleClick}
      className="flex justify-center gap-2 w-[650px] bg-green-500 py-1 font-semibold text-white hover:text-gray-500 rounded-b-md active:shadow-lg active:text-gray-700"
    >
      Add Contact
      <animated.p
        style={{
          transform: y.interpolate((y) => `rotateX(${y}deg)`),
        }}
      >
        ▼
      </animated.p>
    </button>
  );
}
