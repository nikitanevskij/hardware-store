import React from 'react';
import { Menu } from 'antd';
import { BankOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { fetchTools } from '../../redux/fetchToolsSlice';
import { useNavigate } from 'react-router-dom';
export const HeaderStore = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectMenu, setSelectMenu] = React.useState(['home']);

  const menuItems = [
    { key: 'home', label: <Link to="/">Главная</Link> },
    { key: 'favorites', label: <Link to="/favorites">Избранное</Link> },
    { key: 'joke', label: 'Alfa joke', icon: <BankOutlined /> },
  ];
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h2
        style={{ fontSize: '24px', color: 'white', fontWeight: '700', cursor: 'pointer' }}
        onClick={() => {
          dispatch(fetchTools());
          navigate('/');
          setSelectMenu(['home']);
        }}
      >
        HARDWARE STORE
      </h2>

      <Menu
        theme="dark"
        mode="horizontal"
        items={menuItems}
        selectedKeys={selectMenu}
        onClick={(item) => setSelectMenu(item.keyPath)}
      />
    </div>
  );
};
