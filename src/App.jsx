import React from 'react';
import './App.scss';
import { Layout } from 'antd';
import { HeaderStore } from './components/Header/HeaderStore';
import { HomeStore } from './components/Home/HomeStore';
import { Routes, Route } from 'react-router-dom';

const { Content, Header } = Layout;

export const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ paddingInline: 0 }}>
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
