import { ReactText } from "react";

export enum CryptoTokens {
  Bitcoin = "BTC",
  Ethereum = "ETH",
  Serum = "SRM",
  Polkadot = "DOT",
}

export enum Currencies {
  Euro = "EUR",
  Dollar = "USD",
}

export type CryptoQuotesLatest = {
  name: ReactText;
  symbol: ReactText;
  price: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  inWallet?: number;
};
