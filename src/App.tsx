import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { NavComponent } from './components/NavComponent'
import './main.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ height: "100vh", width: "100vw", margin: "0", padding: 0, background: "pink", position: "relative"}}>
      <div>
        <Outlet />
      </div>
        <button onClick={() => setCount((count) => count * 5)}>
          count is {count}
        </button>
        <div style={{ position: "fixed", bottom: 0, width: "100%"}}>
        <NavComponent />
        </div>
    </div>
    
  )
}

export default App
