import { useState } from "react"
import ApplicationPass from "./ApplicationPass"

function App() {
  
  const [color, setColor] = useState("#A5B4FC");

  return (
    <div className="w-full h-screen duration-1000 flex justify-center items-center" style={{ backgroundColor: color }}>
      <ApplicationPass />

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              
              <button className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor : "red "}} onClick={() => setColor("red") }>Red</button>

              <button className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor : "green"}} onClick={() => setColor("green") }>Green</button>

              <button className="outline-none px-4 rounded-3xl text-black shadow-lg" style={{backgroundColor : "yellow"}} onClick={() => setColor("yellow") }>Yellow</button>

              <button className="outline-none px-4 rounded-3xl text-black shadow-lg" style={{backgroundColor : "pink"}} onClick={() => setColor("pink") }>Pink</button>

              <button className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor : "olive"}} onClick={() => setColor("olive") }>Olive</button>

              <button className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor : "purple"}} onClick={() => setColor("purple") }>Purple</button>
            </div>
        </div>
    </div>
  )
}

export default App
