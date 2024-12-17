import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
function SideMenu({ getColor }: { getColor: (color: string) => void }) {
  const [toggle, setToggle] = useState<boolean>(true);

  const colors = [
    "#f6bd60",
    "#ffc8dd",
    "#bde0fe",
    "#cdb4db",
    "#87c38f",
    "#f0ead2",
    "#b7b7a4",
    "#b9faf8",
  ];

  return (
    <div className="h-screen w-[100px]  fixed top-0 left-0 flex flex-col gap-32 items-center pt-32 border-r border-r-slate-200">
      <div className="addIcon">
        <IoMdAdd
          size={40}
          className="hover:rotate-180 duration-300"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      <div
        className={`colors-container flex flex-col gap-5 duration-700 ${
          toggle && "hidden"
        }`}
      >
        {colors.map((color) => {
          return (
            <div
              key={color}
              className="color-box w-[30px] h-[30px] rounded-full"
              style={{ backgroundColor: color }}
              onClick={() => getColor(color)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default SideMenu;
