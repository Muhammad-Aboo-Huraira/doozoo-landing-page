import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Toolbar>
          <img src={Logo} alt="Logo" style={{ height: 20, marginRight: 10 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Typography sx={{ ml: 2, mr: 2, color: "black" }}>
            Have account already?{" "}
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Sign in
            </Link>
          </Typography>
          <Typography sx={{ ml: 2, color: "orange" }}>
            <ScrollLink
              to="joinWaitlist"
              smooth={true}
              duration={500}
              style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}
            >
              Join the waitlist
            </ScrollLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
