import React from "react";
import { Menu } from "antd";
import {
  DashboardOutlined,
  PieChartOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { URLPrefixes, MenuKeys } from "./../../models/app.model";

const { SubMenu } = Menu;

export const AppMenu = () => {
  const history = useHistory();

  const onNavItemClick = (link: string) => {
    history.push(link);
  };
  return (
    <Menu theme="dark" defaultSelectedKeys={[MenuKeys.Home]} mode="inline">
      <Menu.Item
        key={MenuKeys.Home}
        icon={<PieChartOutlined />}
        onClick={() => onNavItemClick(URLPrefixes.Home)}
      >
        Dashboard
      </Menu.Item>
      <Menu.Item key="temperture" icon={<DashboardOutlined />}>
        Temperture
      </Menu.Item>
      <SubMenu key="crypto" icon={<DollarOutlined />} title="Crypto">
        <Menu.Item
          key={MenuKeys.Binance}
          onClick={() => onNavItemClick(URLPrefixes.Binance)}
        >
          Binance
        </Menu.Item>
        <Menu.Item
          key={MenuKeys.Ledger}
          onClick={() => onNavItemClick(URLPrefixes.Ledger)}
        >
          Ledger
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};
