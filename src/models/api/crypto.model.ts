import { ReactText } from "react";
import { CryptoQuotesLatest } from "../modules/crypto.model";

export enum CryptoQueriesKeys {
  QuotesLatest = "quotesLatest",
}

export type CryptoQuotesLatestRequest = {
  cryptoList: ReactText[];
  currency: ReactText;
};

export type CryptoQuotesLatestResponse = {
  data: CryptoQuotesLatest[];
};
