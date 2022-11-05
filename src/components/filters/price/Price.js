import className from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { priceSelected } from "../../../redux/reducers/FiltersSlice";

import { filterObjectSelector } from "../../../redux/selectors";
import styles from "../../Layout/DefaultLayout/Sidebar/Sidebar.module.scss";

const cx = className.bind(styles);

function Price() {
  const filterObject = useSelector(filterObjectSelector);
  const dispatch = useDispatch();

  const handleOptionPrice = (e) => {
    dispatch(priceSelected(e.target.value));
  };

  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }

  return (
    <div>
      <div className={cx("title-filter")}>
        <h2>GIÁ</h2>
      </div>
      <div className={cx("price")}>
        <p className={cx("des-price")}>
          Price: <b>0</b> to <b>{formatCash(String(filterObject.price))} VND</b>
        </p>
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
