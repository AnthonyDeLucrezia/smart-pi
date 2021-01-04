import React, { ReactText } from "react";
import { Card, Statistic } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  EuroCircleOutlined,
} from "@ant-design/icons";
import "./index.scss";
import Meta from "antd/lib/card/Meta";

export interface CardPriceProps {
  cardTitle: ReactText;
  statiticTitle: ReactText;
  value: number;
  priceChange: number;
}

export const CardPrice = (props: CardPriceProps) => {
  const { cardTitle, priceChange, statiticTitle, value } = props;

  return (
    <Card
      className="card-statistic"
      title={cardTitle}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Statistic
        title={statiticTitle}
        value={value}
        suffix={<EuroCircleOutlined />}
      />
      <Meta
        className="card-statistic-meta"
        description={
          <span>
            <span className="card-statistic-perc">{priceChange} %</span>
            {Math.sign(priceChange) > 0 ? (
              <ArrowUpOutlined className="card-statistic-green" />
            ) : (
              <ArrowDownOutlined className="card-statistic-red" />
            )}
          </span>
        }
      />
    </Card>
  );
};
