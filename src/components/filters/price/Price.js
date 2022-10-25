import className from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";

import { filterObjectSelector } from "../../../redux/selectors";
import styles from "../../Layout/DefaultLayout/Sidebar/Sidebar.module.scss";
import { priceOption } from "../FiltersSlice";

const cx = className.bind(styles);

function Price() {
  const filterObject = useSelector(filterObjectSelector);

  const dispatch = useDispatch();

  const handleOptionPrice = (e) => {
    dispatch(priceOption(e.target.value));
  };

  return (
    <div>
      <div className={cx("title-filter")}>
        <h2>GIÁ</h2>
      </div>
      <div className={cx("price")}>
        <p className={cx("des-price")}>Price: 0 to {filterObject.price} VND</p>
        <input
          className={cx("price-slider")}
          type="range"
          min={0}
          max={990000}
          step={1000}
          value={filterObject.price}
          onChange={(e) => handleOptionPrice(e)}
        />
      </div>
      <div className={cx("dot-line")}></div>
    </div>
  );
}

export default Price;
