import React from 'react';
import { useSelector } from 'react-redux';
import { CardStore } from '../Card/CardStore';
import { Spin } from 'antd';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { fetchTools } from '../../redux/fetchToolsSlice';

export const HomeStore = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { tools, loading } = useSelector((state) => state.fetchToolsSlice);
  const { favoriteTools } = useSelector((state) => state.fetchFavoritesSlice);

  React.useEffect(() => {
    dispatch(fetchTools());
  }, [dispatch]);

  const renderItems = location.pathname !== '/favorites' ? tools : favoriteTools;

  if (loading) {
    return <Spin size="large" />;
  }
  return (
    <div className="block_items">
      {renderItems.map((item, index) => (
        <CardStore items={item} key={index} />
      ))}
    </div>
  );
};
