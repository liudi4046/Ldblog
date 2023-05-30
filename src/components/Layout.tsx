import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <br></br>
      <div className="px-3">
        <Outlet />
      </div>
    </div>
  );
}
