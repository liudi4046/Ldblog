import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="text-white bg-zinc-950 min-h-screen">
      <Navbar />

      <div className="px-3 mt-1 pt-24 bg-zinc-950">
        <Outlet />
      </div>
    </div>
  );
}
