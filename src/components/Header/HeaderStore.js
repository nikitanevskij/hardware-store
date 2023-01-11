import React from 'react';
import { Menu } from 'antd';
import { BankOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const HeaderStore = () => {
  return (
    <>
      <h2 style={{ fontSize: '24px', color: 'white', fontWeight: '700' }}>HARDWARE STORE</h2>

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={[
          { key: 'home', label: <Link to="/">Главная</Link> },
          { key: 'favorites', label: <Link to="/favorites">Избранное</Link> },
          { key: 'joke', label: 'Alfa joke', icon: <BankOutlined /> },
        ]}
      >
        <Menu.Item />
      </Menu>
    </>
  );
};
