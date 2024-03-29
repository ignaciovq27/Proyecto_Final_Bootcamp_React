//css
import './AppNav.css'

//components
import * as React from 'react';
import { useContext } from "react";
import { ContextUser } from '../../context/UserContext';
import { ContextProduct } from "../../context/ProductContext";
import { ContextFavourite } from '../../context/FavouriteContext';

import { Link, NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AppButton from '../AppButton/AppButton';
import AppIconButton from '../AppIconButton/AppIconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppImg from '../AppImg/AppImg';
import { Avatar } from '@mui/material';

// export component
export default function AppNav() {
  const { user, logOut } = useContext(ContextUser);
  const { productsCount, } = useContext(ContextProduct);

  const { favourites } = useContext(ContextFavourite);

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

      <Typography
        color="secondary"
        component={Link}
        to="/gallery-accessories"
        noWrap
        align='center'
        sx={{ display: 'block', my: 0, px: 0, textDecoration: "none", }}
      >
        <MenuItem
          sx={{ display: 'block', py: 2, textDecoration: "none", }}
          onClick={handleMobileMenuClose}
        > ACCESORIOS </MenuItem>
      </Typography>

      <Typography
        color="secondary"
        component={Link}
        to="/gallery-miniatures"
        noWrap
        align='center'
        sx={{ display: 'block', my: 0, px: 0, textDecoration: "none", }}
      >
        <MenuItem
          sx={{ display: 'block', py: 2, textDecoration: "none", }}
          onClick={handleMobileMenuClose}
        > MINIATURAS </MenuItem>
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
            {user ? <Avatar alt="userProfileImg_00" src={user.profileImg}
              sx={{ width: "auto", height: 25, display: "flex", p: 0, m: 0, textAlign: "center", justifyContent: "center", alignItems: "center", alignContent: "center" }} />
              : <AccountCircle />}
          </IconButton>
          USUARIO <ArrowDropDownIcon />
        </MenuItem>
      </Typography>
    </Menu>
  );

  //componentes de Navbar
  return (
    <Box
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
            <AppButton text="ACCESORIOS"
              to="/gallery-accessories"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')} />
            <AppButton text="MINIATURAS"
              to="/gallery-miniatures"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {user ? (
              <>
                <AppButton text="DASHBOARD" to="/user-dashboard" />
                <AppIconButton icon={<FavoriteIcon />} to="/user-favourites" count={favourites.length} component={NavLink} className={({ isActive }) => (isActive ? 'active' : 'inactive')} />
              </>
            ) : null}

            <AppIconButton icon={<ShoppingCartIcon />} to="/user-cart" count={productsCount}
              // maxCount={9}
              component={NavLink} />
            <AppIconButton icon={user ? <Avatar alt="userProfileImg_00" src={user.profileImg}
              sx={{ width: "auto", height: 25, display: "flex", p: 0, m: 0, textAlign: "center", justifyContent: "center", alignItems: "center", alignContent: "center" }} />
              : <AccountCircle />} count={0}
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
    </Box>
  );
} 