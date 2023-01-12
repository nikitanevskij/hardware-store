import React from 'react';
import './App.scss';
import { Layout, Switch } from 'antd';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useAppDispatch } from './redux/store';
import { resetFavorite } from './redux/fetchFavoritesSlice';
import { HomeStore } from './components/Home/HomeStore';
import { HeaderStore } from './components/Header/HeaderStore';

const { Content, Header } = Layout;

export const App: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [toggle, setToggle] = React.useState(false);

  const changeTypeCard = (e: boolean) => {
    dispatch(resetFavorite());
    setToggle(e);
  };

  return (
    <Layout className="layout">
      <Header className="header">
        <div className="container">
          <HeaderStore toggle={toggle} />
        </div>
      </Header>
      <Content>
        <div className="container">
          <div className="switch-wrapper">
            <Switch
              checked={toggle}
              checkedChildren="BANK"
              unCheckedChildren="STORE"
              onChange={changeTypeCard}
              disabled={location.pathname !== '/hardware-store'}
            />
          </div>
          <Routes>
            <Route path="/hardware-store" element={<HomeStore toggle={toggle} />} />
            <Route path="/favorites" element={<HomeStore toggle={toggle} />} />
          </Routes>
        </div>
      </Content>
    </Layout>
  );
};
