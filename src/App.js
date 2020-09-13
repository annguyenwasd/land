import React from "react";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout } from "antd";
import styled from "styled-components";
import PageA from "./pages/SideA";

function App() {
  return (
    <ResponsiveLayout>
      <Layout.Content>
        <PageA />
      </Layout.Content>
    </ResponsiveLayout>
  );
}

const ResponsiveLayout = styled(Layout)`
  background-color: #fff;
  margin: 0 16px;
  padding: 16px 0;

  @media screen and (min-width: 769px) {
    max-width: 1024px;
    margin: 0 auto;
    padding: 70px 0;
  }
`;

export default App;
