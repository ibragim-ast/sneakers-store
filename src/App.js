function App() {
  return (
    <div className="wrapper">
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
      <div className="content">
        <h1 className="content__title">Все кроссовки</h1>
        <div className="sneakers">
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
            <h5 className="card__title">
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="card__bottom">
              <div className="card__price-container">
                <span className="card__price-title">Цена:</span>
                <b className="card__price">12 999 руб.</b>
              </div>
              <button className="card__button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Добавить в корзину"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
            <h5 className="card__title">
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="card__bottom">
              <div className="card__price-container">
                <span className="card__price-title">Цена:</span>
                <b className="card__price">12 999 руб.</b>
              </div>
              <button className="card__button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Добавить в корзину"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="" />
            <h5 className="card__title">
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="card__bottom">
              <div className="card__price-container">
                <span className="card__price-title">Цена:</span>
                <b className="card__price">12 999 руб.</b>
              </div>
              <button className="card__button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Добавить в корзину"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="" />
            <h5 className="card__title">
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="card__bottom">
              <div className="card__price-container">
                <span className="card__price-title">Цена:</span>
                <b className="card__price">12 999 руб.</b>
              </div>
              <button className="card__button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Добавить в корзину"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
