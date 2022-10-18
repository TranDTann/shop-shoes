import className from "classnames/bind";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "../../Layout/DefaultLayout/Sidebar/Sidebar.module.scss";
import { listStatus } from "../FiltersSlice";

const cx = className.bind(styles);

function Status({ filterObject, statusList, setStatusList }) {
  const [clickTitle, setClickTitle] = useState(false);
  const dispatch = useDispatch();

  const handleAddStatusList = (status) => {
    let updateStatusList = [...statusList];
    if (updateStatusList.includes(status)) {
      updateStatusList = updateStatusList.filter((item) => item !== status);
    } else {
      updateStatusList.push(status);
    }
    setStatusList(updateStatusList);
    dispatch(listStatus(updateStatusList));
  };

  console.log(statusList);

  return (
    <div>
      <button
        className={cx("title-filter")}
        onClick={() => setClickTitle(!clickTitle)}
      >
        <h2>TRẠNG THÁI</h2>
        {clickTitle ? (
          <FontAwesomeIcon className={cx("down-icon")} icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon className={cx("down-icon")} icon={faChevronDown} />
        )}
      </button>
      {clickTitle && (
        <ul className={cx("filter-list", "filter-list-status")}>
          <li className={cx("filter-item", "mgb-10")}>
            <input
              checked={filterObject.limitedEdition}
              type="checkbox"
              onChange={() => handleAddStatusList("Limited Edition")}
            />
            <p>Limited Edition</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input
              checked={filterObject.onlineOnly}
              type="checkbox"
              onChange={() => handleAddStatusList("Online Only")}
            />
            <p>Online Only</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input
              checked={filterObject.saleOff}
              type="checkbox"
              onChange={() => handleAddStatusList("Sale Off")}
            />
            <p>Sale Off</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input
              checked={filterObject.bestSeller}
              type="checkbox"
              onChange={() => handleAddStatusList("Best Seller")}
            />
            <p>Best Seller</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input
              checked={filterObject.newArrival}
              type="checkbox"
              onChange={() => handleAddStatusList("New Arrival")}
            />
            <p>New Arrival</p>
          </li>
        </ul>
      )}
      <div className={cx("dot-line")}></div>
    </div>
  );
}

export default Status;
