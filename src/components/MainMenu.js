import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const MainMenu = props => {
  return (
    <div>
      <Menu id="simple-menu">
        <MenuItem>About Me</MenuItem>
        <MenuItem>Blog</MenuItem>
      </Menu>
    </div>
  );
};

export default MainMenu;
