import React from 'react';
import './HomeStore.scss';
import { Spin, Empty } from 'antd';
import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchTools } from '../../redux/fetchToolsSlice';
import { fetchProducts } from '../../redux/fetchProductBankSlice';

import { CardStore } from '../Card/CardStore';

type THomeStoreProps = {
  toggle: Boolean;
};

export const HomeStore: React.FC<THomeStoreProps> = ({ toggle }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const selectDispatch = toggle ? fetchProducts() : fetchTools();

  React.useEffect(() => {
    dispatch(selectDispatch);
  }, [dispatch, toggle]);

  const { tools, loadingTools } = useSelector((state: RootState) => state.fetchToolsSlice);

  const { products, loadingProducts } = useSelector(
    (state: RootState) => state.fetchProductBankSlice,
  );

  const selectItems = toggle ? products : tools;
  const selectLoad = toggle ? loadingProducts : loadingTools;

  const { favoriteTools } = useSelector((state: RootState) => state.fetchFavoritesSlice);

  const renderItems = location.pathname !== '/favorites' ? selectItems : favoriteTools;

  if (selectLoad) {
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
        <CardStore items={item} key={index} toggle={toggle} />
      ))}
    </div>
  );
};
