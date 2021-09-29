import React from "react";
import Logo from '../../assets/img/logo.png';
import { Link } from "react-router-dom";
import './navbar.scss';
import MyButton from "../UI/button/MyButton";
import cl from '../UI/button/MyButton.module.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container navbar__wrapper">
        <img src={Logo} alt="logo" className="navbar__logo" />
        <ul className="navbar__links">
          {/* Link позволяет испльзовать навигацию без перезагрузки страницы */}
          <li><Link to="/coupons">Купоны</Link></li>
          <li><Link to="/impressions">Впечатления</Link></li>
          <li><Link to="/air-tickets">Авиабилеты</Link></li>
          <li><Link to="/railway-tickets">Ж/д билеты</Link></li>
          <li><Link to="/hotels">Отели</Link></li>
          <li><Link to="/partners">Партнеры и предложения</Link></li>
          <li><Link to="/mobile-app">Мобильное приложение</Link></li>
          <li><Link to="/lottery">Лотерея</Link></li>
          <li><Link to="/about">О программе</Link></li>
          <li><Link to="/charity">Благотворительность</Link></li>
        </ul>
        <MyButton>Войти</MyButton>
      </div>
    </div>
  )
}

export default Navbar;