import React, { ReactText } from "react";
import { Statistic, Card } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import "./index.scss";

export interface CardPriceProps {
  title: ReactText;
  currentValue: ReactText;
  priceChange: number;
}

export const CardPrice = (props: CardPriceProps) => {
  const { title, priceChange, currentValue } = props;

  const color = Math.sign(priceChange) > 0 ? "#3f8600" : "#cf1322";

  return (
    <Card className="card-price" title={title}>
      <Statistic
        title={currentValue}
        value={priceChange}
        precision={2}
        valueStyle={{ color: color }}
        prefix={
          Math.sign(priceChange) > 0 ? (
            <ArrowUpOutlined />
          ) : (
            <ArrowDownOutlined />
          )
        }
        suffix="%"
      />
    </Card>
  );
};
