import * as React from "react";
import { useLocation, Link } from "react-router-dom";
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

const pages = [
  { name: "home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<HTMLElement | null>(
    null
  );
  const location = useLocation(); // Get the current route

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="header" sx={{ background: "none", boxShadow: "none" }} position="absolute">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="static/logo.png" alt="" />

          {/* Mobile View */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: { xs: "flex-start", md: "center" },
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-app-bar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-app-bar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    to={page.path}
                    sx={{
                      textDecoration:
                        location.pathname === page.path ? "underline" : "none",
                      fontWeight: 500,
                      color: "inherit",
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop View */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignSelf: 'flex-start',
              gap: "1rem",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                disableRipple
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "1.3rem",
                }}
              >
                <Typography
                  className={
                    location.pathname === page.path
                      ? "underline active"
                      : "underline"
                  }
                  sx={{
                    fontWeight: 500,
                    textDecoration: "none",
                    fontSize: "1.3rem",
                  }}
                >
                  {page.name}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
