import React from "react";
import { Switch, Route } from "react-router-dom";
import ThemeProvider from "../components/ThemeProvider";
import Home from "./Home";
import RentalDetail from "./RentalDetail";

export default function App() {
  return (
    <ThemeProvider>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rental/:rentalId" exact component={RentalDetail} />
      </Switch>
    </ThemeProvider>
  );
}
