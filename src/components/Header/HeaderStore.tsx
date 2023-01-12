import React from 'react';
import './HeaderStore.scss';
import { Menu, MenuProps } from 'antd';
import { BankOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../redux/store';
import { fetchTools } from '../../redux/fetchToolsSlice';

export const HeaderStore: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [selectKeyMenu, setSelectKeyMenu] = React.useState(['home']);

  const menuItems: MenuProps['items'] = [
    { key: 'home', label: <Link to="/">Главная</Link> },
    { key: 'favorites', label: <Link to="/favorites">Избранное</Link> },
    { key: 'joke', label: 'Alfa joke', icon: <BankOutlined /> },
  ];

  const onChangeKeyMenu: MenuProps['onClick'] = (e) => {
    setSelectKeyMenu(e.keyPath);
  };

  const onRefresh = () => {
    navigate('/');
    setSelectKeyMenu(['home']);
    dispatch(fetchTools());
  };

  return (
    <div className="header-row">
      <h2 className="header-logo" onClick={onRefresh}>
        HARDWARE STORE
      </h2>

      <Menu
        theme="dark"
        mode="horizontal"
        items={menuItems}
        onClick={onChangeKeyMenu}
        className="header-nav-list"
        selectedKeys={selectKeyMenu}
      />
    </div>
  );
};
