import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './components/Home'
import Other from './components/Other'

import Navvy from './components/Navvy'
class App extends React.Component {

  render() {


    return (
      <Router>
        <div style={{ display: "flex", flex: 1, flexDirection: 'column'}}>
          <Navvy />
          <Switch>
          <Route path="/hello">
              <Other />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

    );
  }
}
export default App