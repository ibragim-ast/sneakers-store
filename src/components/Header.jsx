import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="headerLeft">
        <img
          className="header__logo"
          width={40}
          height={40}
          src="/img/logo.svg"
          alt="Logo"
        />
        <div className="headerInfo">
          <h3 className="header__title">C4 Sneakers</h3>
          <p className="header__description">Магазин кроссовок</p>
        </div>
      </div>
      <ul className="headerRight">
        <li>
          <img
            className="header__icon"
            width={18}
            height={18}
            src="/img/cart.svg"
            alt="Logo"
          />
          <span>1205 руб.</span>
        </li>
        <li>
          <img
            className="header__icon"
            width={18}
            height={18}
            src="/img/favorite.svg"
            alt="Logo"
          />
          <span>Закладки</span>
        </li>
        <li>
          <img
            className="header__icon"
            width={18}
            height={18}
            src="/img/user.svg"
            alt="Logo"
          />
          <span>Профиль </span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
