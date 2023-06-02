import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />

      <div className="px-3 mt-1">
        <Outlet />
      </div>
    </div>
  );
}
