import { AppBar, CssBaseline, Toolbar } from "@mui/material";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {" "}
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={1}
        sx={{
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <Toolbar
          sx={{
            display: "felx",
            justifyContent: "space-between",
          }}
        >
          <Link to={"/"}>Home</Link>
          <div className="flex gap-5">
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/create-blog"}>Create</Link>
            <Link to={"/signup"}>SignUp</Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
