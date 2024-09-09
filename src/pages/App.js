import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function App() {
  return (
    <div>
      <div className="main-title">
        <h3>Bouncy Wheels </h3>
        <header>
          <NavBar />
        </header>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
