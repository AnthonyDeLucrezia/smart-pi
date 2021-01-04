import { useQuery } from "react-query";
import { performReq } from "..";
import { CryptoQueriesKeys, CryptoResponse } from "~/models/api/crypto.model";

export const useCrypto = () =>
  useQuery(CryptoQueriesKeys.Btc, () =>
    performReq<CryptoResponse>("crypto", "GET", `/test`)
  );
