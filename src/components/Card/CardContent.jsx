import React from 'react';
import { Card, Image, message, Popconfirm, Tooltip } from 'antd';
import { HeartFilled, DeleteOutlined, HeartOutlined, ShoppingOutlined } from '@ant-design/icons';
import './CardContent.scss';
import { useAppDispatch } from '../../redux/store';
import { deleteItem } from '../../redux/fetchToolsSlice';
import { useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../redux/fetchFavoritesSlice';
export const CardContent = ({ items }) => {
  const dispatch = useAppDispatch();
  const { favoriteTools } = useSelector((state) => state.fetchFavoritesSlice);

  const confirm = (key) => {
    dispatch(deleteItem(key));
    message.success('Успешно удалено');
  };

  const isItemAddedToFavorite = (key) => favoriteTools.some((obj) => obj.key === key);

  return (
    <>
      <Card
        title={items.brand}
        bordered={false}
        hoverable
        extra={
          <>
            {isItemAddedToFavorite(items.key) ? (
              <HeartFilled
                style={{ color: '#FF4343', fontSize: '20px' }}
                onClick={() => dispatch(deleteFavorite(items.key))}
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
        actions={[
          <>
            <Popconfirm
              title="Подвердить удаление?"
              onConfirm={() => confirm(items.key)}
              okText="Да"
              cancelText="Нет"
            >
              <DeleteOutlined key="delete" style={{ fontSize: '20px' }} />
            </Popconfirm>
          </>,
          <ShoppingOutlined key="ellipsis" style={{ fontSize: '20px' }} />,
        ]}
      >
        <div className="block_wrapper">
          <Image src={items.image} />
        </div>

        <div className="block_label">{items.label}</div>

        <p>{items.price}</p>
      </Card>
    </>
  );
};
