import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Header from "./components/Header";

const useStyles = makeStyles(
  // Styles
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
        <Header />
      </Paper>
    </div>
  );
}

export default App;
