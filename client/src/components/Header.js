import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MainMenu from "./MainMenu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  theme => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  }),
  {
    name: "header_component"
  }
);

const Header = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" square={false}>
        <Toolbar>
          <MainMenu />
          <Typography variant="h6" className={classes.title}>
            Andrew Antes - Personal Website
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
