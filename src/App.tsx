import { useEffect, useState } from "react";
import DocsContainer from "./components/DocsContainer";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import "./index.css";
function App() {
  const [color, setColor] = useState<
    { color: string; id: string; date: string; text: string }[]
  >(
    localStorage.getItem("docsMini")
      ? JSON.parse(localStorage.getItem("docsMini")!)
      : []
  );
  //? Local Storage
  useEffect(() => {
    localStorage.setItem("docsMini", JSON.stringify(color));
  }, [color]);
  const getColor = (S_Color: string) => {
    const shallowCopy: {
      color: string;
      id: string;
      date: string;
      text: string;
    }[] = [
      ...color,
      {
        color: S_Color,
        id: Date.now().toString(),
        text: "",
        date: new Date().toLocaleDateString("en-US", {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      },
    ];
    console.log(shallowCopy);
    setColor(shallowCopy.reverse());
  };

  //? Delete Handler
  function deleteHandler(id: string) {
    const updatedColors = color.filter((color) => color.id !== id);
    setColor(updatedColors);
  }

  //? Save Docs
  function saveDocs(id: string, text: string) {
    setColor(
      color.map((item) => {
        if (item.id == id) {
          return { ...item, text: text };
        }
        return item;
      })
    );
  }

  return (
    <div>
      <Navbar />
      <SideMenu getColor={getColor} />
      <DocsContainer
        Color={color}
        delHandler={deleteHandler}
        saveDocs={saveDocs}
      />
    </div>
  );
}

export default App;
