import React, { ReactText } from "react";
import { Card } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import "./index.scss";

export interface CardPriceProps {
  title: ReactText;
  currentValue: ReactText;
  priceChange: number;
}

export const CardPrice = (props: CardPriceProps) => {
  const { title, priceChange, currentValue } = props;

  return (
    <Card className="card-price" title={title}>
      <span>
        {currentValue}
        {Math.sign(priceChange) > 0 ? (
          <ArrowUpOutlined />
        ) : (
          <ArrowDownOutlined />
        )}
      </span>
    </Card>
  );
};
