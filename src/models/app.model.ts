import { ReactText } from "react";

export enum URLPrefixes {
  Home = "/home",
  Temperature = "/temperature",
  Binance = "/crypto-binance",
  Ledger = "/crypto-ledger",
}

export enum MenuKeys {
  Home = "home",
  Temperature = "temperature",
  Binance = "crypto-binance",
  Ledger = "crypto-ledger",
}

export type RouteItem = {
  link: ReactText;
  component: JSX.Element;
};
