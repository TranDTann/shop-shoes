import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { typeSelected } from "../../../redux/reducers/FiltersSlice";
import { productListSelector } from "../../../redux/selectors";
import styles from "../../Layout/DefaultLayout/Sidebar/Sidebar.module.scss";

const cx = className.bind(styles);

function Type({ filterObject }) {
  const [clickTitle, setClickTitle] = useState(false);
  const productList = useSelector(productListSelector);
  const dispatch = useDispatch();

  const handleChangeType = (e) => {
    dispatch(typeSelected(e.target.value));
  };

  const getUnique = (items, key) => [
    "All",
    ...new Set(items.map((item) => item[key])),
  ];
  const types = getUnique(productList, "type");

  return (
    <div>
      <button
        className={cx("title-filter")}
        onClick={() => setClickTitle(!clickTitle)}
      >
        <h2>DÒNG SẢN PHẨM</h2>
        {clickTitle ? (
          <FontAwesomeIcon className={cx("down-icon")} icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon className={cx("down-icon")} icon={faChevronDown} />
        )}
      </button>
      {clickTitle && (
        <ul className={cx("filter-list")}>
          {types.map((type, index) => (
            <li key={index} className={cx("filter-item", "mgb-10")}>
              <input
                id={type}
                type="radio"
                value={type}
                checked={filterObject.type === type}
                onChange={(e) => handleChangeType(e)}
              />
              <label for={type} style={{ textTransform: "capitalize" }}>
                {type}
              </label>
            </li>
          ))}
        </ul>
      )}
      <div className={cx("dot-line")}></div>
    </div>
  );
}

export default Type;
