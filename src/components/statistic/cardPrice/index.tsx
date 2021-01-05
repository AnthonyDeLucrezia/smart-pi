import React, { ReactText } from "react";
import { Card, Statistic } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  EuroCircleOutlined,
} from "@ant-design/icons";
import "./index.scss";

export interface CardPriceProps {
  cardTitle: ReactText;
  price: number;
  percent_change_7d?: number;
  percent_change_24h?: number;
  percent_change_1h?: number;
  contentHeader?: ReactText;
  contentHFooter?: ReactText;
}

export const CardPrice = (props: CardPriceProps) => {
  const {
    cardTitle,
    price,
    percent_change_7d,
    percent_change_24h,
    percent_change_1h,
    contentHeader,
    contentHFooter,
  } = props;

  const renderPercentChange = (title: ReactText, priceChange: number) => {
    return (
      <div className="card-statistic-perc-change">
        <div>
          <span>{title}</span>
        </div>
        <div>
          <span className="card-statistic-perc">
            {priceChange.toFixed(2)} %
          </span>
          {Math.sign(priceChange) > 0 ? (
            <ArrowUpOutlined className="card-statistic-green" />
          ) : (
            <ArrowDownOutlined className="card-statistic-red" />
          )}
        </div>
      </div>
    );
  };

  const displayActions =
    percent_change_7d | percent_change_24h | percent_change_1h;

  return (
    <Card
      className="card-statistic"
      title={cardTitle}
      actions={
        displayActions
          ? [
              renderPercentChange("7D", percent_change_7d),
              renderPercentChange("24H", percent_change_24h),
              renderPercentChange("1H", percent_change_1h),
            ]
          : undefined
      }
    >
      <Statistic
        title={contentHeader ? contentHeader : undefined}
        value={price.toFixed(4)}
        suffix={<EuroCircleOutlined />}
      />
      {contentHFooter && <div className="wallet-amount">{contentHFooter}</div>}
    </Card>
  );
};
