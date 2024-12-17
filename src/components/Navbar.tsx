import { RiMoonClearFill } from "react-icons/ri";
import { MdWbSunny } from "react-icons/md";
import { useState } from "react";
function Navbar() {
  const [toggle, setToggle] = useState<boolean>(true);

  return (
    <nav
      className="flex items-center justify-between p-4 h-[100px] ml-[100px] font-mono font-bold"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      <div className="logo text-5xl" style={{ color: "var(--heading-color)" }}>
        Keep Clone | React
      </div>
      <div className="toggleMode">
        {toggle ? (
          <RiMoonClearFill
            size={45}
            onClick={() => {
              setToggle(!toggle);
              document.documentElement.setAttribute("data-scheme", "dark");
            }}
          />
        ) : (
          <MdWbSunny
            size={45}
            onClick={() => {
              setToggle(!toggle);
              document.documentElement.removeAttribute("data-scheme");
            }}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
