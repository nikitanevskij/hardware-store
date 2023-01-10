import React from 'react';
import './App.scss';
import { Layout, Menu } from 'antd';
import { BankOutlined } from '@ant-design/icons';
import { CardContent } from './components/Card/CardContent';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
const { Content, Header } = Layout;

export const App = () => {
  const { tools } = useSelector((state) => state.fetchToolsSlice);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ fontSize: '24px', color: 'white', fontWeight: '700' }}>HARDWARE STORE</h2>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={[
            { key: 'home', label: 'Главная' },
            { key: 'favorites', label: 'Избранное' },
            { key: 'joke', label: 'Alfa joke', icon: <BankOutlined /> },
          ]}
        />
      </Header>
      <Content>
        <div className="block_items">
          {tools.map((item, index) => (
            <CardContent items={item} key={index} />
          ))}
        </div>
      </Content>
    </Layout>
  );
};
