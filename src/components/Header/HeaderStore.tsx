import React from 'react';
import { Menu } from 'antd';
import { BankOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { fetchTools } from '../../redux/fetchToolsSlice';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';

export const HeaderStore: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [selectMenu, setSelectMenu] = React.useState(['home']);

  const menuItems: MenuProps['items'] = [
    { key: 'home', label: <Link to="/">Главная</Link> },
    { key: 'favorites', label: <Link to="/favorites">Избранное</Link> },
    { key: 'joke', label: 'Alfa joke', icon: <BankOutlined /> },
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    setSelectMenu(e.keyPath);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h2
        style={{ fontSize: '24px', color: 'white', fontWeight: '700', cursor: 'pointer' }}
        onClick={() => {
          navigate('/');
          setSelectMenu(['home']);
          dispatch(fetchTools());
        }}
      >
        HARDWARE STORE
      </h2>

      <Menu
        theme="dark"
        mode="horizontal"
        items={menuItems}
        selectedKeys={selectMenu}
        onClick={onClick}
      />
    </div>
  );
};
