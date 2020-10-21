import React, { useContext } from 'react';
import clsx from 'clsx';
import {
  AppBar,
  Avatar,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Menu as MenuIcon,
  ArrowDropDownCircle as ArrowDropDownCircleIcon
} from '@material-ui/icons';
import defaultAvatar from '../../assets/images/avatar.png';
import { topBarStyle } from './styles';
import { AuthContext } from '../../context/auth/context';

const useStyles = makeStyles(topBarStyle);

const TopBar = props => {
  const { authDispatch } = useContext(AuthContext);
  const { user, onClickMenu = () => {}, drawerOpen } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    authDispatch({type: 'SIGN_OUT'});
  };

  const menuId = 'primary-account-settings';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, { [classes.appBarShift]: drawerOpen })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={onClickMenu}
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            Demo Project
          </Typography>
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <Typography variant="subtitle1">
              {user && user.first_name}
            </Typography>
            <IconButton
              edge="end"
              aria-label="Profile of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar
                alt="Profile logo"
                className={classes.smallAvatar}
                src={user ? user.picture : defaultAvatar}
              />
            </IconButton>
            <Divider orientation="vertical" flexItem variant="middle" />
            <IconButton
              edge="end"
              aria-label="Setting of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <ArrowDropDownCircleIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </React.Fragment>
  );
};

export default TopBar;
