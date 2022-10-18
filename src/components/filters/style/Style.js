import className from "classnames/bind";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useState } from "react";

import styles from "../../Layout/DefaultLayout/Sidebar/Sidebar.module.scss";
import { styleCheck } from "../FiltersSlice";

const cx = className.bind(styles);

function Style({ filterObject }) {
  const [clickTitle, setClickTitle] = useState(false);

  const dispatch = useDispatch();

  const handleChangeStyle = (e) => {
    let updateChange = e.target.value;
    dispatch(styleCheck(updateChange));
  };
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
          <li className={cx("filter-item", "mgb-10")}>
            <input
              type="radio"
              value="All"
              checked={filterObject.style === "All"}
              onChange={(e) => handleChangeStyle(e)}
            />
            <p>All</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input
              type="radio"
              value="low top"
              checked={filterObject.style === "low top"}
              onChange={(e) => handleChangeStyle(e)}
            />
            <p>Low Top</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input
              type="radio"
              value="high top"
              checked={filterObject.style === "high top"}
              onChange={(e) => handleChangeStyle(e)}
            />
            <p>High Top</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input
              type="radio"
              value="slip-on"
              checked={filterObject.style === "slip-on"}
              onChange={(e) => handleChangeStyle(e)}
            />
            <p>Slip-On</p>
          </li>
        </ul>
      )}
      <div className={cx("dot-line")}></div>
    </div>
  );
}

export default Style;
