import React from 'react';
import { Card, Image, message, Popconfirm, Tooltip } from 'antd';
import { HeartFilled, DeleteOutlined, HeartOutlined, ShoppingOutlined } from '@ant-design/icons';
import './CardStore.scss';
import { useAppDispatch } from '../../redux/store';
import { deleteItem } from '../../redux/fetchToolsSlice';
import { useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../redux/fetchFavoritesSlice';
import { useLocation } from 'react-router-dom';

export const CardStore = ({ items }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { favoriteTools } = useSelector((state) => state.fetchFavoritesSlice);

  const confirm = (id) => {
    dispatch(deleteItem(id));
    dispatch(deleteFavorite(id));
    message.success('Успешно удалено');
  };

  const isItemAddedToFavorite = (id) => favoriteTools.some((obj) => obj.id === id);

  const actionsCard = [
    <Popconfirm
      title="Подвердить удаление?"
      onConfirm={() => confirm(items.id)}
      okText="Да"
      cancelText="Нет"
    >
      <DeleteOutlined key="delete" style={{ fontSize: '20px' }} />
    </Popconfirm>,
    <Tooltip title="underway...">
      <ShoppingOutlined key="ellipsis" style={{ fontSize: '20px' }} />
    </Tooltip>,
  ];
  return (
    <>
      <Card
        title={items.brand}
        bordered={false}
        hoverable
        extra={
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
        }
        actions={location.pathname !== '/favorites' ? actionsCard : [actionsCard[1]]}
      >
        <div className="block-img">
          <Image src={items.image} rootClassName="img-current" />
        </div>

        <p className="block_label">{items.label}</p>

        <div className="product-price-block">
          <span className="price-normal">
            {items.price}
            <small> р.</small>
            <span className="product-unit"> / шт</span>
          </span>
        </div>
      </Card>
    </>
  );
};
