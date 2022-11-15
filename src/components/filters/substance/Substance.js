import className from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";

import { substanceSelected } from "../../../redux/reducers/FiltersSlice";
import {
  filterObjectSelector,
  productListSelector,
} from "../../../redux/selectors";
import styles from "../../Layout/DefaultLayout/Sidebar/Sidebar.module.scss";

const cx = className.bind(styles);

function Substance() {
  const dispatch = useDispatch();
  const productList = useSelector(productListSelector);
  const filterObject = useSelector(filterObjectSelector);

  const getUnique = (items, key) => [
    "ALL",
    ...new Set(items.map((item) => item[key])),
  ];

  const substances = getUnique(productList, "by");

  const handleSelectSubstance = (e) => {
    dispatch(substanceSelected(e.target.value));
  };

  return (
    <div>
      <div className={cx("title-filter")}>
        <h2>CHẤT LIỆU</h2>
      </div>
      <select
        className={cx("select-substance")}
        value={filterObject.substance}
        onChange={(e) => handleSelectSubstance(e)}
      >
        {substances.map((substance, index) => (
          <option key={index} className={cx("item")}>
            {substance}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Substance;
