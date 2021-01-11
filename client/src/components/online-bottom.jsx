import React from 'react';
import Dialog from '../components/material-dialog';
import bookImg from '../media/online/book.png';
import userImg from '../media/online/user.png';
import ratingImg from '../media/online/rating.png';
import menuImg from '../media/online/menu.jpg';

const BottomOnline = () => {
  return (
    <div className="online__bottom">
      <div className="online__container">
        <ul>
          <li>
            <Dialog            
              description="
            Полная версия будет доступна в приложениях AppStore и GooglePlay с 1 марта 2021"
              title="Элементы и их названия"
            >
              <img src={bookImg} alt="online-img" />
            </Dialog>
          </li>
          <li>
            <Dialog
            mark={<p></p>}
              description="Это демо-версия личного кабинета.
            Полная версия будет доступна в приложениях AppStore и GooglePlay с 1 марта 2021"
              title="Личный кабинет"
            >
              <img src={userImg} alt="online-img" />
              
            </Dialog>
          </li>
          <li>
            <Dialog
              description="Это демо версия статистики. Полная версия будет доступна в приложениях AppStore и GooglePlay с 1 марта 2021"
              title="Статистика users"
            >
              <img src={ratingImg} alt="online-img" />
            </Dialog>
          </li>
          <li>
            <Dialog
            mark={
              <ul className="online__bottom-menu">
                <li>
                  <a href="/">Главная</a>
                </li>
                <li>
                  <a href="/p1">Предложения</a>
                </li>
                <li>
                  <a href="/p2">ONLINE</a>
                </li>
                <li>
                  <a href="/p3">Для студий</a>
                </li>
                <li>
                  <a href="/feedback">Обратная связь</a>
                </li>
              </ul>
            }
              description=""
              title="Меню"
            >
              <img src={menuImg} alt="online-img" />
            </Dialog>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomOnline;
