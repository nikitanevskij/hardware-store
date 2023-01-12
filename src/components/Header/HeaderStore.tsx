import React from 'react';
import './HeaderStore.scss';
import { Menu, MenuProps } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../redux/store';
import { fetchTools } from '../../redux/fetchToolsSlice';
import { fetchProducts } from '../../redux/fetchProductBankSlice';
import { resetFavorite } from '../../redux/fetchFavoritesSlice';

type THeaderStoreProps = {
  toggle: Boolean;
};

export const HeaderStore: React.FC<THeaderStoreProps> = ({ toggle }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const selectDispatch = toggle ? fetchProducts() : fetchTools();
  const headerLogo = toggle ? 'BANK' : 'HARDWARE STORE';

  const [selectKeyMenu, setSelectKeyMenu] = React.useState(['home']);

  const menuItems: MenuProps['items'] = [
    { key: 'home', label: <Link to="/hardware-store">Главная</Link> },
    { key: 'favorites', label: <Link to="/favorites">Избранное</Link> },
  ];

  const onChangeKeyMenu: MenuProps['onClick'] = (e) => {
    setSelectKeyMenu(e.keyPath);
  };

  const onRefresh = () => {
    navigate('/hardware-store');
    setSelectKeyMenu(['home']);
    dispatch(resetFavorite());
    dispatch(selectDispatch);
  };

  return (
    <div className="header-row">
      <h2 className="header-logo" onClick={onRefresh}>
        {headerLogo}
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
