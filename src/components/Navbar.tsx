import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
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
        <Toolbar>
          <Link to={"/"}>Home</Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
