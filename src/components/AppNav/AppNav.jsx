//css
import './AppNav.css'

//components
import * as React from 'react';
import { useContext } from "react";
import { ContextUser } from '../../context/UserContext';
import { ContextProduct } from "../../context/ProductContext";
import { ContextFavourite } from '../../context/FavouriteContext';

import { Link, NavLink } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AppButton from '../AppButton/AppButton';
import AppIconButton from '../AppIconButton/AppIconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppImg from '../AppImg/AppImg';
// import MoreIcon from '@mui/icons-material/MoreVert';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.3),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '14ch',
      },
    },
    [theme.breakpoints.up('md')]: {
      width: '8ch',
      '&:focus': {
        width: '10ch',
      },
    },
    [theme.breakpoints.up('lg')]: {
      width: '16ch',
      '&:focus': {
        width: '18ch',
      },
    },
  },
}));

// export component
export default function AppNav() {
  const { user, logOut } = useContext(ContextUser);
  const { cartItems,
    setCartItems,
    cartAmount,
    setCartAmount,
    productsCount,
    setProductsCount, } = useContext(ContextProduct);

  const { favourites, addFavourites } = useContext(ContextFavourite);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // componentes de menu "usuario" en XS 
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* Aquí se indica la info dentro del botón "USUARIO" */}
      {user ? (

        <Typography
          color="secondary"
          component={Link}
          to="/user-profile"
          noWrap
          align='center'
          sx={{ display: 'block', my: 0, px: 0, textDecoration: "none", }}
        >
          <MenuItem
            sx={{ display: 'block', py: 2, textDecoration: "none", }}
            // onClick={{handleMenuClose, handleMobileMenuClose}}
            onClick={() => {
              handleMenuClose();
              handleMobileMenuClose();
            }}
          > VER PERFIL </MenuItem>
        </Typography>
      ) : null}

      {user ? (
        <Typography
          color="secondary"
          component={Link}
          to="/login"
          noWrap
          align='center'
          sx={{ display: 'block', my: 0, px: 0, textDecoration: "none", }}
          onClick={() => {
            handleMenuClose();
            handleMobileMenuClose();
            logOut();
          }}
        >
          <MenuItem
            sx={{ py: 2, textDecoration: "none", }}
          // onClick={handleMenuClose}
          > CERRAR SESIÓN </MenuItem>
        </Typography>
      ) : null}

      {!user ? (
        <Typography
          color="secondary"
          component={Link}
          to="/register"
          noWrap
          align='center'
          sx={{ display: 'block', my: 0, px: 0, textDecoration: "none", }}
          onClick={() => {
            handleMenuClose();
            handleMobileMenuClose();
          }}
        >
          <MenuItem
            sx={{ py: 2, textDecoration: "none", }}
            onClick={handleMenuClose}
          > REGISTRARSE </MenuItem>
        </Typography>
      ) : null}

      {!user ? (
        <Typography
          color="secondary"
          component={Link}
          to="/login"
          noWrap
          align='center'
          sx={{ display: 'block', my: 0, px: 0, textDecoration: "none", }}
          onClick={() => {
            handleMenuClose();
            handleMobileMenuClose();
            logOut();
          }}
        >
          <MenuItem
            sx={{ py: 2, textDecoration: "none", }}
          // onClick={handleMenuClose}
          > INICIAR SESIÓN </MenuItem>
        </Typography>
      ) : null}
    </Menu>
  );

  //componentes dentro de menu hamburguesa
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Typography
        color="secondary"
        component={Link}
        to="/gallery-boardgames"
        noWrap
        align='center'
        sx={{ display: 'block', my: 0, px: 0, textDecoration: "none", }}
      >
        <MenuItem
          sx={{ display: 'block', py: 2, textDecoration: "none", }}
          onClick={handleMobileMenuClose}
        > JUEGOS DE MESA </MenuItem>
      </Typography>

      {user ? (
        <Typography
          color="secondary"
          component={Link}
          to="/user-dashboard"
          noWrap
          align='center'
          sx={{ display: 'block', my: 0, px: 0, textDecoration: "none", }}
        >
          <MenuItem
            sx={{ display: 'block', py: 2, textDecoration: "none", }}
            onClick={handleMobileMenuClose}
          > DASHBOARD </MenuItem>
        </Typography>
      ) : null}

      <Typography
        color="secondary"
        component={Link}
        to="/user-cart"
        noWrap
        align='center'
        sx={{ display: 'block', my: 0, px: 0, textDecoration: "none", }}
      >
        <MenuItem
          sx={{ py: 0.75, textDecoration: "none", }}
          onClick={handleMobileMenuClose}
        >
          <IconButton
            size="large"
            aria-label="show 1 new notifications"
            aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            color="secondary"
          ><Badge
            badgeContent={productsCount}
            // max={9}
            color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          CARRITO
        </MenuItem>
      </Typography>

      {user ? (
        <Typography
          color="secondary"
          component={Link}
          to="/user-favourites"
          noWrap
          align='center'
          sx={{ display: 'block', my: 0, px: 0, textDecoration: "none", }}
        >
          <MenuItem
            sx={{ py: 0.75, textDecoration: "none", }}
            onClick={handleMobileMenuClose}
          >
            <IconButton
              size="large"
              aria-label="show 1 new notifications"
              aria-controls={menuId}
              aria-haspopup="true"
              color="secondary">
              <Badge badgeContent={favourites.length} max={9} color="primary">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            FAVORITOS
          </MenuItem>
        </Typography>
      ) : null}

      <Typography
        color="primary"
        noWrap
        align='center'
        sx={{ display: 'block', my: 0, px: 0, textDecoration: "none", }}
      >
        <MenuItem
          onClick={handleProfileMenuOpen}
          sx={{ py: 0.75, textDecoration: "none", }}>
          <IconButton
            size="large"
            aria-label="show 1 new notifications"
            aria-controls={menuId}
            aria-haspopup="true"
            color="primary">
            <AccountCircle />
          </IconButton>
          USUARIO <ArrowDropDownIcon />
        </MenuItem>
      </Typography>
    </Menu>
  );

  //componentes de Navbar
  return (
    <Box
      // sx={{ flexGrow: 1 }}
      className="AppBar-style">
      <hr className="hrTop-style" />
      <AppBar position="static" className="AppBar-style">
        <Toolbar
          sx={{ mx: { xs: "0px", sm: "10px", md: "20px", lg: "60px" } }}
        >
          <AppImg to="/" src="\imgs\Logo_02.png" width="200px" alt="Logo_AppNav" px="10px" display="flex" component={Link} imgClass="logoNavbar-style" />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <AppButton text="JUEGOS DE MESA"
              to="/gallery-boardgames"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')} />
            {/* <AppButton text="ACCESORIOS"
              to="/gallery-accessories"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')} /> */}
          </Box>
          <Search
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

            <StyledInputBase
              sx={{
              }}
              placeholder="Buscar…"
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {user ? (
              <>
                {/* <AppButton text="PRODUCT DETAILS" to="/product-details" /> */}

                <AppButton text="DASHBOARD" to="/user-dashboard" />

                <AppIconButton icon={<FavoriteIcon />} to="/user-favourites" count={favourites.length} component={NavLink} className={({ isActive }) => (isActive ? 'active' : 'inactive')} />
              </>
            ) : null}

            <AppIconButton icon={<ShoppingCartIcon />} to="/user-cart" count={productsCount}
              // maxCount={9}
              component={NavLink} />
            <AppIconButton icon={<AccountCircle />} count={0}
              onClick={handleProfileMenuOpen} />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <AppIconButton icon={<MenuIcon />} xsDisplay={'flex'} smDisplay={'flex'}
              onClick={handleMobileMenuOpen}
            />
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {/* <hr className="hrTop-style"></hr> */}
    </Box>
  );
} 