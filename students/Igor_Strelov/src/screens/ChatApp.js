import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import {MessList} from './MessageList';
const { Header, Sider } = Layout;

export const ChatApp = () => {

  return(
      <Layout style={{ height: '100%'}}>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1" selectedKeys={['1']}>Список чатов</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="1">Бот Владимир</Menu.Item>
                <Menu.Item key="2">Иван Иванов</Menu.Item>
                <Menu.Item key="3">Владимир Путин</Menu.Item>
                <Menu.Item key="4">КлабХаус</Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Секретный чат РФ</Breadcrumb.Item>
              <Breadcrumb.Item>Бот Владимир</Breadcrumb.Item>
            </Breadcrumb>
            <MessList/>
          </Layout>
        </Layout>
      </Layout>
  )
}
