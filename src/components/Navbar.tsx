import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="p-7 border-b border-zinc-800 fixed top-0 w-full z-50 flex justify-between bg-zinc-950 backdrop-blur bg-opacity-50">
      <Link to="/" style={{ textDecoration: "none" }}>
        Home
      </Link>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          Contact
        </Link>
        <Link to="/create-blog" style={{ textDecoration: "none" }}>
          Create
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          SignUp
        </Link>
      </div>
    </div>
  );
}
