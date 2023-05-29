import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="bg-stone-950 min-h-screen">
      <div className="w-4/5 mx-auto bg-slate-200 min-h-screen">
        <Navbar />
        <br></br>
        <div className="p-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
