import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <div className="max-w-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
