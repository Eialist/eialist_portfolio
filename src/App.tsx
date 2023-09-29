// import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavComponent } from "./components/NavComponent";
import "./main.css";
import { HeaderComponent } from "./components/HeaderComponent";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <HeaderComponent />
      <div>
        <Outlet />
      </div>
      <div className="bottom-nav-placement">
        <NavComponent />
      </div>
    </div>
  );
}

export default App;


{/* <button onClick={() => setCount((count) => count +1)}>
        count is {count}
      </button> */}