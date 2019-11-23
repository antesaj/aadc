import React from "react";
import Header from "./components/Header";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import { NONAME } from "dns";

function App() {

  return (
    <div>
      <HashRouter>
          <Header />
            <Switch>
              <Route path="/about">
                {/* Component here */}
              </Route>
              <Route path="/reading">
                {/* Component here */}
              </Route>
            </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
