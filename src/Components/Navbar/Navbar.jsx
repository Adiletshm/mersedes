import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { Link, NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LiveSearch from "../LiveSearch/LiveSearch";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";

import Logo from "./Logo/Logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { authContext } from "../../context/AuthContextProvider";
import "./Navbar.css";
import { favoriteContext } from "../../context/FavoriteContextProvider";

function Navbar() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { basketCount } = React.useContext(CartContext);
  const { favoriteCount } = React.useContext(favoriteContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, handleLogout } = React.useContext(authContext);
  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const menuId = "primary-search-account-menu";

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // const Search = styled("div")(({ theme }) => ({
  //   position: "relative",
  //   borderRadius: "5px",
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   "&:hover": {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   marginLeft: 0,
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(1),
  //     width: "auto",
  //   },
  // }));

  // const SearchIconWrapper = styled("div")(({ theme }) => ({
  //   padding: theme.spacing(0, 2),
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // }));

  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: "inherit",
  //   "& .MuiInputBase-input": {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create("width"),
  //     width: "100%",
  //     [theme.breakpoints.up("sm")]: {
  //       width: "15ch",
  //       "&:focus": {
  //         width: "33ch",
  //       },
  //     },
  //   },
  // }));

  return (
    <AppBar position="static" sx={{ bgcolor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { md: "flex" },
              width: 120,
              height: 80,
            }}
            className="logo-icon">
            <img className="logo" src={Logo} />
          </Typography>
          <LiveSearch />
          <Box
            sx={{
              width: "30%",
              display: "flex",
              justifyContent: "space-around",
            }}
            className="menu-item">
            {user.email === "admin.admin@mail.ru" ? (
              <NavLink to="/add" style={{ color: "white" }}>
                Добавление
              </NavLink>
            ) : null}
            {location.pathname === "/list" ? (
              <span style={{ cursor: "pointer", color: "white" }}>
                Автомобили
              </span>
            ) : (
              <NavLink to="/list" style={{ color: "white" }}>
                Автомобили
              </NavLink>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ color: "white" }}>
              <NavLink to="/basket" style={{ color: "white" }}>
                <Badge badgeContent={basketCount} color="error">
                  {/* <WorkOutlineIcon /> */}
                  <ShoppingCartIcon />
                </Badge>
              </NavLink>
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <NavLink to="/favorite" style={{ color: "white" }}>
                <Badge badgeContent={favoriteCount} color="error">
                  <FavoriteBorderIcon />
                </Badge>
              </NavLink>
            </IconButton>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ color: "white" }}>
                <PersonOutlineIcon />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              <Typography sx={{ textAlign: "center" }}>Mersedes me</Typography>
              <br />
              <Link to="/auth">
                <Typography sx={{ color: "black", textAlign: "center" }}>
                  Войти
                </Typography>
              </Link>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link to="/">
                  {user.email ? user.email : <span>Войдите MB-me</span>}
                </Link>
              </MenuItem>
              <Link onClick={handleLogout}>
                <Typography sx={{ color: "black", textAlign: "center" }}>
                  Выйти
                </Typography>
              </Link>
            </Menu>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"></IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
