import React from 'react';
import './HomeStore.scss';
import { Spin, Empty } from 'antd';
import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchTools } from '../../redux/fetchToolsSlice';

import { CardStore } from '../Card/CardStore';

export const HomeStore: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const { tools, loading } = useSelector((state: RootState) => state.fetchToolsSlice);
  const { favoriteTools } = useSelector((state: RootState) => state.fetchFavoritesSlice);

  const renderItems = location.pathname !== '/favorites' ? tools : favoriteTools;

  React.useEffect(() => {
    dispatch(fetchTools());
  }, [dispatch]);

  if (loading) {
    return <Spin tip="Загрузка..." size="large" className="center-alignment" />;
  }

  if (!renderItems.length) {
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        className="center-alignment"
        description={'Ничего не добавлено'}
      />
    );
  }
  return (
    <div className="block-home">
      {renderItems.map((item, index) => (
        <CardStore items={item} key={index} />
      ))}
    </div>
  );
};
