import React from "react";
import Logo from '../../assets/img/logo.png';
import { NavLink } from "react-router-dom";
import './navbar.scss';
import MyButton from "../UI/button/MyButton";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container navbar__wrapper">
        <img src={Logo} alt="logo" className="navbar__logo" />
        <ul className="navbar__links">
          {/* Link позволяет испльзовать навигацию без перезагрузки страницы */}
          <li><NavLink activeClassName="active" to="/coupons">Купоны</NavLink></li>
          <li><NavLink to="/impressions">Впечатления</NavLink></li>
          <li><NavLink to="/air-tickets">Авиабилеты</NavLink></li>
          <li><NavLink to="/railway-tickets">Ж/д билеты</NavLink></li>
          <li><NavLink to="/hotels">Отели</NavLink></li>
          <li><NavLink to="/partners">Партнеры и предложения</NavLink></li>
          <li><NavLink to="/mobile-app">Мобильное приложение</NavLink></li>
          <li><NavLink to="/lottery">Лотерея</NavLink></li>
          <li><NavLink to="/about">О программе</NavLink></li>
          <li><NavLink to="/charity">Благотворительность</NavLink></li>
        </ul>
        <MyButton
          typeStyle={'auth'}>Войти
        </MyButton>
      </div>
    </div>
  )
}

export default Navbar;