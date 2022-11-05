import className from "classnames/bind";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import styles from "../../Layout/DefaultLayout/Sidebar/Sidebar.module.scss";
import { styleSelected } from "../../../redux/reducers/FiltersSlice";
import { productListSelector } from "../../../redux/selectors";

const cx = className.bind(styles);

function Style({ filterObject }) {
  const [clickTitle, setClickTitle] = useState(false);
  const dispatch = useDispatch();
  const productList = useSelector(productListSelector);

  const handleChangeStyle = (e) => {
    let updateChange = e.target.value;
    dispatch(styleSelected(updateChange));
  };

  const getUnique = (items, key) => {
    return ["All", ...new Set(items.map((item) => item[key]))];
  };
  const arrStyles = getUnique(productList, "style");

  return (
    <div>
      <button
        className={cx("title-filter")}
        onClick={() => setClickTitle(!clickTitle)}
      >
        <h2>KIỂU DÁNG</h2>
        {clickTitle ? (
          <FontAwesomeIcon className={cx("down-icon")} icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon className={cx("down-icon")} icon={faChevronDown} />
        )}
      </button>
      {clickTitle && (
        <ul className={cx("filter-list")}>
          {arrStyles.map((style, index) => (
            <li key={index} className={cx("filter-item", "mgb-10")}>
              <input
                type="radio"
                value={style}
                checked={filterObject.style === style}
                onChange={(e) => handleChangeStyle(e)}
              ></input>
              <p style={{ textTransform: "capitalize" }}>{style}</p>
            </li>
          ))}
        </ul>
      )}
      <div className={cx("dot-line")}></div>
    </div>
  );
}

export default Style;
