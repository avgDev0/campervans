import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import RentalDetail from "./RentalDetail";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rental/:rentalId" exact component={RentalDetail} />
    </Switch>
  );
}
