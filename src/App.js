import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Typography, Layout, Space } from 'antd';

import './App.less';
const { Header, Footer, Sider, Content } = Layout;
const { Text } = Typography;

export default function App() {
  return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/grundlayout">Grundlayout</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/grundlayout">
              <Grundlayout />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Grundlayout() {
  return (
      <Layout>
        <Header>
          <Text type="warning">Ant Design (warning)</Text>
        </Header>
        <Layout>
          <Sider>
            <Text type="success">Ant Design (success)</Text>
          </Sider>
          <Content>
            <Space direction="vertical">
              <Text type="secondary">Ant Design (secondary)</Text>
            </Space>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
  );
}
