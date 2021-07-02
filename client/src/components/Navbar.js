import React from 'react';
import { Link} from 'react-router-dom';
import logo from '../media/logo.png';

const MenuItems = [
  {
    title: 'Главная',
    link: '/',
  },
  {
    title: 'Предложения',
    link: '/offers',
  },
  {
    title: 'Online',
    link: '/app',
  },
  {
    title: 'Для студий',
    link: '/b2b',
  },
  {
    title: 'Обратная связь',
    link: '/feedback',
  }
];

const Navbar = ({ activeItemIndex }) => {  
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(activeItemIndex || 0);

  const handleClick = (index) => {
    setActive(index);
    setOpen(false);
  };

  return (
    <>
      <nav className={open ? 'navbar' : 'navbar navbar--closed'}>
        <div onClick={()=>setActive(0)}>
          <Link to="/">
            <img className="navbar__img" src={logo} alt="logoimg" />
          </Link>
        </div>
        <ul className={open ? 'navbar__list' : 'navbar__list closed'}>
          {MenuItems.map((item, index) => (
            <li
              key={item.title}
              className={`navbar__item ${active === index ? 'navbar__item--active' : ''}`}
              onClick={() => handleClick(index)}
              
            >
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        onClick={() => setOpen(!open)}
        className={
          open ? `navbar__close navbar__close--open` : `navbar__close navbar__close--close`
        }
      ></div>
    </>
  );
};

export default Navbar;
