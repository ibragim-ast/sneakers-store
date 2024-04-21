import Card from "../components/Card/Card";
import searchIcon from "../images/search.svg";
import Slider from "../components/Slider/Slider";

const Home = ({
  searchValue,
  onChangeSearchInput,
  setSearchValue,
  items,
  onAddToCart,
  isLoading,
}) => {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(12)] : filteredItems).map((item, index) => (
      <Card
        key={item ? item.id || index : index}
        onPlus={(obj) => onAddToCart(obj)}
        {...item}
        isLoading={isLoading}
      />
    ));
  };

  return (
    <div className="content">
      <Slider />
      <div className="content__container">
        <h1 className="content__title">
          {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
        </h1>
        <div className="content__search-block">
          <img src={searchIcon} alt="Search" />
          <input
            value={searchValue}
            className="content__input"
            type="text"
            placeholder="Поиск..."
            onChange={onChangeSearchInput}
          />
          {searchValue ? (
            <img
              className="cart-item__remove-btn"
              src="img/btn-remove.svg"
              alt="Очистить инпут"
              onClick={() => setSearchValue("")}
            />
          ) : null}
        </div>
      </div>
      <div className="sneakers">{renderItems()}</div>
    </div>
  );
};

export default Home;
