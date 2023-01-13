# Hardware Store

[Hardware Store](https://nikitanevskij.github.io/hardware-store/)
Это SPA со списком карточек, на каждой из которых выводится картинка и информация о продукте, которая получена из базы данных.

## 🛠 Технологии:

- **ReactJS 18**
- **TypeScript**
- **Redux Toolkit**
- **React Router v6**
- **Axios**
- **AntDesign**

## Header:

- click на логотип делает запрос в базу данных, затем обновляет store новыми данными;
- click на пункт меню делает route на соответствующую ссылку;

## Switch:

![Switch](/src/assets/switch.png)

- меняет тематику SPA. Новые полученные данные не пересекаются с предыдущими. Каждое переключение switch делает запрос в базу;

## Card:

![like](/src/assets/like.png)

- реализовано добавление/удаление в favorites с всплывающей подсказкой;
  ![delete](/src/assets/delete.png)
- реализовано удаление выбранной карточки продукта из store с подтверждением действия;
  ![prewiew](/src/assets/prewiew.png)
- при клике на картинку, реализовано полноразмерное превью;
