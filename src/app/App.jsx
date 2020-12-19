import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home/Home";
import Place from "./pages/place/Place";
import NotFound from "./pages/not-found/NotFound";
export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/place" exact component={Place} />
          <Route path="/not-found" exact component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
