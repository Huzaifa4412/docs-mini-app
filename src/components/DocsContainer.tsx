import { useRef } from "react";
import Docs from "./Docs";

function DocsContainer({
  Color,
  delHandler,
  saveDocs,
}: {
  Color: { color: string; id: string; date: string; text: string }[];
  delHandler: (id: string) => void;
  saveDocs: (id: string, text: string) => void;
}) {
  const containerRef: React.RefObject<HTMLDivElement> = useRef(null);

  return (
    <div
      ref={containerRef}
      className="ml-[100px] min-h-[calc(100vh-100px)] overflow-x-hidden border-t-slate-200 border-t py-5 px-4 flex flex-wrap gap-5"
    >
      {Color.map((color) => {
        return (
          <Docs
            key={color.id}
            data={color}
            delHandler={delHandler}
            containerRef={containerRef}
            saveDocs={saveDocs}
          />
        );
      })}
    </div>
  );
}

export default DocsContainer;
