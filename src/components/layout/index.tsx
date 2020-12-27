import React from "react";
import { Layout } from "antd";
import "./index.scss";

const { Sider, Content } = Layout;

export const AppLayout: React.FunctionComponent = (props) => (
  <Layout className="app-layout">
    <Sider className="app-layout-sider" collapsed={true}></Sider>
    <Layout>
      <Content className="app-layout-content">{props.children}</Content>
    </Layout>
  </Layout>
);
