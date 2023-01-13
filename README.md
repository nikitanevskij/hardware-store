# Hardware Store

[Hardware Store](https://nikitanevskij.github.io/hardware-store/) это SPA со списком карточек, на каждой из которых выводится картинка и информация о продукте, которая получена из базы данных.

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

- меняет тематику SPA. Новые полученные данные не пересекаются с предыдущими. Каждое переключение switch делает запрос в базу;
  ![Switch](/src/assets/switch.png)

## Card:

- реализовано добавление/удаление в favorites с всплывающей подсказкой;
  ![like](/src/assets/like.png)
- реализовано удаление выбранной карточки продукта из store с подтверждением действия;
  ![delete](/src/assets/delete.png)
- при клике на картинку, реализовано полноразмерное превью;
  ![prewiew](/src/assets/prewiew.png)
