import "./Docs.css";
import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { IoIosSave } from "react-icons/io";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";
import { motion } from "motion/react";

function Docs({
  data,
  delHandler,
  saveDocs,
  containerRef,
}: {
  data: { color: string; id: string; date: string; text: string };
  delHandler: (id: string) => void;
  saveDocs: (id: string, text: string) => void;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  //? Taking Data from Text Area
  const [text, setText] = useState<string>(data.text ? data.text : "");
  const [showContent, setShowContent] = useState(false);
  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.1 }}
      dragConstraints={containerRef}
      id={data.id}
      className="w-[300px] h-[400px] rounded-lg flex flex-col"
      style={{ backgroundColor: data.color }}
    >
      <textarea
        name="textArea"
        id="textArea"
        value={text}
        placeholder="Enter your text here ..."
        onChange={(e) => {
          setText(e.target.value);
        }}
        className={`w-full ${
          showContent && "hidden"
        } h-[360px]  bg-transparent resize-none outline-none p-3 text-xl font-semibold text-zinc-600`}
      ></textarea>
      <div
        className={`content ${
          showContent !== true && "hidden"
        }  w-full h-[360px] text-zinc-600 bg-transparent resize-none text-[18px] outline-none p-3 font-semibold`}
      >
        {" "}
        {text}
      </div>

      <footer className="w-full bg-transparent h-[40px] flex justify-between items-center px-3 text-zinc-700">
        <div className="text-zinc-600 dateTime w-max flex items-center h-full gap-4 bg-transparent text-[17px] font-bold">
          {data.date}
        </div>
        <div className=" delIcon flex items-center justify-center gap-1 bg-transparent">
          <MdDelete
            size={20}
            className=" bg-transparent"
            onClick={() => {
              delHandler(data.id);
              toast.error("Your Note has been deleted", {
                position: "bottom-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              });
            }}
          />
          <BiSolidEdit
            size={20}
            className="bg-transparent"
            onClick={() => {
              setShowContent(!showContent);
              toast.success("Your Note has been deleted", {
                position: "bottom-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              });
            }}
          />
          <IoIosSave
            color="red"
            size={20}
            className="bg-transparent"
            onClick={() => {
              setShowContent(!showContent);
              saveDocs(data.id, text);
              toast.info("Your Note has been saved", {
                position: "bottom-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              });
            }}
          />
        </div>
      </footer>
    </motion.div>
  );
}

export default Docs;
