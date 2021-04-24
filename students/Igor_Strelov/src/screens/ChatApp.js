import React, { useContext, useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Link, Route, Switch, useParams} from 'react-router-dom';
import {AppContext} from '../context/app/AppContext';
import {MessList} from './MessageList';
import {Profile} from './Profile';
const { Header, Sider } = Layout;

export const ChatApp = () => {

  const { chat_list, addChat } = useContext(AppContext);

  useEffect(() => {
    console.log(chat_list);
  }, [chat_list])
  const addChatHandler = () => {
    console.log('press');
    const newChatId = Object.keys(chat_list).length;
    addChat({title: `Чат ${newChatId + 1}`})
  }
  return(
      <Router>
        <Layout style={{ height: '100%'}}>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1" selectedKeys={['1']}><Link to={'/chat/'}>Список чатов</Link></Menu.Item>
              <Menu.Item key="2" selectedKeys={['1']}><Link to={'/profile'}>Профиль</Link></Menu.Item>
            </Menu>
            <div className={'button_header'} onClick={() => addChatHandler()}>Добавить чат</div>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
              >
                {Object.keys(chat_list).map(key => {
                  return <Menu.Item key={`${key + 1}`}><Link to={`/chat/${key}`}>{chat_list[key].title}</Link></Menu.Item>
                })}
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
              {/*  <Breadcrumb.Item>{chat_list[id].title}</Breadcrumb.Item>*/}
              {/*</Breadcrumb>*/}
              <Switch>
                <Route exact path={'/'} render={ () => <MessList/>} />
                <Route exact path={'/chat/:id'} render={ () => <MessList/>} />
                <Route exact path={'/profile'} render={ () => <Profile/>} />
              </Switch>
            </Layout>
          </Layout>
        </Layout>
      </Router>
  )
}
