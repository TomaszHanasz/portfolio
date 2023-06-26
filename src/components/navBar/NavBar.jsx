import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "./thlogowhite.png";
import { Link } from "react-router-dom";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#2C343F" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} style={{ width: 40 }} alt="logo" />
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "#2c343f" }}>
                <MenuItem>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>
              <Link
                to="/projects"
                style={{ textDecoration: "none", color: "#2c343f" }}
              >
                <MenuItem>
                  <Typography textAlign="center">Projects</Typography>
                </MenuItem>
              </Link>
              <Link
                to="/aboutme"
                style={{ textDecoration: "none", color: "#2c343f" }}
              >
                <MenuItem>
                  <Typography textAlign="center">About Me</Typography>
                </MenuItem>
              </Link>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "#2c343f" }}
              >
                <MenuItem>
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Home
              </Button>
            </Link>
            <Link to="/projects" style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Projects
              </Button>
            </Link>
            <Link to="/aboutme" style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                About me
              </Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Contact
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
