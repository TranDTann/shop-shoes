import className from "classnames/bind";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { productListSelector } from "../../../redux/selectors";
import styles from "../../Layout/DefaultLayout/Sidebar/Sidebar.module.scss";
import { colorCheck } from "../FiltersSlice";

const cx = className.bind(styles);

function Color() {
  const [clickColor, setClickColor] = useState(false);
  const productList = useSelector(productListSelector);
  const dispatch = useDispatch();

  const getUnique = (items, key) => {
    return [...new Set(items.map((item) => item[key]))];
  };

  const handleColor = (color) => {
    setClickColor(!clickColor);
    let updateColor = color;
    dispatch(colorCheck(updateColor));
  };

  let Colors = [...getUnique(productList, "typeColor")];
  const ColorList = Colors.map((color, index) => (
    <button
      key={index}
      className={cx("btn-color")}
      style={{
        backgroundColor: color,
      }}
      onClick={() => handleColor(color)}
    />
  ));
  return (
    <div>
      <div className={cx("title-filter")}>
        <h2>MÀU SẮC </h2>
      </div>
      <div className={cx("list-color")}>{ColorList}</div>
      <div className={cx("dot-line")}></div>
    </div>
  );
}

export default Color;
