import { useState } from "react"


function App() {
let [color , setColor] = useState("red")

  return (
    <>
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"
     style={{backgroundColor:color}}
     >
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl text-white">
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg">RED</button>
     <button>BLUE</button>
     <button>GRAY</button>
     <button>GREEN</button>
     <button>PINK</button>
     <button>VIOLET</button>
     <button>GOLDENROD</button>
      </div>
 
     </div>
    </>
  )
}

export default App
