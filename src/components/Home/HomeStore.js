import React from 'react';
import { useSelector } from 'react-redux';
import { CardStore } from '../Card/CardStore';

import { useLocation } from 'react-router-dom';

export const HomeStore = () => {
  const location = useLocation();
  const { tools } = useSelector((state) => state.fetchToolsSlice);
  const { favoriteTools } = useSelector((state) => state.fetchFavoritesSlice);

  const renderItems = location.pathname !== '/favorites' ? tools : favoriteTools;

  return (
    <div className="block_items">
      {renderItems.map((item, index) => (
        <CardStore items={item} key={index} />
      ))}
    </div>
  );
};
