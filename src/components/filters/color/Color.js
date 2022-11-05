import className from "classnames/bind";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorSelected } from "../../../redux/reducers/FiltersSlice";

import { productListSelector } from "../../../redux/selectors";
import styles from "../../Layout/DefaultLayout/Sidebar/Sidebar.module.scss";

const cx = className.bind(styles);

function Color() {
  const [clickColor, setClickColor] = useState(false);
  const productList = useSelector(productListSelector);
  const dispatch = useDispatch();

  const getUnique = (items, key) => {
    return [...new Set(items.map((item) => item[key]))];
  };
  let Colors = [...getUnique(productList, "typeColor")];

  const handleColor = (color) => {
    setClickColor(!clickColor);
    let updateColor = color;
    dispatch(colorSelected(updateColor));
  };

  return (
    <div>
      <div className={cx("title-filter")}>
        <h2>MÀU SẮC </h2>
      </div>
      <div className={cx("list-color")}>
        {Colors.map((color, index) => (
          <button
            key={index}
            className={cx("btn-color")}
            style={{
              backgroundColor: color,
            }}
            onClick={() => handleColor(color)}
          />
        ))}
      </div>
      <div className={cx("dot-line")}></div>
    </div>
  );
}

export default Color;
