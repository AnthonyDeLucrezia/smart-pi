import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { CardPrice, CardPriceProps } from "~/components/statistic/cardPrice";
import { useCrypto } from "~/api/queries/crypto.queries";

export const Dashboard = () => {
  const {
    data: cryptoData,
    status: cryptoStatus,
    error: cryptoError,
  } = useCrypto();

  useEffect(() => {
    console.log(cryptoData, cryptoStatus, cryptoError);
  }, [cryptoData, cryptoStatus, cryptoError]);

  const cryptoArr: CardPriceProps[] = [
    {
      cardTitle: "BTC",
      statiticTitle: "0.0015BTC",
      value: 25555,
      priceChange: 10,
    },
    {
      cardTitle: "BTC",
      statiticTitle: "0.0015BTC",
      value: 25555,
      priceChange: 10,
    },
    {
      cardTitle: "BTC",
      statiticTitle: "0.0015BTC",
      value: 25555,
      priceChange: 10,
    },
    {
      cardTitle: "BTC",
      statiticTitle: "0.0015BTC",
      value: 25555,
      priceChange: -10,
    },
  ];
  return (
    <div className="dashboard-container">
      <Row gutter={16}>
        {cryptoArr.map((x) => {
          return (
            <Col span={5}>
              <CardPrice
                cardTitle={x.cardTitle}
                statiticTitle={x.statiticTitle}
                priceChange={x.priceChange}
                value={x.value}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
