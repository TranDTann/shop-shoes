import className from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";

import {
  filterObjectSelector,
  productListSelector,
} from "../../../redux/selectors";
import styles from "../../Layout/DefaultLayout/Sidebar/Sidebar.module.scss";
import { priceOption } from "../FiltersSlice";

const cx = className.bind(styles);

function Price() {
  const getUnique = (items, key) => {
    return [...new Set(items.map((item) => item[key]))];
  };

  const filterObject = useSelector(filterObjectSelector);
  const productList = useSelector(productListSelector);
  const priceList = productList.map((product) => product.price);

  let priceMax = priceList[0];
  const arrPriceLenght = priceList.length;
  for (var i = 0; i < arrPriceLenght; i++) {
    if (priceList[i] > priceMax) {
      priceMax = priceList[i];
    }
  }

  const dispatch = useDispatch();

  const handleOptionPrice = (e) => {
    let updatePrice = e.target.value;
    dispatch(priceOption(updatePrice));
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
          max={priceMax}
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
