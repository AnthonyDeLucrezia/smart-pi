import { useQuery } from "react-query";
import { performReq } from "..";
import {
  CryptoQueriesKeys,
  CryptoQuotesLatestRequest,
  CryptoQuotesLatestResponse,
} from "~/models/api/crypto.model";

export const useCrypto = (request: CryptoQuotesLatestRequest) =>
  useQuery([CryptoQueriesKeys.QuotesLatest, request], () =>
    performReq<CryptoQuotesLatestResponse>(
      "raspberryPi",
      "GET",
      `cryptocurrency/quotes/latest?cryptoList=${request.cryptoList}&currency=${request.currency}`
    )
  );
