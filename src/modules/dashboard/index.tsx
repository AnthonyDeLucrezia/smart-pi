import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { CardPrice } from "~/components/statistic/cardPrice";
import { useCrypto } from "~/api/queries/crypto.queries";
import {
  CryptoQuotesLatest,
  CryptoTokens,
  Currencies,
} from "~/models/modules/crypto.model";

export const Dashboard = () => {
  const {
    data: cryptoData,
    status: cryptoStatus,
    error: cryptoError,
  } = useCrypto({
    cryptoList: [
      CryptoTokens.Bitcoin,
      CryptoTokens.Ethereum,
      CryptoTokens.Polkadot,
      CryptoTokens.Serum,
    ],
    currency: Currencies.Euro,
  });

  const [lastCryptoQuotes, setLastCryptoQuotes] = useState<
    CryptoQuotesLatest[]
  >([]);

  const futuresPrice = 1471.49;

  useEffect(() => {
    if (cryptoStatus == "success" && cryptoData) {
      const newArr: CryptoQuotesLatest[] = [];
      cryptoData.data.forEach((crypto) => {
        switch (crypto.symbol) {
          case CryptoTokens.Bitcoin:
            newArr.push({ ...crypto, inWallet: 0.01167 });
            break;
          case CryptoTokens.Ethereum:
            newArr.push({ ...crypto, inWallet: 1.9322 });
            break;
          case CryptoTokens.Serum:
            newArr.push({ ...crypto, inWallet: 617 });
            break;
          case CryptoTokens.Polkadot:
            newArr.push({ ...crypto, inWallet: 152.527 });
            break;
          default:
            newArr.push({ ...crypto, inWallet: 0 });
        }
      });
      setLastCryptoQuotes(newArr);
    }
  }, [cryptoData, cryptoStatus, cryptoError]);

  const calculateTotal = () => {
    let total = futuresPrice;
    for (const item of lastCryptoQuotes) {
      total = total + item.inWallet * item.price;
    }
    return total;
  };

  return (
    <div className="dashboard-container">
      <Row gutter={[16, 16]}>
        {lastCryptoQuotes.map((x) => {
          return (
            <Col span={6}>
              <CardPrice
                cardTitle={`${x.name} (${x.symbol})`}
                percent_change_1h={x.percent_change_1h}
                percent_change_7d={x.percent_change_7d}
                percent_change_24h={x.percent_change_24h}
                price={x.price}
                contentHeader={`${x.inWallet} ${x.symbol}`}
                contentHFooter={`${(x.inWallet * x.price).toFixed(3)} ${
                  Currencies.Euro
                }`}
              />
            </Col>
          );
        })}
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <CardPrice cardTitle={"Futures"} price={futuresPrice} />
        </Col>
        <Col span={6}>
          <CardPrice cardTitle={"Total"} price={calculateTotal()} />
        </Col>
      </Row>
    </div>
  );
};
