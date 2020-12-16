import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Typography, Layout, Space, Checkbox, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import './App.less';
const { Header, Footer, Sider, Content } = Layout;
const { Text } = Typography;
const { SubMenu } = Menu;


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
          <Text type="warning">Ant </Text>
        </Header>
        <Layout>
          <Sider>
          <Menu
       
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
                <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                  <Menu.ItemGroup key="g1" title="Item 1">
                    <Menu.Item key="1"><Link to="/about">About</Link></Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup key="g2" title="Item 2">
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                  </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </Menu>
          </Sider>
          <Content>
            <Space direction="vertical">
              <Text type="secondary">Ant </Text>
            </Space>
          </Content>
        </Layout>
        <Footer><Checkbox defaultChecked  /></Footer>
      </Layout>
  );
}
