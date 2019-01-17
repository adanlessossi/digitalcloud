import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Articles from "./components/articles/Articles";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/services" exact component={Services} />
    <Route path="/articles" exact component={Articles} />
    <Route path="/about" exact component={About} />

    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;