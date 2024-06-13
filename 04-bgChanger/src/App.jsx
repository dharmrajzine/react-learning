import { useState } from "react";

function App() {
  const [color, setColor] = useState("green");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-non px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >Purple
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-non px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "pink" }}
            > Pink
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            > Green
            </button>
            <button
              onClick={() => setColor("gray")}
              className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "gray" }}
            > Gray
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "olive" }}
            > Olive
            </button>
            <button
              onClick={() => setColor("levender")}
              className="outline-non px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "levender" }}
            > Levender
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            > Black
            </button>
            <button
              onClick={() => setColor("white")}
              className="outline-non px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "white" }}
            > White
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
