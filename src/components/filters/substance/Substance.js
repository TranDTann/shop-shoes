import className from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";

import {
  filterObjectSelector,
  productListSelector,
} from "../../../redux/selectors";
import styles from "../../Layout/DefaultLayout/Sidebar/Sidebar.module.scss";
import { substanceSelect } from "../FiltersSlice";

const cx = className.bind(styles);

function Substance() {
  const dispatch = useDispatch();
  const productList = useSelector(productListSelector);
  const filterObject = useSelector(filterObjectSelector);

  const getUnique = (items, key) => {
    return ["ALL", ...new Set(items.map((item) => item[key]))];
  };

  const substances = getUnique(productList, "by");

  const handleSelectSubstance = (e) => {
    let updateSubstance = e.target.value;
    dispatch(substanceSelect(updateSubstance));
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
