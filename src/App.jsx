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
      <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <HeaderStore />
      </Header>
      <Content>
        <Routes>
          <Route path="/" element={<HomeStore />} />
          <Route path="/favorites" element={<HomeStore />} />
        </Routes>
      </Content>
    </Layout>
  );
};
