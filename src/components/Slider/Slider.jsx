import styles from "./Slider.scss";
import banner from "../../images/banner.jpeg";

function Slider() {
  return (
    <section className="slider">
      <div className="slider__container">
        <div className="slider__text-block">
          <div className="slider__link">
            <img alt="logotype" width={120} height={40} src={banner} />
          </div>
          <h2 className="slider__title">
            <span className="slider__title-span">John Smith</span>Forever!
          </h2>
          <button className="slider__button">Купить</button>
        </div>
      </div>
    </section>
  );
}

export default Slider;
