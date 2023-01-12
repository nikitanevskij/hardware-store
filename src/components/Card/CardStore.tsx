import React from 'react';
import './CardStore.scss';
import { useLocation } from 'react-router-dom';
import { Card, Image, message, Popconfirm, Tooltip } from 'antd';
import { HeartFilled, DeleteOutlined, HeartOutlined, ShoppingOutlined } from '@ant-design/icons';

import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { deleteItemTools } from '../../redux/fetchToolsSlice';
import { TFetchTools } from '../../redux/fetchToolsSlice';
import { addFavorite, deleteFavorite } from '../../redux/fetchFavoritesSlice';
import { deleteItemProduct } from '../../redux/fetchProductBankSlice';

type TCardStoreProps = {
  items: TFetchTools;
  toggle: Boolean;
};

export const CardStore: React.FC<TCardStoreProps> = ({ items, toggle }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { favoriteTools } = useSelector((state: RootState) => state.fetchFavoritesSlice);

  const confirm = () => {
    const selectDispatch = toggle ? deleteItemProduct(items.id) : deleteItemTools(items.id);
    dispatch(selectDispatch);
    dispatch(deleteFavorite(items.id));
    message.success('Успешно удалено');
  };

  const isItemAddedToFavorite = (id: string) => favoriteTools.some((obj) => obj.id === id);

  const actionsCard = [
    <Popconfirm title="Подвердить удаление?" onConfirm={confirm} okText="Да" cancelText="Нет">
      <DeleteOutlined key="delete" style={{ fontSize: '20px' }} />
    </Popconfirm>,
    <Tooltip title="в разработке...">
      <ShoppingOutlined key="ellipsis" style={{ fontSize: '20px' }} />
    </Tooltip>,
  ];

  const headerCard = (
    <>
      {isItemAddedToFavorite(items.id) ? (
        <HeartFilled
          style={{ color: '#FF4343', fontSize: '20px' }}
          onClick={() => dispatch(deleteFavorite(items.id))}
        />
      ) : (
        <Tooltip title="Добавить в избранное">
          <HeartOutlined
            style={{ fontSize: '20px' }}
            onClick={() => dispatch(addFavorite(items))}
          />
        </Tooltip>
      )}
    </>
  );

  return (
    <>
      <Card
        hoverable
        bordered={false}
        extra={headerCard}
        title={items.brand}
        actions={location.pathname !== '/favorites' ? actionsCard : [actionsCard[1]]}
      >
        <div className="product-card-wrapper-img">
          <Image src={items.image} rootClassName="product-card-img" />
        </div>

        <p className="product-card-label">{items.label}</p>

        <div className="product-card-price-block">
          {toggle ? (
            <>
              Кэшбэк от <span className="product-card-price"> {items.cashback}</span>%
            </>
          ) : (
            <span className="product-card-price">
              {items.price}
              <small> р.</small>
              <span> / шт</span>
            </span>
          )}
        </div>
      </Card>
    </>
  );
};
