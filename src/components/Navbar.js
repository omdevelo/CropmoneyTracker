import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
//import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

//const pages = ["CROPS", "ARTICLES", "ABOUTUS"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ bgcolor: "#018786", position: "fixed" }}>
      <Container maxWidth="m">
        <Toolbar disableGutters>
          <Avatar
            variant={"rounded"}
            alt="The image"
            src="https://previews.123rf.com/images/3rus/3rus2006/3rus200601530/149237319-farm-fresh-of-vector-emblems-and-stickers-farming-and-agriculture-organic-food-locally-grown-design-.jpg"
            style={{
              width: 35,
              height: 35,
            }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              
                <MenuItem component="a" href="/crops" key="CROPS" onClick={handleCloseNavMenu}>
                  
                  <Typography textAlign="center">CROPS</Typography>
                </MenuItem>
                <MenuItem component="a" href="/articles" key="ARTICLES" onClick={handleCloseNavMenu}>
                  
                  <Typography textAlign="center">ARTICLES</Typography>
                </MenuItem>
                <MenuItem component="a" href="/articles" key="ABOUTUS" onClick={handleCloseNavMenu}>
                  
                  <Typography textAlign="center">ABOUTUS</Typography>
                </MenuItem>
            
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", mr: 0 } }}>
          <Link
                key="CROPS"
                to="/crops"
                onClick={handleCloseNavMenu}
                style={{ textDecoration: "none", marginRight:"10px", marginTop:"7px",marginLeft:"5px", color: "black" }}
              >
                CROPS
              </Link><Link
                key="ARTICLES"
                to="/articles"
                onClick={handleCloseNavMenu}
                style={{ textDecoration: "none", marginRight:"10px", marginTop:"7px", color: "black" }}
              >
                ARTICLES
              </Link>
              
                
              <Link
                key="ABOUTUS"
                to="/aboutus"
                onClick={handleCloseNavMenu}
                style={{ textDecoration: "none", marginRight:"10px", marginTop:"7px", color: "black" }}
              >
                ABOUTUS
              </Link>
            
          </Box>
          <Link
            to="/signup"
            style={{ textDecoration: "none", marginRight:"10px", color: "black" }}
          >
            SIGNUP
          </Link>
          <Link to="/login" style={{ textDecoration: "none",color: "black" }}>
            LOGIN
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
