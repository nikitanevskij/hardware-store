import React from 'react';
import './App.scss';
import { Layout } from 'antd';
import { CardContent } from './components/Card/CardContent';

const { Content, Header } = Layout;

export const App: React.FC = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Header>Header</Header>
    <Content>
      <div className="block_items">
        <CardContent />
      </div>
    </Content>
  </Layout>
);
