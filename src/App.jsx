import { useState } from "react"


function App() {
let [color , setColor] = useState("red")

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <h1 className="text-7xl font-bold shadow-black text-center">BACKGROUND CHANGER</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl shadow-zinc-400">
          <button
          //! USING setColor to change the color of the background
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("lightgreen")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "lightgreen"}}
          >LightGreen</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
           <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}
          >Pink</button>
           <button
          onClick={() => setColor("crimson")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "crimson"}}
          >Crimson</button>
           <button
          onClick={() => setColor("blueviolet")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blueviolet"}}
          >BlueViolet</button>
           <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black" , color : "white"}}
          >Black</button>
           <button
          onClick={() => setColor("goldenrod")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "goldenrod"}}
          >GoldenRod</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
