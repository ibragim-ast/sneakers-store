import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="content__container">
          <h1 className="content__title">Все кроссовки</h1>
          <div className="content__search-block">
            <img src="/img/search-icon.svg" alt="Search" />
            <input
              className="content__input"
              type="text"
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="sneakers">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
