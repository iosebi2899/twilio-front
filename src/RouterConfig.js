import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WelcomeScreen from "./WelcomeScreen";
import ChatScreen from "./ChatScreen";
import Channels from "./Channels";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="channels/:id" component={ChatScreen} />
        <Route path="/channels" component={Channels} />
        <Route path="/" component={WelcomeScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;