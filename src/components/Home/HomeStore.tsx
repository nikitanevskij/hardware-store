import React from 'react';
import { useSelector } from 'react-redux';
import { CardStore } from '../Card/CardStore';
import { Spin } from 'antd';
import { useLocation } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchTools } from '../../redux/fetchToolsSlice';
import { Empty } from 'antd';

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
    return (
      <Spin
        tip="Loading..."
        size="large"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          flexDirection: 'column',
          rowGap: '15px',
        }}
      />
    );
  }

  if (!renderItems.length) {
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          flexDirection: 'column',
          rowGap: '15px',
        }}
        description={'Ничего не добавлено'}
      />
    );
  }
  return (
    <div className="block_items">
      {renderItems.map((item, index) => (
        <CardStore items={item} key={index} />
      ))}
    </div>
  );
};
