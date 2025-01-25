import { useState } from "react"
import ColorButton from "./components/ColorButton"

function App() {
  const [color, setColor] = useState("olive") 
const colors = ["red", "blue", "green", "yellow", "purple", "pink", "olive", "cyan", "orange", "brown"]
  return (
    <div style={{backgroundColor: color, height: "100vh"}}>
   <div className="fixed bottom-0 inset-x-0 px-4 py-4 bg-white shadow-md">
  <div className="flex justify-center gap-3">
  <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
          {colors.map((color) => (
            <ColorButton key={color} color={color} onClick={() => setColor(color)} />
          ))}
          </div>

  </div>
</div>

    </div>
  )
}

export default App