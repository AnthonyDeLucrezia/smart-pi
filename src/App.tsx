import React from "react";
import { AppLayout } from "./components/layout";
import { Dashboard } from "./modules/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Ledger } from "./modules/ledger";
import { Binance } from "./modules/binance";
import { URLPrefixes, RouteItem } from "./models/app.model";

export const routeItems: RouteItem[] = [
  { link: URLPrefixes.Home, component: <Dashboard /> },
  {
    link: URLPrefixes.Ledger,
    component: <Ledger />,
  },
  {
    link: URLPrefixes.Binance,
    component: <Binance />,
  },
];

export const App = () => (
  <Router>
    <Switch>
      <AppLayout>
        {routeItems.map((x) => {
          return <Route path={x.link.toString()}>{x.component}</Route>;
        })}
        <Route exact path="/">
          <Dashboard />
        </Route>
      </AppLayout>
    </Switch>
  </Router>
);
