import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../../pages/About";
import Partners from "../../pages/Partners";
import Coupons from "../../pages/Coupons";
import AirTickets from "../../pages/AirTickets";
import Impressions from "../../pages/Impressions";
import RailwayTickets from "../../pages/RailwayTickets";
import Hotels from "../../pages/Hotels";
import MobileApp from "../../pages/MobileApp";
import Lottery from "../../pages/Lottery";
import Charity from "../../pages/Charity";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/coupons">
        <Coupons />
      </Route>
      <Route path="/impressions">
        <Impressions />
      </Route>
      <Route path="/air-tickets">
        <AirTickets />
      </Route>
      <Route path="/railway">
        <RailwayTickets />
      </Route>
      <Route path="/hotels">
        <Hotels />
      </Route>
      <Route path="/mobile-app">
        <MobileApp />
      </Route>
      <Route path="/lottery">
        <Lottery />
      </Route>
      <Route path="/charity">
        <Charity />
      </Route>
      <Route path="/">
        <Partners />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  )
}

export default AppRouter;