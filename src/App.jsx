import { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import Table from "./Components/Table";
import TableForm from "./Components/TableForm";
import TableFormBtn from "./Components/TableFormBtn";

export default function App() {
  const [isToggled, setToggle] = useState(false);

  const menuAppear = useSpring({
    transform: isToggled ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
    opacity: isToggled ? 1 : 0,
  });

  return (
    <section className="bg-slate-200 h-screen w-screen relative ">
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2  w-[650px]">
        <h1 className="text-3xl font-bold mb-2 text-center">Contacts</h1>
        <Table />
        <TableFormBtn toggled={isToggled} handleToggle={setToggle} />
        <animated.div style={menuAppear}>
          {isToggled ? <TableForm /> : null}
        </animated.div>
      </div>
    </section>
  );
}
