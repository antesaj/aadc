import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(
  theme => ({
    root: {
      padding: theme.spacing(3, 2)
    }
  }),
  // Options
  {
    name: "app_component"
  }
);

function App() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <h1>AADC</h1>
      </Paper>
    </div>
  );
}

export default App;
