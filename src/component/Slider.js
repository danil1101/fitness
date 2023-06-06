import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
export default function Slider() {
  return (
    <div className="slider">
      <div className="slider-text">
        <h2>
          <span>Отзывы</span> от наших студентов
        </h2>
      </div>
      <div className="slider-phone">
        <button><MdOutlineArrowBackIosNew /></button>
        <img
          src="https://thumb.tildacdn.com/tild6361-3934-4238-b636-313232383663/-/resize/700x/-/format/webp/phone.png"
          alt=""
        />
        <button><MdOutlineArrowForwardIos /></button>
      </div>
    </div>
  );
}
