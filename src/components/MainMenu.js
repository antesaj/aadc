import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  link: {
    margin: theme.spacing(1)
  }
}));

const MainMenu = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleOpen}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/" className={classes.root}>
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/about">About Me</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="http://www.thedevstop.com">Blog</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/reading">What I'm Reading</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MainMenu;
