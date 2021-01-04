import React, { useState } from "react";
import { Layout } from "antd";
import "./index.scss";
import { AppMenu } from "./../menu";

const { Sider, Content } = Layout;

export const AppLayout: React.FunctionComponent = (props) => {
  const [siderCollapsed, setSiderCollapsed] = useState(true);

  const toggle = (collapsed: boolean) => {
    setSiderCollapsed(collapsed);
  };

  return (
    <Layout className="app-layout">
      <Sider
        className="app-layout-sider"
        collapsible
        collapsed={siderCollapsed}
        onCollapse={toggle}
      >
        <AppMenu />
      </Sider>
      <Layout>
        <Content className="app-layout-content">{props.children}</Content>
      </Layout>
    </Layout>
  );
};
