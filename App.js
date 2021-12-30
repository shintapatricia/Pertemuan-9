import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Guests from "./Guests";
import AddGuests from "./AddGuests";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact children={<Guests />} />
          <Route path="/add" exact children={<AddGuests />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
