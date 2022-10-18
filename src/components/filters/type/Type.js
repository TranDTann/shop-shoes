import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "../../Layout/DefaultLayout/Sidebar/Sidebar.module.scss";
import { typeCheck } from "../FiltersSlice";

const cx = className.bind(styles);

function Type({ filterObject }) {
  const [clickTitle, setClickTitle] = useState(false);

  const dispatch = useDispatch();
  const handleChangeType = (e) => {
    let updateChange = e.target.value;
    dispatch(typeCheck(updateChange));
  };

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
          <li className={cx("filter-item", "mgb-10")}>
            <input
              type={"radio"}
              value="All"
              checked={filterObject.type === "All"}
              onChange={(e) => handleChangeType(e)}
            />
            <p>All</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input
              type={"radio"}
              value="vintas"
              checked={filterObject.type === "vintas"}
              onChange={(e) => handleChangeType(e)}
            />
            <p>Vintas</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input
              type={"radio"}
              value="urbas"
              checked={filterObject.type === "urbas"}
              onChange={(e) => handleChangeType(e)}
            />
            <p>Urbas</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input
              type={"radio"}
              value="pattas"
              checked={filterObject.type === "pattas"}
              onChange={(e) => handleChangeType(e)}
            />
            <p>Pattas</p>
          </li>
        </ul>
      )}
      <div className={cx("dot-line")}></div>
    </div>
  );
}

export default Type;
