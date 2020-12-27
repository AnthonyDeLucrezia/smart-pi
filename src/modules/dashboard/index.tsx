import React from "react";
import { Row, Col } from "antd";
import {
  CardPrice,
  CardPriceProps,
} from "./../../components/statistic/cardPrice";

export const Dashboard = () => {
  const cryptoArr: CardPriceProps[] = [
    {
      title: "BTC",
      currentValue: "25555 $",
      priceChange: 10,
    },
    {
      title: "ETH",
      currentValue: "625 $",
      priceChange: 2.6,
    },
    {
      title: "XRP",
      currentValue: "0.96 $",
      priceChange: 41,
    },
    {
      title: "DOT",
      currentValue: "526 $",
      priceChange: -15,
    },
  ];
  return (
    <div className="dashboard-container">
      <Row gutter={16}>
        {cryptoArr.map((x) => {
          return (
            <Col span={6}>
              <CardPrice
                title={x.title}
                currentValue={x.currentValue}
                priceChange={x.priceChange}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
