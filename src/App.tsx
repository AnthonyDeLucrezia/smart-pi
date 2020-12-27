import React from "react";
import { AppLayout } from "./components/layout";
import { Dashboard } from "./modules/dashboard";

export const App = () => (
  <AppLayout>
    <Dashboard />
  </AppLayout>
);
