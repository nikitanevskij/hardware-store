import React from 'react';
import './App.scss';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';

import { HomeStore } from './components/Home/HomeStore';
import { HeaderStore } from './components/Header/HeaderStore';

const { Content, Header } = Layout;

export const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Header className="header">
        <div className="container">
          <HeaderStore />
        </div>
      </Header>
      <Content>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeStore />} />
            <Route path="/favorites" element={<HomeStore />} />
          </Routes>
        </div>
      </Content>
    </Layout>
  );
};
