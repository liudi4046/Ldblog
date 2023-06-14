import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="p-7 border-b border-zinc-800 fixed top-0 w-full z-50 flex justify-between bg-zinc-950 backdrop-blur bg-opacity-50">
      <Link to="/" className="hover:text-zinc-400">
        Home
      </Link>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/contact" className="hover:text-zinc-400">
          Contact
        </Link>
        <Link to="/create-blog" className="hover:text-zinc-400">
          Create
        </Link>
        <Link to="/signup" className="hover:text-zinc-400">
          SignUp
        </Link>
      </div>
    </div>
  );
}
