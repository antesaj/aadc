import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Header from "./components/Header";
import About from "./components/About";
import ReadingPage from "./components/ReadingPage";
import Container from "@material-ui/core/Container";
import blue from "@material-ui/core/colors/blue";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Image from "./assets/bg_cascades.jpg";

const useStyles = makeStyles(
  // Styles
  theme => ({
    root: {
      padding: theme.spacing(3, 2),
      backgroundImage: `url(${Image})`
    },
    container: {
      display: "flex",
      justifyContent: "center",
      padding: 10,
      backgroundColor: blue[50]
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
      <BrowserRouter>
        <Paper className={classes.root} square={false}>
          <Header />
          <Paper className={classes.container} square={false}>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/reading">
                <ReadingPage />
              </Route>
            </Switch>
          </Paper>
        </Paper>
      </BrowserRouter>
    </div>
  );
}

export default App;
